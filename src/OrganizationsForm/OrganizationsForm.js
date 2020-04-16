import React, { useState, useCallback, useEffect } from 'react'
import { APP_TITLE } from '../helpers/constants'
import { FormContext } from './Context'

import { formModel } from './formModel'

// Components
import { Container, Col } from 'reactstrap'
import { Footer } from '../components/Footer'
import { Spinner } from '../components/Spinner'
import { Steps } from './Steps'
import { Form, Title, StepName, Wrapper, FormContainer } from './Style'

export const OrganizationsForm = () => {
  const [isLoading, setLoading] = useState(false)
  const [formStatus, setFormStatus] = useState({
    steps: 6,
    currentStep: 1,
    isComplete: false,
    stepName: '',
  })
  const { currentStep, steps, stepName } = formStatus
  const setStep = currentStep => setFormStatus({ ...formStatus, currentStep })
  const [formData, setFormData] = useState(formModel)

  const setStepData = useCallback(
    data => setFormData(formData => ({ ...formData, ...data })),
    [setFormData]
  )

  const setStepName = useCallback(
    stepName => setFormStatus(formStatus => ({ ...formStatus, stepName })),
    [setFormStatus]
  )

  useEffect(() => {
    setFormStatus(state =>
      state.currentStep === state.steps
        ? {
            ...state,
            isComplete: true,
          }
        : { ...state, isComplete: false }
    )
  }, [currentStep])

  const nextStep = () =>
    currentStep >= steps ? setStep(steps) : setStep(currentStep + 1)

  const prevStep = () => (currentStep <= 1 ? 1 : setStep(currentStep - 1))

  const onSubmit = async e => {
    e.preventDefault()
    setLoading(true)
  }

  return (
    <FormContext.Provider
      value={{
        formStatus,
        formData,
        setStepData,
        setStepName,
        nextStep,
        prevStep,
      }}
    >
      <Container>
        <Wrapper>
          <Col xs={12} lg={10} xl={8}>
            <Title>{APP_TITLE}</Title>
            <StepName>{stepName}</StepName>
          </Col>
        </Wrapper>
      </Container>
      <Form onSubmit={e => onSubmit(e)}>
        {isLoading && <Spinner />}
        <FormContainer>
          <Wrapper>
            <Steps currentStep={currentStep} />
          </Wrapper>
        </FormContainer>
        <Footer />
      </Form>
    </FormContext.Provider>
  )
}
