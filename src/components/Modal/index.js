import PropTypes from 'prop-types'
import useAnimatedUnmount from '../../hooks/useAnimatedUnmount'

import Button from '../Button'
import { ReactPortal } from '../ReactPortal'

import * as S from './styles'

export default function Modal ({
  danger = false,
  confirmLabel = 'Confirm',
  cancelLabel = 'Cancel',
  isLoading = false,
  title,
  children,
  onConfirm,
  onCancel,
  isVisible,
}) {
  const { shouldRender, animatedElementRef } = useAnimatedUnmount(isVisible)

  if (!shouldRender) return null

  return (
    <ReactPortal containerId="modal-root">
      <S.Overlay isLeaving={!isVisible} ref={animatedElementRef}>
        <S.Container danger={danger} isLeaving={!isVisible}>
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
