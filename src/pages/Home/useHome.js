import {
  useState,
  useEffect,
  useMemo,
  useCallback,
  useDeferredValue
} from 'react'

import ContactsService from '../../services/ContactsService'
import toast from '../../utils/toast'

export default function useHome () {
  const [contacts, setContacts] = useState([])
  const [orderBy, setOrderBy] = useState('asc')
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false)
  const [contactBeingDeleted, setContactBeingDeleted] = useState(null)
  const [isLoadingDelete, setIsLoadingDelete] = useState(false)

  const [searchTerm, setSearchTerm] = useState('')
  const deferredSearchTerm = useDeferredValue(searchTerm)

  const filteredContacts = useMemo(() => {
    return contacts.filter(contact => (
      contact.name.toLowerCase().includes(deferredSearchTerm.toLowerCase())
    ))
  }, [contacts, deferredSearchTerm])

  const loadContacts = useCallback(async (signal) => {
    try {
      setIsLoading(true)

      const contactsList = await ContactsService.listContacts(orderBy, signal)

      setHasError(false)
      setContacts(contactsList)
    } catch(error) {
      if(error instanceof DOMException && error.name === 'AbortError') {
        return
      }

      setHasError(true)
      setContacts([])
    } finally {
      setIsLoading(false)
    }
  }, [orderBy])

  useEffect(() => {
    const controller = new AbortController()

    loadContacts(controller.signal)

    return () => {
      controller.abort()
    }
  }, [loadContacts])

  const handleToggleOrderBy = useCallback(() => {
    setOrderBy((prevState) => prevState === 'asc' ? 'desc' : 'asc')
  }, [])

  function handleChangeSearchTerm (e) {
    setSearchTerm(e.target.value)
  }

  function handleTryAgain () {
    loadContacts()
  }

  const handleDeleteContact = useCallback((contact) => {
    setIsDeleteModalVisible(true)
    setContactBeingDeleted(contact)
  }, [])

  function handleCloseDeleteModal () {
    setIsDeleteModalVisible(false)
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
        text: 'Contact successfully deleted'
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

  return {
    isLoading,
    isLoadingDelete,
    isDeleteModalVisible,
    contactBeingDeleted,
    handleConfirmDeleteContact,
    handleCloseDeleteModal,
    contacts,
    orderBy,
    searchTerm,
    handleChangeSearchTerm,
    hasError,
    filteredContacts,
    handleTryAgain,
    handleToggleOrderBy,
    handleDeleteContact
  }
}
