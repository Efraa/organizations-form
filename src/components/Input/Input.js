import React from 'react'
import { Field } from '../Field'
import { FieldInput } from './Style'

export const Input = ({
  children,
  isRequired,
  label,
  name,
  type,
  onChange,
  onClick,
  widthAuto,
  value,
  ...props
}) => (
  <Field name={name} widthAuto={widthAuto} label={label}>
    <FieldInput
      name={name}
      type={type ? type : 'text'}
      onChange={onChange}
      onClick={onClick}
      value={value}
      {...props}
    />
    {children}
  </Field>
)
