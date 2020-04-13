import { useContext } from 'react'
import { FormContext } from '../screens/Form/Context'

export const useForm = stepName => {
  const { formData, setStepData } = useContext(FormContext)
  const data = formData[stepName]
  const onChange = e =>
    setStepData({ [stepName]: { ...data, [e.target.name]: e.target.value } })

  const setData = obj => setStepData({ [stepName]: { ...data, ...obj } })

  return {
    onChange,
    data,
    setData,
  }
}
