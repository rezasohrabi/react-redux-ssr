import React from 'react'
import {hydrate} from 'react-dom'
import {Provider} from 'react-redux'
import configureStore from './redux/configureStore'
import App from './components/App'
import { applyMiddleware, createStore } from 'redux'
import rootReducer from './redux/todos/todos.reducer'
import logger from 'redux-logger'

const preloadedState = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;
const store = createStore(rootReducer, preloadedState, applyMiddleware(logger))

hydrate(
  <Provider store={store} >
     <App />
  </Provider>,
  document.getElementById('root')
)
