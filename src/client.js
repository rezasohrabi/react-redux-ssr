import React from 'react'
import {hydrate} from 'react-dom'
import {Provider} from 'react-redux'
import configureStore from './redux/configureStore'
import App from './components/App'

const preloadedState = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;
const store = configureStore( preloadedState)

hydrate(
  <Provider store={store} >
     <App />
  </Provider>,
  document.getElementById('root')
)
