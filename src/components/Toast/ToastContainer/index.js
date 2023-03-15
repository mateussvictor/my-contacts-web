import { useEffect } from 'react'

import ToastMessage from '../ToastMessage'

import { toastEventManager } from '../../../utils/toast.js'

import useAnimatedList from '../../../hooks/useAnimatedList'

import * as S from './styles'

function ToastContainer() {
  const { setItems, renderList, handleRemoveMessage } = useAnimatedList()

  useEffect(() => {
    function handleAddToast({ type, text, duration }) {
      setItems((prevState) => [
        ...prevState,
        { id: Math.random(), type, text, duration }
      ])
    }

    toastEventManager.on('addtoast', handleAddToast)

    return () => {
      toastEventManager.removeListener('addtoast', handleAddToast)
    }
  }, [setItems])

  return (
    <S.Container>
      {renderList((message, { isLeaving, animatedRef }) => (
        <ToastMessage
          key={message.id}
          message={message}
          onRemoveMessage={handleRemoveMessage}
          animatedRef={animatedRef}
          isLeaving={isLeaving}
        />
      ))}
    </S.Container>
  )
}

export { ToastContainer }
