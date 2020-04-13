import React from 'react'
import { render } from 'react-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-responsive-modal/styles.css'
import 'react-datepicker/dist/react-datepicker.css'
import { App } from './App'
import * as serviceWorker from './serviceWorker'

render(<App />, document.getElementById('app'))
serviceWorker.unregister()
