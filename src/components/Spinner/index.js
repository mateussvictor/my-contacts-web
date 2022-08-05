import PropTypes from 'prop-types'
import { StyledSpinner } from './styles'

function Spinner ({ size }) {
  return <StyledSpinner size={size} />
}

export { Spinner }

Spinner.propTypes = {
  size: PropTypes.number.isRequired
}

Spinner.defaultProps = {
  size: 32
}
