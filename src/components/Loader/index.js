import PropTypes from 'prop-types'

import { Spinner } from '../Spinner'
import { ReactPortal } from '../ReactPortal'

import useAnimatedUnmount from '../../hooks/useAnimatedUnmount'
import * as S from './styles'

export default function Loader ({ isLoading }) {
  const { shouldRender, animatedElementRef } = useAnimatedUnmount(isLoading)

  if (!shouldRender) return null

  return (
    <ReactPortal containerId="loader-root">
      <S.Overlay isLeaving={!isLoading} ref={animatedElementRef}>
        <Spinner size={90} />
      </S.Overlay>
    </ReactPortal>
  )
}

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired
}
