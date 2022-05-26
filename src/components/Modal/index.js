import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'

import { Button } from '../Button'
import * as S from './styles'

function Modal ({ danger }) {
  return ReactDOM.createPortal(
    <S.Overlay>
      <S.Container danger={danger}>
        <h1>Modal title</h1>
        <p>Modal description</p>

        <S.Footer>
          <button type="button" className="cancel-btn">Cancel</button>
          <Button type="button" danger={danger}>Delete</Button>
        </S.Footer>
      </S.Container>
    </S.Overlay>,
    document.getElementById('modal-root')
  )
}

export { Modal }

Modal.propTypes = {
  danger: PropTypes.bool
}

Modal.defaultProps = {
  danger: false
}
