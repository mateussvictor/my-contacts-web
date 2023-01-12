
import PageHeader from '../../components/PageHeader'
import ContactForm from '../../components/ContactForm'
import Loader from '../../components/Loader'

import useEditContact from './useEditContact'

export default function EditContact () {
  const {
    isLoading,
    contactFormRef,
    contactName,
    handleSubmit
  } = useEditContact()

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
