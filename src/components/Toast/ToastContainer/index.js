import { useState, useEffect, useCallback } from 'react'

import { ToastMessage } from '../ToastMessage'

import { toastEventManager } from '../../../utils/toast.js'

import * as S from './styles'

function ToastContainer () {
  const [messages, setMessages] = useState([])
  const [pendingRemovalMessagesIds, setPendingRemovalMessagesIds] = useState([])

  useEffect(() => {
    function handleAddToast ({ type, text, duration }) {
      setMessages(prevState => [
        ...prevState,
        { id: Math.random(), type, text, duration }
      ])
    }

    toastEventManager.on('addtoast', handleAddToast)

    return () => {
      toastEventManager.removeListener('addtoast', handleAddToast)
    }
  }, [])

  const handleRemoveMessage = useCallback((id) => {
    setPendingRemovalMessagesIds(
      (prevState) => [...prevState, id]
    )
  }, [])

  const handleAnimationEnd = useCallback((id) => {
    setMessages((prevState) => prevState.filter((message) => message.id !== id))

    setPendingRemovalMessagesIds(
      (prevState) => prevState.filter((messageId) => messageId !== id)
    )
  }, [])

  console.log(messages, pendingRemovalMessagesIds)

  return (
    <S.Container>
      {messages.map(message => (
        <ToastMessage
          key={message.id}
          message={message}
          onRemoveMessage={handleRemoveMessage}
          onAnimationEnd={handleAnimationEnd}
          isLeaving={pendingRemovalMessagesIds.includes(message.id)}
        />
      ))}
    </S.Container>
  )
}

export { ToastContainer }
