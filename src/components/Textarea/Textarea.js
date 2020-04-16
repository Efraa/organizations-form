import React from 'react'
import { Field } from '../Field'
import { FieldTextarea } from './Style'

export const Textarea = ({
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
    <FieldTextarea
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
