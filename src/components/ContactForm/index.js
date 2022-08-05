import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import useErrors from '../../hooks/useErrors'

import isValidEmail from '../../utils/isValidEmail'
import formatPhone from '../../utils/formatPhone'
import CategoriesService from '../../services/CategoryService'

import { FormGroup } from '../FormGroup'
import { Input } from '../Input'
import { Select } from '../Select'
import { Button } from '../Button'

import * as S from './styles'

function ContactForm ({ buttonLabel }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [categoryId, setCategoryId] = useState('')
  const [categories, setCategories] = useState([])
  const [isLoadingCategories, setIsLoadingCategories] = useState(true)

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

  function handleSubmit (e) {
    e.preventDefault()

    console.log({
      name,
      email,
      phone,
      categoryId
    })
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
        />
      </FormGroup>

      <FormGroup error={getErrorMessageByFieldName('email')}>
        <Input
          type="email"
          error={getErrorMessageByFieldName('email')}
          placeholder="E-mail"
          value={email}
          onChange={handleEmailChange}
        />
      </FormGroup>

      <FormGroup>
        <Input placeholder="Phone"
          value={phone}
          onChange={handlePhoneChange}
          maxLength="15"
        />
      </FormGroup>

      <FormGroup isLoading={isLoadingCategories}>
        <Select
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
          disabled={isLoadingCategories}
        >
          <option value="" disabled>Category</option>

          {categories.map((category) => (
            <option key={category.id} value={category.id}>{category.name}</option>
          ))}
        </Select>
      </FormGroup>

      <S.ButtonContainer>
        <Button type="submit" disabled={!isFormValid}>
          {buttonLabel}
        </Button>
      </S.ButtonContainer>

    </S.Form>
  )
}

export { ContactForm }

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired
}
