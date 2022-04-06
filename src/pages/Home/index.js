import arrow from '../../assets/icons/arrow.svg'

import { CardsList } from '../../components/CardsList'

import * as S from './styles'

function Home () {
  return (
    <>
      <S.InputSearchContainer>
        <input type="text" name="search" placeholder='Search contact by name...'/>
      </S.InputSearchContainer>

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

export { Home }
