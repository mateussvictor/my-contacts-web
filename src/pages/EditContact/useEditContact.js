import { useState, useEffect, useRef } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'

import toast from '../../utils/toast'
import useSafeAsyncAction from '../../hooks/useSafeAsyncAction'

import ContactsService from '../../services/ContactsService'

export default function useEditContact () {
  const [isLoading, setIsLoading] = useState(true)
  const [contactName, setContactName] = useState('')

  const contactFormRef = useRef(null)

  const { id } = useParams()
  const history = useHistory()
  const safeAsyncAction = useSafeAsyncAction()

  useEffect(() => {
    const controller = new AbortController()

    async function loadContact () {
      try {
        const contact = await ContactsService.getContactById(id, controller.signal)

        safeAsyncAction(() => {
          contactFormRef.current.setFieldsValues(contact)
          setIsLoading(false)
          setContactName(contact.name)
        })
      } catch(error) {
        if(error instanceof DOMException && error.name === 'AbortError') {
          return
        }

        safeAsyncAction(() => {
          history.push('/')
          toast({
            type: 'danger',
            text: 'Contact not found'
          })
        })
      }
    }

    loadContact()

    return () => {
      controller.abort()
    }
  }, [id, history, safeAsyncAction])

  async function handleSubmit (contact) {
    try {
      const updatedContact = await ContactsService.updateContact(id, contact)

      setContactName(updatedContact.name)

      toast({
        type: 'success',
        text: 'Contact updated',
        duration: 3000
      })
    } catch (error) {
      toast({
        type: 'danger',
        text: 'Error on editing contact'
      })
    }
  }

  return {
    isLoading,
    contactName,
    contactFormRef,
    handleSubmit
  }
}

useEditContact.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  contactName: PropTypes.string.isRequired,
  contactFormRef: PropTypes.shape().isRequired,
  onSubmit: PropTypes.func.isRequired
}
