import React from 'react'
import { STEPS_KEY } from './formModel'

import { FormWrapper } from './Style'

// Steps
import { GetStarted } from './steps/GetStarted'
import { Spinner } from '../components/Spinner'

export const Steps = ({ currentStep }) => {
  const getStep = () => {
    switch (currentStep) {
      case 1:
        return <GetStarted form={STEPS_KEY.GET_STARTED} />
      case 2:
        return <GetStarted form={STEPS_KEY.GET_STARTED} />
      case 3:
        return <GetStarted form={STEPS_KEY.GET_STARTED} />
      case 4:
        return <GetStarted form={STEPS_KEY.GET_STARTED} />
      case 5:
        return <GetStarted form={STEPS_KEY.GET_STARTED} />
      case 6:
        return <GetStarted form={STEPS_KEY.GET_STARTED} />
      default:
        return <Spinner />
    }
  }

  return (
    <FormWrapper xs={12} lg={10} xl={8}>
      {getStep()}
    </FormWrapper>
  )
}
