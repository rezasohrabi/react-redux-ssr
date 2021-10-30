import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { StaticRouter } from 'react-router-dom';
import rootReducer from '../src/redux/rootReducer';
import App from '../src/App';

const ssr = (req) => {
  const store = createStore(rootReducer);
  const context = {};
  let content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    </Provider>
  );
  const preloadedState = store.getState();

  return { content, preloadedState };
};

export default ssr;
