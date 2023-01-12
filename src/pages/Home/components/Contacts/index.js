import PropTypes from 'prop-types'

import ContactsList from '../../../../components/ContactsList'

import arrow from '../../../../assets/icons/arrow.svg'

import * as S from './styles'

export default function Contacts ({
  filteredContacts,
  onToggleOrderBy,
  onDeleteContact,
  orderBy
}) {
  return (
    <>
      {filteredContacts.length > 0 && (
        <>
          <S.OrderButton type="button" onClick={onToggleOrderBy}>
            Name
            <S.ArrowIcon src={arrow} alt="Arrow" orderBy={orderBy} />
          </S.OrderButton>

          <ContactsList
            contacts={filteredContacts}
            onDelete={onDeleteContact}
          />
        </>
      )}
    </>
  )
}

Contacts.propTypes = {
  filteredContacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string,
    phone: PropTypes.string,
    category: PropTypes.shape({
      name: PropTypes.string
    })
  })).isRequired,
  onToggleOrderBy: PropTypes.func.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
  orderBy: PropTypes.string.isRequired
}
