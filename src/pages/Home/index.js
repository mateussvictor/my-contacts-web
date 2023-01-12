
import { Loader } from '../../components/Loader'
import { Modal } from '../../components/Modal'
import Header from './components/Header'

import useHome from './useHome'
import InputSearch from './components/InputSearch'
import ErrorStatus from './components/ErrorStatus'
import EmptyList from './components/EmptyList'
import SearchNotFound from './components/SearchNotFound'
import Contacts from './components/Contacts'

import * as S from './styles'

export default function Home () {
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

  return (
    <>
      <Loader isLoading={isLoading} />

      {contacts.length > 0 && (
        <InputSearch
          value={searchTerm}
          onChange={handleChangeSearchTerm}
        />
      )}

      <Header
        hasError={hasError}
        contactsAmount={contacts.length}
        filteredContactsAmount={filteredContacts.length}
      />

      <S.ListContainer>
        {hasError && <ErrorStatus onTryAgain={handleTryAgain} />}

        {!hasError && (
          <>
            {(contacts.length < 1 && !isLoading) && (
              <EmptyList />
            )}

            {(contacts.length > 0 && filteredContacts.length < 1) && (
              <SearchNotFound searchTerm={searchTerm}/>
            )}

            <Modal
              danger
              isLoading={isLoadingDelete}
              isVisible={isDeleteModalVisible}
              title={`Are you sure you want to delete this "${contactBeingDeleted?.name}"?`}
              confirmLabel="Delete"
              onConfirm={handleConfirmDeleteContact}
              onCancel={handleCloseDeleteModal}
            >
              <span>This action cannot be undone</span>
            </Modal>

            <Contacts
              filteredContacts={filteredContacts}
              onToggleOrderBy={handleToggleOrderBy}
              onDeleteContact={handleDeleteContact}
              orderBy={orderBy}
            />
          </>
        )}
      </S.ListContainer>
    </>
  )
}
