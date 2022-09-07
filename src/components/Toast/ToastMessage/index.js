import PropTypes from 'prop-types'

import xCircleIcon from '../../../assets/icons/x-circle.svg'
import checkCircleIcon from '../../../assets/icons/check-circle.svg'

import * as S from './styles'

function ToastMessage ({ text, type }) {
  return (
    <S.Container type={type}>
      {type === 'danger' && <img src={xCircleIcon} alt="X" />}
      {type === 'success' && <img src={checkCircleIcon} alt="Check" />}
      <strong>{text}</strong>
    </S.Container>
  )
}

export { ToastMessage }

ToastMessage.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['default', 'success', 'danger'])
}

ToastMessage.defaultProps = {
  type: 'default'
}
