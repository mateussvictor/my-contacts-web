import { useEffect, useState, useRef } from 'react'
import { useParams, useHistory } from 'react-router-dom'

import { PageHeader } from '../../components/PageHeader'
import { ContactForm } from '../../components/ContactForm'
import { Loader } from '../../components/Loader'

import ContactsService from '../../services/ContactsService'
import toast from '../../utils/toast'
import { useSafeAsyncAction } from '../../hooks/useSafeAsyncAction'

function EditContact () {
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

  async function handleSubmit (formData) {
    try {
      const contact = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        category_id: formData.categoryId
      }

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
    <>
      <Loader isLoading={isLoading} />

      <PageHeader title={isLoading ? 'Loading...' : `Edit ${contactName}`} />

      <ContactForm
        ref={contactFormRef}
        buttonLabel="Update Contact"
        onSubmit={handleSubmit}
      />
    </>
  )
}

export { EditContact }
