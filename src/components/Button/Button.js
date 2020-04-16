import React, { memo } from 'react'
import { ButtonElement } from './Style'

export const Button = memo(props => (
  <ButtonElement {...props} type={props.type || 'button'}></ButtonElement>
))
