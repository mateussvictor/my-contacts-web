
import arrow from '../../assets/icons/arrow.svg'
import emptyBox from '../../assets/images/empty-box.svg'
import magnifier from '../../assets/images/magnifier-question.svg'

import { ContactsList } from '../../components/ContactsList'
import { Loader } from '../../components/Loader'
import { Modal } from '../../components/Modal'
import Header from './components/Header'

import * as S from './styles'
import useHome from './useHome'
import InputSearch from './components/InputSearch'
import ErrorStatus from './components/ErrorStatus'

export default function Home () {
  const {
    isLoading,
    isLoadingDelete,
    isDeleteModalVisible,
    contactBeingDeleted,
    handleConfirmDeleteContact,
    handleCloseDeleteModal,
    contacts,
    orderBy,
    searchTerm,
    handleChangeSearchTerm,
    hasError,
    filteredContacts,
    handleTryAgain,
    handleToggleOrderBy,
    handleOpenDeleteContactModal
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
              <S.EmptyListContainer>
                <S.EmptyBox
                  src={emptyBox}
                  alt="Empty box"
                />
                <p>
                  You do not have any contacts registered yet.
                  Click on the <strong>&quot;New contact&quot;</strong>
                  button above to register your first one.
                </p>
              </S.EmptyListContainer>
            )}

            {(contacts.length > 0 && filteredContacts.length < 1) && (
              <S.SearchNotFoundContainer>
                <img src={magnifier} alt="Magnifier" />

                <span>Result not found for <strong>&quot;{searchTerm}&quot;</strong></span>
              </S.SearchNotFoundContainer>
            )}

            {filteredContacts.length > 0 && (
              <>
                <S.OrderButton type="button" onClick={handleToggleOrderBy}>
                  Name
                  <S.ArrowIcon src={arrow} alt="Arrow" orderBy={orderBy} />
                </S.OrderButton>

                <ContactsList
                  contacts={filteredContacts}
                  onDelete={handleOpenDeleteContactModal}
                />
              </>
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
          </>
        )}
      </S.ListContainer>
    </>
  )
}
