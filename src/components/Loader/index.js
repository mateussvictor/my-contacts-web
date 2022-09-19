import PropTypes from 'prop-types'

import { Spinner } from '../Spinner'
import { ReactPortal } from '../ReactPortal'
import * as S from './styles'

function Loader ({ isLoading }) {
  if (!isLoading) {
    return null
  }

  return (
    <ReactPortal containerId="loader-root">
      <S.Overlay>
        <Spinner size={90} />
      </S.Overlay>
    </ReactPortal>
  )
}

export { Loader }

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired
}
