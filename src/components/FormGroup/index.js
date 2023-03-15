import PropTypes from 'prop-types'
import { Spinner } from '../Spinner'

import * as S from './styles'

function FormGroup({ children, error = null, isLoading }) {
  return (
    <S.Container>
      <div className="form-item">
        {children}

        {isLoading && (
          <div className="loader">
            <Spinner size={16} />
          </div>
        )}
      </div>

      {error && <small>{error}</small>}
    </S.Container>
  )
}

export { FormGroup }

FormGroup.propTypes = {
  children: PropTypes.node.isRequired,
  error: PropTypes.string,
  isLoading: PropTypes.bool
}
