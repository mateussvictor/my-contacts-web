
import { PageHeader } from '../../components/PageHeader'
import { ContactForm } from '../../components/ContactForm'
import ContactsService from '../../services/ContactsService'

function NewContact () {
  async function handleSubmit (formData) {
    try {
      const contact = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        category_id: formData.categoryId
      }

      const response = await ContactsService.createContact(contact)
      console.log(response)
    } catch (error) {
      alert('An error occurred while creating')
    }
  }

  return (
    <>
      <PageHeader title="New Contact" />

      <ContactForm
        onSubmit={handleSubmit}
        buttonLabel="Save Contact"
      />
    </>
  )
}

export { NewContact }
