import { useState, useEffect, useMemo, useCallback } from 'react'
import { Link } from 'react-router-dom'

import arrow from '../../assets/icons/arrow.svg'
import sad from '../../assets/images/sad.svg'

import { ContactsList } from '../../components/ContactsList'
import { Loader } from '../../components/Loader'
import { Button } from '../../components/Button'

import ContactsService from '../../services/ContactsService'

import * as S from './styles'

function Home () {
  const [contacts, setContacts] = useState([])
  const [orderBy, setOrderBy] = useState('asc')
  const [searchTerm, setSearchTerm] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  const filteredContacts = useMemo(() => {
    return contacts.filter(contact => (
      contact.name.toLowerCase().includes(searchTerm.toLowerCase())
    ))
  }, [contacts, searchTerm])

  const shouldRenderContactsList = filteredContacts.length > 0 && !hasError

  const loadContacts = useCallback(async () => {
    try {
      setIsLoading(true)

      const contactsList = await ContactsService.listContacts(orderBy)

      setHasError(false)
      setContacts(contactsList)
    } catch {
      setHasError(true)
    } finally {
      setIsLoading(false)
    }
  }, [orderBy])

  useEffect(() => {
    loadContacts()
  }, [loadContacts])

  function handleToggleOrderBy () {
    setOrderBy((prevState) => prevState === 'asc' ? 'desc' : 'asc')
  }

  function handleChangeSearchTerm (e) {
    setSearchTerm(e.target.value)
  }

  function handleTryAgain () {
    loadContacts()
  }

  return (
    <>
      <Loader isLoading={isLoading} />

      <S.InputSearchContainer>
        <S.InputSearch
          value={searchTerm}
          type="text"
          name="search"
          placeholder='Search contact by name...'
          onChange={handleChangeSearchTerm}
        />
      </S.InputSearchContainer>

      <S.Container hasError={hasError}>
        {!hasError && (
          <S.ContactsNumber>
            {filteredContacts.length}
            {filteredContacts.length === 1 ? ' contact' : ' contacts'}
          </S.ContactsNumber>
        )}

        <Link to="/new">New contact</Link>
      </S.Container>

      <S.ListContainer>
        {hasError && (
          <S.ErrorContainer>
            <S.ErrorIcon src={sad} />

            <S.ErrorDetails>
              <S.ErrorMessage>There was an error getting the contacts.</S.ErrorMessage>

              <Button onClick={handleTryAgain}>Try again</Button>
            </S.ErrorDetails>
          </S.ErrorContainer>
        )}

        {shouldRenderContactsList && (
          <>
            <S.OrderButton type="button" onClick={handleToggleOrderBy}>
              Name
              <S.ArrowIcon src={arrow} alt="Arrow" orderBy={orderBy} />
            </S.OrderButton>

            <ContactsList contacts={filteredContacts} />
          </>
        )}

      </S.ListContainer>
    </>
  )
}

export { Home }
