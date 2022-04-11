import { Link } from 'react-router-dom'

import { ReactComponent as EditIcon } from '../../assets/icons/edit.svg'
import { ReactComponent as TrashIcon } from '../../assets/icons/trash.svg'

import * as S from './styles'

function CardsList () {
  return (
    <S.CardsContainer>
      <S.Card>
        <S.CardItem>
          <S.CardInfo>
            <S.ContactName>
              Mateus Victor
              <small>Category</small>
            </S.ContactName>
            <S.ContactEmail>mateusvictor.dev@gmail.com</S.ContactEmail>
            <S.ContactPhone>(61) 99929-9109</S.ContactPhone>
          </S.CardInfo>

          <S.CardActionsBox>
            <Link to="/edit/123">
              <EditIcon />
            </Link>

            <button type="button">
              <TrashIcon />
            </button>
          </S.CardActionsBox>
        </S.CardItem>
      </S.Card>
    </S.CardsContainer>
  )
}

export { CardsList }
