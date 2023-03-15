import PropTypes from 'prop-types'

import Button from '../../../../components/Button'

import sad from '../../../../assets/images/sad.svg'

import * as S from './styles'

export default function ErrorStatus({ onTryAgain }) {
  return (
    <S.ErrorContainer>
      <S.ErrorIcon src={sad} />

      <S.ErrorDetails>
        <S.ErrorMessage>
          There was an error getting the contacts.
        </S.ErrorMessage>

        <Button onClick={onTryAgain}>Try again</Button>
      </S.ErrorDetails>
    </S.ErrorContainer>
  )
}

ErrorStatus.propTypes = {
  onTryAgain: PropTypes.func.isRequired
}
