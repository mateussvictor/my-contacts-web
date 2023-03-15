import emptyBox from '../../../../assets/images/empty-box.svg'

import * as S from './styles'

export default function EmptyList() {
  return (
    <S.Container>
      <S.EmptyBox src={emptyBox} alt="Empty box" />

      <p>
        You do not have any contacts registered yet. Click on the{' '}
        <strong>&quot;New contact&quot; </strong>
        button above to register your first one.
      </p>
    </S.Container>
  )
}
