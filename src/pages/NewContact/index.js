
import { PageHeader } from '../../components/PageHeader'
import { ContactForm } from '../../components/ContactForm'

function NewContact () {
  return (
    <>
      <PageHeader title="New Contact" />

      <ContactForm buttonLabel="Save Contact" />
    </>
  )
}

export { NewContact }
