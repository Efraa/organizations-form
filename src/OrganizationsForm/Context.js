import { createContext } from 'react'
import { formModel } from './formModel'

export const FormContext = createContext({
  formStatus: {},
  formData: { ...formModel },
  setFormData: () => {},
  nextStep: () => {},
  prevStep: () => {},
})
