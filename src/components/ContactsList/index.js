import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import formatPhone from '../../utils/formatPhone'

import { ReactComponent as EditIcon } from '../../assets/icons/edit.svg'
import { ReactComponent as TrashIcon } from '../../assets/icons/trash.svg'

import * as S from './styles'

export default function ContactsList ({ contacts, onDelete }) {
  const contactsExists = contacts.length > 0

  if (contactsExists) {
    return (
      <S.CardsContainer>
        <S.Card>
          {contacts.map(contact => (
            <S.CardItem key={contact.id}>
              <S.CardInfo>
                <S.ContactName>
                  {contact.name}

                  {contact.category.name && (
                    <S.CategoryLabel>{contact.category.name}</S.CategoryLabel>
                  )}
                </S.ContactName>

                <S.ContactEmail>{contact.email}</S.ContactEmail>

                <S.ContactPhone>{formatPhone(contact.phone)}</S.ContactPhone>
              </S.CardInfo>

              <S.CardActionsBox>
                <Link to={`/edit/${contact.id}`}>
                  <EditIcon />
                </Link>

                <button type="button" onClick={() => onDelete(contact)}>
                  <TrashIcon />
                </button>
              </S.CardActionsBox>
            </S.CardItem>
          ))}
        </S.Card>
      </S.CardsContainer>
    )
  }
}

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired
}
