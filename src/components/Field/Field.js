import React from 'react'
import { FieldLabel, FieldLabelText } from './Style'

export const Field = ({ children, label, widthAuto, name }) => (
  <FieldLabel htmlFor={name} widthAuto={widthAuto}>
    <FieldLabelText>{label}</FieldLabelText>
    {children}
  </FieldLabel>
)
