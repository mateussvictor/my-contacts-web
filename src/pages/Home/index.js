import { Link } from 'react-router-dom'

import arrow from '../../assets/icons/arrow.svg'

import { CardsList } from '../../components/CardsList'
import { Modal } from '../../components/Modal'

import * as S from './styles'

function Home () {
  return (
    <>
      <Modal danger />

      <S.InputSearchContainer>
        <input type="text" name="search" placeholder='Search contact by name...'/>
      </S.InputSearchContainer>

      <S.Container>
        <S.ContactsNumber>3 contacts</S.ContactsNumber>
        <Link to="/new">New contact</Link>

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
