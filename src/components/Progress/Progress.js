import React, { memo } from 'react'
import { getPercentage } from '../../helpers/getPercentage'
import { getStroke } from '../../helpers/getStroke'
import {
  ProgressContainer,
  ProgressBar,
  ProgressCircle,
  CircleMeter,
  CircleValue,
  CircleWrapper,
} from './Style'

export const Progress = memo(({ currentStep, steps }) => (
  <>
    <CircleWrapper>
      <ProgressCircle viewBox="0 0 120 120">
        <CircleMeter cx="60" cy="60" r="50" strokeWidth="10" />
        <CircleValue
          progress={getStroke(getPercentage(currentStep, steps), 50)}
          cx="60"
          cy="60"
          r="50"
          strokeWidth="10"
        />
      </ProgressCircle>
    </CircleWrapper>
    <ProgressContainer>
      <ProgressBar progress={getPercentage(currentStep, steps)} />
    </ProgressContainer>
  </>
))
