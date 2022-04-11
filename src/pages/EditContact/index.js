import { PageHeader } from '../../components/PageHeader'
import { ContactForm } from '../../components/ContactForm'

function EditContact () {
  return (
    <>
      <PageHeader title="Edit Mateus Victor" />

      <ContactForm
        buttonLabel="Update Contact"
      />
    </>
  )
}

export { EditContact }
