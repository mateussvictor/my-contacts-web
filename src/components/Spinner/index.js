import PropTypes from 'prop-types'
import { StyledSpinner } from './styles'

function Spinner({ size = 32 }) {
  return <StyledSpinner size={size} />
}

export { Spinner }

Spinner.propTypes = {
  size: PropTypes.number.isRequired
}
