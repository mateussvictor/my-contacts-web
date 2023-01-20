import { useEffect } from 'react'
import PropTypes from 'prop-types'

import xCircleIcon from '../../../assets/icons/x-circle.svg'
import checkCircleIcon from '../../../assets/icons/check-circle.svg'

import useAnimatedUnmount from '../../../hooks/useAnimatedUnmount'

import * as S from './styles'

function ToastMessage ({ message, onRemoveMessage, isLeaving }) {
  const { shouldRender, animatedElementRef } = useAnimatedUnmount(!isLeaving)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onRemoveMessage(message.id)
    }, message.duration || 7000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [message, onRemoveMessage])

  function handleRemoveToast () {
    onRemoveMessage(message.id)
  }

  if (!shouldRender) {
    return null
  }

  return (
    <S.Container
      type={message.type}
      onClick={handleRemoveToast}
      tabIndex={0}
      role="button"
      isLeaving={isLeaving}
      ref={animatedElementRef}
    >
      {message.type === 'danger' && <img src={xCircleIcon} alt="X" />}
      {message.type === 'success' && <img src={checkCircleIcon} alt="Check" />}
      <strong>{message.text}</strong>
    </S.Container>
  )
}

export { ToastMessage }

ToastMessage.propTypes = {
  onRemoveMessage: PropTypes.func.isRequired,
  isLeaving: PropTypes.bool.isRequired,
  message: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['default', 'success', 'danger']),
    duration: PropTypes.number
  }).isRequired
}
