import { useState, useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom'

import arrow from '../../assets/icons/arrow.svg'

import { CardsList } from '../../components/CardsList'
import { Loader } from '../../components/Loader'

import delay from '../../utils/delay'

import * as S from './styles'

function Home () {
  const [contacts, setContacts] = useState([])
  const [orderBy, setOrderBy] = useState('asc')
  const [searchTerm, setSearchTerm] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  const filteredContacts = useMemo(() => {
    return contacts.filter(contact => (
      contact.name.toLowerCase().includes(searchTerm.toLowerCase())
    ))
  }, [contacts, searchTerm])

  useEffect(() => {
    setIsLoading(true)

    async function getContacts () {
      try {
        await delay(500)

        const url = `http://localhost:3001/contacts?orderBy=${orderBy}`
        const response = await fetch(url)
        const json = await response.json()

        setContacts(json)
      } catch (error) {
        throw new Error()
      } finally {
        setIsLoading(false)
      }
    }

    getContacts()
  }, [orderBy])

  function handleToggleOrderBy () {
    setOrderBy((prevState) => prevState === 'asc' ? 'desc' : 'asc')
  }

  function handleChangeSearchTerm (e) {
    setSearchTerm(e.target.value)
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

      <S.Container>
        <S.ContactsNumber>
          {filteredContacts.length}
          {filteredContacts.length === 1 ? ' contact' : ' contacts'}
        </S.ContactsNumber>

        <Link to="/new">New contact</Link>
      </S.Container>

      <S.ListContainer>
        {filteredContacts.length > 0 && (
          <S.OrderButton type="button" onClick={handleToggleOrderBy}>
            Name
            <S.ArrowIcon src={arrow} alt="Arrow" orderBy={orderBy} />
          </S.OrderButton>
        )}

        <CardsList contacts={filteredContacts} />
      </S.ListContainer>
    </>
  )
}

export { Home }
