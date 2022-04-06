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
            <button type="button">
              <EditIcon />
            </button>

            <button type="button">
              <TrashIcon />
            </button>
          </S.CardActionsBox>
        </S.CardItem>
      </S.Card>

      <S.Card>
        <S.CardItem>
          <S.CardInfo>
            <S.ContactName>
              Bárbara Victor
              <small>Category</small>
            </S.ContactName>
            <S.ContactEmail>barbaravictor.design@gmail.com</S.ContactEmail>
            <S.ContactPhone>(61) 99929-9109</S.ContactPhone>
          </S.CardInfo>

          <S.CardActionsBox>
            <a href='#'>
              <EditIcon />
            </a>

            <a href='#'>
             <TrashIcon />
            </a>
          </S.CardActionsBox>
        </S.CardItem>
      </S.Card>
    </S.CardsContainer>
  )
}

export { CardsList }
