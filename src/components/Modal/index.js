import PropTypes from 'prop-types'

import Button from '../Button'
import { ReactPortal } from '../ReactPortal'

import * as S from './styles'

function Modal ({
  danger,
  title,
  children,
  confirmLabel,
  cancelLabel,
  onConfirm,
  onCancel,
  isVisible,
  isLoading
}) {
  if (!isVisible) return null

  return (
    <ReactPortal containerId="modal-root">
      <S.Overlay>
        <S.Container danger={danger}>
          <S.Title danger={danger}>{title}</S.Title>

          <S.Body>{children}</S.Body>

          <S.Footer>
            <button
              type="button"
              className="cancel-btn"
              onClick={onCancel}
              disabled={isLoading}
            >
              {cancelLabel}
            </button>

            <Button
              type="button"
              danger={danger}
              onClick={onConfirm}
              isLoading={isLoading}
            >
              {confirmLabel}
            </Button>
          </S.Footer>
        </S.Container>
      </S.Overlay>
    </ReactPortal>
  )
}

export { Modal }

Modal.propTypes = {
  danger: PropTypes.bool,
  isVisible: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  confirmLabel: PropTypes.string,
  cancelLabel: PropTypes.string,
  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  isLoading: PropTypes.bool
}

Modal.defaultProps = {
  danger: false,
  isLoading: false,
  cancelLabel: 'Cancel',
  confirmLabel: 'Confirm'
}
