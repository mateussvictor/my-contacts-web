import { useState, useEffect, forwardRef, useImperativeHandle } from 'react'
import PropTypes from 'prop-types'

import useErrors from '../../hooks/useErrors'

import isValidEmail from '../../utils/isValidEmail'
import formatPhone from '../../utils/formatPhone'
import CategoriesService from '../../services/CategoriesService'

import { FormGroup } from '../FormGroup'
import { Input } from '../Input'
import { Select } from '../Select'
import { Button } from '../Button'

import { useSafeAsyncState } from '../../hooks/useSafeAsyncState'
import * as S from './styles'

const ContactForm = forwardRef(({ buttonLabel, onSubmit }, ref) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [categoryId, setCategoryId] = useState('')
  const [categories, setCategories] = useSafeAsyncState([])
  const [isLoadingCategories, setIsLoadingCategories] = useSafeAsyncState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    setError,
    removeError,
    getErrorMessageByFieldName,
    errors
  } = useErrors()

  const isFormValid = (name && errors.length === 0)

  useImperativeHandle(ref, () => ({
    setFieldsValues: (contact) => {
      setName(contact.name ?? '')
      setEmail(contact.email ?? '')
      setPhone(formatPhone(contact.phone ?? ''))
      setCategoryId(contact.category.id ?? '')
    },
    resetFields: () => {
      setName('')
      setEmail('')
      setPhone('')
      setCategoryId('')
    }
  }), [])

  useEffect(() => {
    async function loadCategories () {
      try {
        const categoriesList = await CategoriesService.listCategories()

        setCategories(categoriesList)
      } catch {} finally {
        setIsLoadingCategories(false)
      }
    }

    loadCategories()
  }, [setCategories, setIsLoadingCategories])

  function handleNameChange (e) {
    setName(e.target.value)

    if (!e.target.value) {
      setError({ field: 'name', message: 'Name is required.' })
    } else {
      removeError('name')
    }
  }

  function handleEmailChange (e) {
    setEmail(e.target.value)

    if (e.target.value && !isValidEmail(e.target.value)) {
      setError({ field: 'email', message: 'Invalid email.' })
    } else {
      removeError('email')
    }
  }

  async function handleSubmit (e) {
    e.preventDefault()

    setIsSubmitting(true)

    await onSubmit({
      name, email, phone, categoryId
    })

    setIsSubmitting(false)
  }

  function handlePhoneChange (e) {
    setPhone(formatPhone(e.target.value))
  }

  return (
    <S.Form onSubmit={handleSubmit} noValidate>
      <FormGroup error={getErrorMessageByFieldName('name')}>
        <Input
          error={getErrorMessageByFieldName('name')}
          placeholder="Name *"
          value={name}
          onChange={handleNameChange}
          disabled={isSubmitting}
        />
      </FormGroup>

      <FormGroup error={getErrorMessageByFieldName('email')}>
        <Input
          type="email"
          error={getErrorMessageByFieldName('email')}
          placeholder="E-mail"
          value={email}
          onChange={handleEmailChange}
          disabled={isSubmitting}
        />
      </FormGroup>

      <FormGroup>
        <Input placeholder="Phone"
          value={phone}
          onChange={handlePhoneChange}
          maxLength="15"
          disabled={isSubmitting}
        />
      </FormGroup>

      <FormGroup isLoading={isLoadingCategories}>
        <Select
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
          disabled={isLoadingCategories || isSubmitting}
        >
          <option value="" disabled>Category</option>

          {categories.map((category) => (
            <option key={category.id} value={category.id}>{category.name}</option>
          ))}
        </Select>
      </FormGroup>

      <S.ButtonContainer>
        <Button
          type="submit"
          disabled={!isFormValid}
          isLoading={isSubmitting}
        >
          {buttonLabel}
        </Button>
      </S.ButtonContainer>
    </S.Form>
  )
})

ContactForm.displayName = 'ContactForm'

export { ContactForm }

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
}
