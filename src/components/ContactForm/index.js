import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import useErrors from '../../hooks/useErrors'

import isValidEmail from '../../utils/isValidEmail'
import formatPhone from '../../utils/formatPhone'
import CategoriesService from '../../services/CategoriesService'

import { FormGroup } from '../FormGroup'
import { Input } from '../Input'
import { Select } from '../Select'
import { Button } from '../Button'

import * as S from './styles'

function ContactForm ({ buttonLabel, onSubmit }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [categoryId, setCategoryId] = useState('')
  const [categories, setCategories] = useState([])
  const [isLoadingCategories, setIsLoadingCategories] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    setError,
    removeError,
    getErrorMessageByFieldName,
    errors
  } = useErrors()

  const isFormValid = (name && errors.length === 0)

  useEffect(() => {
    async function loadCategories () {
      try {
        const categoriesList = await CategoriesService.listCategories()

        setCategories(categoriesList)
        setIsLoadingCategories(false)
      } catch {}
    }

    loadCategories()
  }, [])

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
  console.log(isSubmitting)

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
}

export { ContactForm }

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
}
