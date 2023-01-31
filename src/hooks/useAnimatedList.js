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

  const handleAnimationEnd = useCallback((id) => {
    setItems((prevState) => prevState.filter((message) => message.id !== id))

    setPendingRemovalItemsIds(
      (prevState) => prevState.filter((messageId) => messageId !== id)
    )
  }, [])

  useEffect(() => {
    pendingRemovalItemsIds.forEach((itemId) => {
      const animatedRef = animatedRefs.current.get(itemId)
      const alreadyHasListener = animationEndListeners.current.has(itemId)

      if (animatedRef?.current && !alreadyHasListener) {
        alreadyHasListener.current.set(itemId, true)

        animatedRef.current.addEventListener('animationend', () => {
          handleAnimationEnd(itemId)
        })
      }
    })
  }, [pendingRemovalItemsIds, handleAnimationEnd])

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
