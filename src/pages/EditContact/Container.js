import { useState, useEffect, useRef } from 'react'
import { useParams, useHistory } from 'react-router-dom'

import toast from '../../utils/toast'
import { useSafeAsyncAction } from '../../hooks/useSafeAsyncAction'

import ContactsService from '../../services/ContactsService'
import { Presentation } from '.'

export default function Container () {
  const [isLoading, setIsLoading] = useState(true)
  const [contactName, setContactName] = useState('')

  const contactFormRef = useRef(null)

  const { id } = useParams()
  const history = useHistory()
  const safeAsyncAction = useSafeAsyncAction()

  useEffect(() => {
    async function loadContact () {
      try {
        const contact = await ContactsService.getContactById(id)

        safeAsyncAction(() => {
          contactFormRef.current.setFieldsValues(contact)
          setIsLoading(false)
          setContactName(contact.name)
        })
      } catch {
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

  return (
    <Presentation
      isLoading={isLoading}
      contactName={contactName}
      contactFormRef={contactFormRef}
      onSubmit={handleSubmit}
    />
  )
}
