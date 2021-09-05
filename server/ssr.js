import React from 'react'
import { renderToString } from 'react-dom/server'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from '../src/redux/rootReducer'
import App from '../src/components/App'


module.exports = function ssr() {
  const store = createStore(rootReducer)
  let content = renderToString(
    <Provider store={store} >
       <App />
    </Provider>
  );
  const preloadedState = store.getState()
  console.log("preloadedState:",preloadedState, "content:",content)

  return {content, preloadedState};
}