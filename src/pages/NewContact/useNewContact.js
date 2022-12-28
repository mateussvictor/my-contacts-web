import { useRef } from 'react'

import ContactsService from '../../services/ContactsService'

import toast from '../../utils/toast'

export default function useNewContact () {
  const contactFormRef = useRef(null)

  async function handleSubmit (contact) {
    try {
      await ContactsService.createContact(contact)

      contactFormRef.current.resetFields()

      toast({
        type: 'success',
        text: 'Contact created',
        duration: 3000
      })
    } catch (error) {
      toast({
        type: 'danger',
        text: 'Error on creating contact'
      })
    }
  }

  return {
    handleSubmit,
    contactFormRef
  }
}
