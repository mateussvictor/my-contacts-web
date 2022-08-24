import PropTypes from 'prop-types'
import { Spinner } from '../Spinner'

import * as S from './styles'

function Button ({ type, disabled, isLoading, children }) {
  return (
    <S.StyledButton type={type} disabled={disabled || isLoading}>
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
  children: PropTypes.node.isRequired
}

Button.defaultProps = {
  type: 'button',
  disabled: false,
  isLoading: false
}
