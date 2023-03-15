import Loader from '../../components/Loader'
import Modal from '../../components/Modal'
import Header from './components/Header'
import useHome from './useHome'
import InputSearch from './components/InputSearch'
import ErrorStatus from './components/ErrorStatus'
import EmptyList from './components/EmptyList'
import SearchNotFound from './components/SearchNotFound'
import Contacts from './components/Contacts'

import * as S from './styles'

export default function Home() {
  const {
    isLoading,
    isLoadingDelete,
    isDeleteModalVisible,
    contactBeingDeleted,
    handleConfirmDeleteContact,
    handleCloseDeleteModal,
    handleDeleteContact,
    contacts,
    orderBy,
    searchTerm,
    handleChangeSearchTerm,
    hasError,
    filteredContacts,
    handleTryAgain,
    handleToggleOrderBy
  } = useHome()

  const hasContacts = contacts.length > 0
  const isListEmpty = !hasError && !isLoading && !hasContacts
  const isSearchEmpty = !hasError && hasContacts && filteredContacts.length < 1

  return (
    <>
      <Loader isLoading={isLoading} />

      {hasContacts && (
        <InputSearch value={searchTerm} onChange={handleChangeSearchTerm} />
      )}

      <Header
        hasError={hasError}
        contactsAmount={contacts.length}
        filteredContactsAmount={filteredContacts.length}
      />

      <S.ListContainer>
        {hasError && <ErrorStatus onTryAgain={handleTryAgain} />}
        {isListEmpty && <EmptyList />}
        {isSearchEmpty && <SearchNotFound searchTerm={searchTerm} />}

        {hasContacts && (
          <>
            <Contacts
              filteredContacts={filteredContacts}
              onToggleOrderBy={handleToggleOrderBy}
              onDeleteContact={handleDeleteContact}
              orderBy={orderBy}
            />

            <Modal
              danger
              isLoading={isLoadingDelete}
              isVisible={isDeleteModalVisible}
              title={`Are you sure you want to delete this "${contactBeingDeleted?.name}"?`}
              confirmLabel="Delete"
              onConfirm={handleConfirmDeleteContact}
              onCancel={handleCloseDeleteModal}
            >
              <span>This action cannot be undone!</span>
            </Modal>
          </>
        )}
      </S.ListContainer>
    </>
  )
}
