import PageHeader from '../../components/PageHeader'
import ContactForm from '../../components/ContactForm'

import useNewContact from './useNewContact'

export default function NewContact() {
  const { handleSubmit, contactFormRef } = useNewContact()

  return (
    <>
      <PageHeader title="New Contact" />

      <ContactForm
        onSubmit={handleSubmit}
        buttonLabel="Save Contact"
        ref={contactFormRef}
      />
    </>
  )
}
