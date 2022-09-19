import PropTypes from 'prop-types'
import { Spinner } from '../Spinner'

import * as S from './styles'

function Button ({
  type,
  disabled,
  isLoading,
  children,
  danger,
  onClick
}) {
  return (
    <S.StyledButton
      danger={danger}
      type={type}
      disabled={disabled || isLoading}
      onClick={onClick}
    >
      {!isLoading && children}
      {isLoading && <Spinner size={16} />}
    </S.StyledButton>
  )
}

export { Button }

Button.propTypes = {
  type: PropTypes.string,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  children: PropTypes.node.isRequired,
  danger: PropTypes.bool,
  onClick: PropTypes.func
}

Button.defaultProps = {
  type: 'button',
  disabled: false,
  isLoading: false,
  danger: false
}
