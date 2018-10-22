import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import 'semantic-ui-css/semantic.min.css'
import './styles/global-styles'
import configureStore from './store'
import Routes from './routes'
import registerServiceWorker from './utils/registerServiceWorker'

render(
  <Provider store={configureStore()}>
    <Routes />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
