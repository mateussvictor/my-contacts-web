import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import * as S from './styles'

export default function Header({
  hasError,
  contactsAmount,
  filteredContactsAmount
}) {
  const aligment = hasError
    ? 'flex-end'
    : contactsAmount > 0
    ? 'space-between'
    : 'center'

  return (
    <S.Container hasError={hasError} justifyContent={aligment}>
      {!hasError && contactsAmount > 0 && (
        <S.ContactsNumber>
          {filteredContactsAmount}
          {filteredContactsAmount === 1 ? ' contact' : ' contacts'}
        </S.ContactsNumber>
      )}

      <Link to="/new">New contact</Link>
    </S.Container>
  )
}

Header.propTypes = {
  hasError: PropTypes.bool.isRequired,
  contactsAmount: PropTypes.number.isRequired,
  filteredContactsAmount: PropTypes.number.isRequired
}
