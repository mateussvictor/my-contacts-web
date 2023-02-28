import { useEffect, useRef, useState, useCallback, createRef } from 'react'

export default function useAnimatedList (initialValue = []) {
  const [items, setItems] = useState(initialValue)
  const [pendingRemovalItemsIds, setPendingRemovalItemsIds] = useState([])

  const animatedRefs = useRef(new Map())
  const animationEndListeners = useRef(new Map())

  const handleRemoveMessage = useCallback((id) => {
    setPendingRemovalItemsIds(
      (prevState) => [...prevState, id]
    )
  }, [])

  const handleAnimationEnd = useCallback((itemId) => {
    const removeListener = animationEndListeners.current.get(itemId)
    removeListener()

    animationEndListeners.current.delete(itemId)
    animatedRefs.current.delete(itemId)

    setItems((prevState) => prevState.filter((item) => item.id !== itemId))
    setPendingRemovalItemsIds(
      (prevState) => prevState.filter((id) => id !== itemId)
    )
  }, [])

  useEffect(() => {
    pendingRemovalItemsIds.forEach((itemId) => {
      const animatedRef = animatedRefs.current.get(itemId)
      const animatedElement = animatedRef?.current
      const alreadyHasListener = animationEndListeners.current.has(itemId)

      if (animatedElement && !alreadyHasListener) {
        const onAnimationEnd = () => handleAnimationEnd(itemId)
        const removeListener = () => {
          animatedElement.removeEventListener('animationend', onAnimationEnd)
        }

        alreadyHasListener.current.set(itemId, onAnimationEnd)
        animationEndListeners.current.set(removeListener)
      }
    })
  }, [pendingRemovalItemsIds, handleAnimationEnd])

  useEffect(() => {
    const removeListeners = animationEndListeners.current

    return () => {
      removeListeners.forEach(removeListener => removeListener())
    }
  }, [])

  const getAnimatedRef = useCallback((itemId) => {
    let animatedRef = animatedRefs.current.get(itemId)

    if (!animatedRef) {
      animatedRef = createRef()
      animatedRefs.current.get(itemId, animatedRef)
    }

    return animatedRef
  }, [])

  const renderList = useCallback((renderItem) => (
    items.map((item) => {
      const isLeaving = pendingRemovalItemsIds.includes(item.id)
      const animatedRef = getAnimatedRef(item.id)

      return renderItem(item, { isLeaving, animatedRef })
    })
  ), [items, pendingRemovalItemsIds])

  return {
    items,
    setItems,
    renderList,
    handleRemoveMessage
  }
}
