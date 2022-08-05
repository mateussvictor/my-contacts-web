import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import { Spinner } from '../Spinner'
import * as S from './styles'

function Loader ({ isLoading }) {
  if (!isLoading) {
    return null
  }

  return ReactDOM.createPortal(
    <S.Overlay>
      <Spinner size={90} />
    </S.Overlay>,
    document.getElementById('loader-root')
  )
}

export { Loader }

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired
}
