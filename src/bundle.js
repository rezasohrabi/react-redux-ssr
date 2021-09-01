import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import configureStore from './redux/configureStore'
import App from './components/App'
import { applyMiddleware, createStore } from 'redux'
import rootReducer from './redux/todos/todos.reducer'
const preloadedState = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;
const store = createStore(rootReducer, preloadedState, applyMiddleware(logger))
render(
  <Provider store={store} >
     <App />
  </Provider>,
  document.getElementById('root')
)
