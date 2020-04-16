import React from 'react'
import {
  RadioLabel,
  RadioInput,
  RadioIconWrapper,
  RadioIconCheck,
  RadioIconCheckActive,
  RadioLabelText,
  RadioIconCheckBg,
} from './Style'

export const Radio = ({ label, name, id, value, checked, ...props }) => (
  <RadioLabel {...props}>
    <RadioInput
      type="radio"
      id={id}
      name={name}
      value={value}
      defaultChecked={checked}
    />
    <RadioIconWrapper className="form-radio__icon-wrapper">
      <RadioIconCheck className="form-radio__check" />
      <RadioIconCheckActive className="form-radio__check-active">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="12"
            cy="12"
            r="11"
            fill="#1DA1F2"
            stroke="#1DA1F2"
            strokeWidth="2"
          />
          <path
            d="M7 13L11 16L17 8"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </RadioIconCheckActive>
    </RadioIconWrapper>
    <RadioLabelText htmlFor={id}>{label}</RadioLabelText>
    <RadioIconCheckBg className="form-radio__check-bg" />
  </RadioLabel>
)
