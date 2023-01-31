import { useEffect } from 'react'
import PropTypes from 'prop-types'

import xCircleIcon from '../../../assets/icons/x-circle.svg'
import checkCircleIcon from '../../../assets/icons/check-circle.svg'

import * as S from './styles'

function ToastMessage ({ message, onRemoveMessage, isLeaving, animatedRef }) {
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

  return (
    <S.Container
      type={message.type}
      onClick={handleRemoveToast}
      tabIndex={0}
      role="button"
      isLeaving={isLeaving}
      ref={animatedRef}
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
  }).isRequired,
  animatedRef: PropTypes.shape().isRequired
}
