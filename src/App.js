import React, { useState } from 'react'
import { GlobalStyle, Theme } from './styles'
import { ScreensContext } from './screens/Context'

import { Form } from './screens/Form'
import { Home } from './screens/Home'

export const App = () => {
  const [screen, setScreen] = useState('')
  const getCurrentScreen = () => {
    switch (screen) {
      case 'home':
        return <Home />
      case 'form':
        return <Form />
      case 'thanks':
        return <Form />
      default:
        return <Home />
    }
  }

  return (
    <Theme>
      <GlobalStyle />
      <ScreensContext.Provider value={{ screen, setScreen }}>
        {getCurrentScreen()}
      </ScreensContext.Provider>
    </Theme>
  )
}
