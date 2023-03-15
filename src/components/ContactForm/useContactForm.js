import { useState, useEffect, useImperativeHandle } from 'react'

import isValidEmail from '../../utils/isValidEmail'
import formatPhone from '../../utils/formatPhone'
import CategoriesService from '../../services/CategoriesService'

import useErrors from '../../hooks/useErrors'
import useSafeAsyncState from '../../hooks/useSafeAsyncState'

export default function useContactForm(onSubmit, ref) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [categoryId, setCategoryId] = useState('')
  const [categories, setCategories] = useSafeAsyncState([])
  const [isLoadingCategories, setIsLoadingCategories] = useSafeAsyncState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const { setError, removeError, getErrorMessageByFieldName, errors } =
    useErrors()

  const isFormValid = name && errors.length === 0

  useImperativeHandle(
    ref,
    () => ({
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
    }),
    []
  )

  useEffect(() => {
    const controller = new AbortController()

    async function loadCategories() {
      try {
        const categoriesList = await CategoriesService.listCategories(
          controller.signal
        )

        setCategories(categoriesList)
      } finally {
        setIsLoadingCategories(false)
      }
    }

    loadCategories()

    return () => {
      controller.abort()
    }
  }, [setCategories, setIsLoadingCategories])

  function handleNameChange(e) {
    setName(e.target.value)

    if (!e.target.value) {
      setError({ field: 'name', message: 'Name is required.' })
    } else {
      removeError('name')
    }
  }

  function handleEmailChange(e) {
    setEmail(e.target.value)

    if (e.target.value && !isValidEmail(e.target.value)) {
      setError({ field: 'email', message: 'Invalid email.' })
    } else {
      removeError('email')
    }
  }

  function handlePhoneChange(e) {
    setPhone(formatPhone(e.target.value))
  }

  async function handleSubmit(e) {
    e.preventDefault()

    setIsSubmitting(true)

    await onSubmit({
      name,
      email,
      phone,
      categoryId
    })

    setIsSubmitting(false)
  }

  return {
    handleSubmit,
    getErrorMessageByFieldName,
    handleNameChange,
    name,
    isSubmitting,
    handleEmailChange,
    email,
    handlePhoneChange,
    phone,
    isLoadingCategories,
    categoryId,
    setCategoryId,
    categories,
    isFormValid
  }
}
