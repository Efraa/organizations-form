import React from 'react'
import { GlobalStyle, Theme } from './styles'
import { OrganizationsForm } from './OrganizationsForm'

export const App = () => (
  <Theme>
    <GlobalStyle />
    <OrganizationsForm />
  </Theme>
)
