import { ref, computed } from 'vue'
import type { CardFormData, FormErrors, ValidationResult } from '../types'
import { defaultFormData, defaultErrors } from '../types'

export function useCardForm() {
  // Reactive state
  const formData = ref<CardFormData>({ ...defaultFormData })
  const errors = ref<FormErrors>({ ...defaultErrors })
  const isCompleted = ref(false)

  // Properties for card display
  const displayCardNumber = computed(() => {
    const number = formData.value.cardNumber || '0000 0000 0000 0000'
    // Format with spaces every 4 digits, so that it's always 19 characters
    return number.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim().padEnd(19, '0').substring(0, 19)
  })

  const displayCardholderName = computed(() => {
    return formData.value.cardholderName.toUpperCase() || 'Display Name'
  })

  const displayExpiry = computed(() => {
    const month = formData.value.expMonth.padStart(2, '0') || '00'
    const year = formData.value.expYear.padStart(2, '0') || '00'
    return `${month}/${year}`
  })

  const displayCVC = computed(() => {
    return formData.value.cvc.padStart(3, '0') || '000'
  })

  // Input formatters
  const formatCardNumber = (value: string): string => {
    // Remove all chars that are not nums and limit to 16 digits
    const cleaned = value.replace(/\D/g, '').substring(0, 16)
    // Add spaces after every 4 digits
    return cleaned.replace(/(\d{4})/g, '$1 ').trim()
  }

  const formatExpiry = (value: string, maxLength: number = 2): string => {
    return value.replace(/\D/g, '').substring(0, maxLength)
  }

  const formatCVC = (value: string): string => {
    return value.replace(/\D/g, '').substring(0, 3)
  }

  // Validation functions
  const validateForm = (): ValidationResult => {
    const newErrors: FormErrors = { ...defaultErrors }
    let isValid = true

    // Validate cardholder name
    if (!formData.value.cardholderName.trim()) {
      newErrors.cardholderName = "Can't be blank"
      isValid = false
    }

    // Validate card number
    const cleanCardNumber = formData.value.cardNumber.replace(/\s/g, '')
    if (!cleanCardNumber) {
      newErrors.cardNumber = "Can't be blank"
      isValid = false
    } else if (cleanCardNumber.length !== 16 || !/^\d+$/.test(cleanCardNumber)) {
      newErrors.cardNumber = "Wrong format, numbers only"
      isValid = false
    }

    // Validate expiry month
    if (!formData.value.expMonth) {
      newErrors.expMonth = "Can't be blank"
      isValid = false
    } else {
      const month = parseInt(formData.value.expMonth)
      if (month < 1 || month > 12) {
        newErrors.expMonth = "Must be 01-12"
        isValid = false
      }
    }

    // Validate expiry year
    if (!formData.value.expYear) {
      newErrors.expYear = "Can't be blank"
      isValid = false
    }

    // Validate CVC
    if (!formData.value.cvc) {
      newErrors.cvc = "Can't be blank"
      isValid = false
    } else if (formData.value.cvc.length !== 3 || !/^\d+$/.test(formData.value.cvc)) {
      newErrors.cvc = "Must be 3 digits"
      isValid = false
    }

    errors.value = newErrors
    return { isValid, errors: newErrors }
  }

  // Form actions
  const submitForm = (): boolean => {
    const validation = validateForm()
    if (validation.isValid) {
      isCompleted.value = true
      return true
    }
    return false
  }

  const resetForm = (): void => {
    formData.value = { ...defaultFormData }
    errors.value = { ...defaultErrors }
    isCompleted.value = false
  }

  // Input handlers
  const handleCardNumberInput = (value: string): void => {
    formData.value.cardNumber = formatCardNumber(value)
  }

  const handleExpiryInput = (field: 'expMonth' | 'expYear', value: string): void => {
    formData.value[field] = formatExpiry(value)
  }

  const handleCVCInput = (value: string): void => {
    formData.value.cvc = formatCVC(value)
  }

  return {
    // State
    formData,
    errors,
    isCompleted,
    
    // Computed
    displayCardNumber,
    displayCardholderName,
    displayExpiry,
    displayCVC,
    
    // Actions
    submitForm,
    resetForm,
    
    // Input handlers
    handleCardNumberInput,
    handleExpiryInput,
    handleCVCInput
  }
}