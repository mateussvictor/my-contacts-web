import { useState, useEffect, useMemo, useCallback } from 'react'
import { Link } from 'react-router-dom'

import arrow from '../../assets/icons/arrow.svg'
import sad from '../../assets/images/sad.svg'
import emptyBox from '../../assets/images/empty-box.svg'
import magnifier from '../../assets/images/magnifier-question.svg'

import { ContactsList } from '../../components/ContactsList'
import { Loader } from '../../components/Loader'
import { Button } from '../../components/Button'
import { Modal } from '../../components/Modal'

import ContactsService from '../../services/ContactsService'

import toast from '../../utils/toast'

import * as S from './styles'

function Home () {
  const [contacts, setContacts] = useState([])
  const [orderBy, setOrderBy] = useState('asc')
  const [searchTerm, setSearchTerm] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false)
  const [contactBeingDeleted, setContactBeingDeleted] = useState(null)
  const [isLoadingDelete, setIsLoadingDelete] = useState(false)

  const filteredContacts = useMemo(() => {
    return contacts.filter(contact => (
      contact.name.toLowerCase().includes(searchTerm.toLowerCase())
    ))
  }, [contacts, searchTerm])

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

  function handleOpenDeleteContactModal (contact) {
    setIsDeleteModalVisible(true)
    setContactBeingDeleted(contact)
  }

  function handleCloseDeleteModal () {
    setIsDeleteModalVisible(false)
    setContactBeingDeleted(null)
  }

  async function handleConfirmDeleteContact () {
    try {
      setIsLoadingDelete(true)

      await ContactsService.deleteContact(contactBeingDeleted.id)

      setContacts(prevState => prevState.filter(contact => (
        contact.id !== contactBeingDeleted.id
      )))

      handleCloseDeleteModal()

      toast({
        type: 'success',
        text: 'Successfully deleted contact'
      })
    } catch {
      toast({
        type: 'danger',
        text: 'Error on deleting contact'
      })
    } finally {
      setIsLoadingDelete(false)
    }
  }

  return (
    <>
      <Loader isLoading={isLoading} />

      <Modal
        danger
        isLoading={isLoadingDelete}
        isVisible={isDeleteModalVisible}
        title={`Are you sure you want to delete this "${contactBeingDeleted?.name}"?`}
        confirmLabel="Delete"
        onConfirm={handleConfirmDeleteContact}
        onCancel={handleCloseDeleteModal}
      >
        <span>This action cannot be undone</span>
      </Modal>

      {contacts.length > 0 && (
        <S.InputSearchContainer>
          <S.InputSearch
            value={searchTerm}
            type="text"
            name="search"
            placeholder='Search contact by name...'
            onChange={handleChangeSearchTerm}
          />
        </S.InputSearchContainer>
      )}

      <S.Container
        hasError={hasError}
        justifyContent={
          hasError
            ? 'flex-end'
            : (
                contacts.length > 0
                  ? 'space-between'
                  : 'center'
              )
          }
      >
        {(!hasError && contacts.length > 0) && (
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

        {!hasError && (
          <>
            {(contacts.length < 1 && !isLoading) && (
              <S.EmptyListContainer>
                <S.EmptyBox
                  src={emptyBox}
                  alt="Empty box"
                />
                <p>
                  You do not have any contacts registered yet.
                  Click on the <strong>&quot;New contact&quot;</strong>
                  button above to register your first one.
                </p>
              </S.EmptyListContainer>
            )}

            {(contacts.length > 0 && filteredContacts.length < 1) && (
              <S.SearchNotFoundContainer>
                <img src={magnifier} alt="Magnifier" />

                <span>Result not found for <strong>&quot;{searchTerm}&quot;</strong></span>
              </S.SearchNotFoundContainer>
            )}

            {filteredContacts.length > 0 && (
              <>
                <S.OrderButton type="button" onClick={handleToggleOrderBy}>
                  Name
                  <S.ArrowIcon src={arrow} alt="Arrow" orderBy={orderBy} />
                </S.OrderButton>

                <ContactsList
                  contacts={filteredContacts}
                  onDelete={handleOpenDeleteContactModal}
                />
              </>
            )}
          </>
        )}
      </S.ListContainer>
    </>
  )
}

export { Home }
