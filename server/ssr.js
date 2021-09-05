import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { StaticRouter } from 'react-router-dom'
import rootReducer from '../src/redux/rootReducer'
import App from '../src/components/App'


module.exports = function ssr(req) {
  const store = createStore(rootReducer);
  const context = {};
  console.log("hotttttttttt reload", req)
  let content = renderToString(
    <Provider store={store} >
      <StaticRouter location={req.location} context={context}>
       <App />
       </StaticRouter>
    </Provider>
  );
  const preloadedState = store.getState()
  console.log("preloadedState:",preloadedState, "content:",content)

  return {content, preloadedState};
}
