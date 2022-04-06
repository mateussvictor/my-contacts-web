import arrow from '../../assets/icons/arrow.svg'

import { CardsList } from '../CardsList'

import * as S from './styles'

function ContactsList () {
  return (
    <>
      <S.Container>
        <S.ContactsNumber>3 contacts</S.ContactsNumber>
        <S.NewContactButton href="#">New contact</S.NewContactButton>
      </S.Container>

      <S.ListContainer>
        <S.ListHeader>
          <S.OrderButton type="button">
            Name
            <S.ArrowIcon src={arrow} alt="Arrow" />
          </S.OrderButton>
        </S.ListHeader>

        <CardsList />

      </S.ListContainer>
    </>
  )
}

export { ContactsList }
