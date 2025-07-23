// Form data interface
export interface CardFormData {
  cardholderName: string
  cardNumber: string
  expMonth: string
  expYear: string
  cvc: string
}

// Error state interface
export interface FormErrors {
  cardholderName: string
  cardNumber: string
  expMonth: string
  expYear: string
  cvc: string
}

// Form validation result
export interface ValidationResult {
  isValid: boolean
  errors: FormErrors
}

// Default form data
export const defaultFormData: CardFormData = {
  cardholderName: '',
  cardNumber: '',
  expMonth: '',
  expYear: '',
  cvc: ''
}

// Default error state
export const defaultErrors: FormErrors = {
  cardholderName: '',
  cardNumber: '',
  expMonth: '',
  expYear: '',
  cvc: ''
}