import React, { memo, useContext } from 'react'
import { FormContext } from '../../OrganizationsForm/Context'

// Components
import { Container, ButtonGroup } from './Style'
import { Progress } from '../Progress'
import { Button } from '../Button'

export const Footer = memo(() => {
  const {
    formStatus: { currentStep, steps, isComplete },
    nextStep,
    prevStep,
  } = useContext(FormContext)

  const prevButton = () => (
    <Button secondary onClick={e => prevStep()} disabled={currentStep <= 1}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="17.502"
        height="17.059"
        viewBox="0 0 17.502 17.059"
      >
        <path
          id="Icon_awesome-arrow-left"
          dataname="Icon awesome-arrow-left"
          d="M10.057,18.563l-.867.867a.934.934,0,0,1-1.324,0L.272,11.841a.934.934,0,0,1,0-1.324L7.866,2.923a.934.934,0,0,1,1.324,0l.867.867a.939.939,0,0,1-.016,1.34L5.334,9.614H16.561a.935.935,0,0,1,.938.937V11.8a.935.935,0,0,1-.938.938H5.334l4.707,4.484A.932.932,0,0,1,10.057,18.563Z"
          transform="translate(0.004 -2.647)"
          fill="#192734"
        />
      </svg>
    </Button>
  )

  const nextButton = () => (
    <Button onClick={e => nextStep()} type={isComplete && 'submit'}>
      {isComplete ? (
        'Send'
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17.502"
          height="17.059"
          viewBox="0 0 17.502 17.059"
        >
          <path
            id="icon-arrow"
            dataname="icon-arrow"
            d="M7.441,2.613l.867-.867a.934.934,0,0,1,1.324,0l7.594,7.59a.934.934,0,0,1,0,1.324L9.633,18.254a.934.934,0,0,1-1.324,0l-.867-.867a.939.939,0,0,1,.016-1.34l4.707-4.484H.938A.935.935,0,0,1,0,10.625V9.375a.935.935,0,0,1,.938-.937H12.164L7.457,3.953A.932.932,0,0,1,7.441,2.613Z"
            transform="translate(0 -1.471)"
            fill="#ffffff"
          />
        </svg>
      )}
    </Button>
  )

  return (
    <Container>
      <ButtonGroup>
        {prevButton()}
        {nextButton()}
      </ButtonGroup>
      <Progress currentStep={currentStep} steps={steps} />
    </Container>
  )
})
