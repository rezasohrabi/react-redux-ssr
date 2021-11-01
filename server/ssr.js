import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { StaticRouter, matchPath } from 'react-router-dom';
import rootReducer from '../src/redux/rootReducer';
import App from '../src/App';
import routes from '../src/routes';
import { Helmet } from 'react-helmet';

const getInitialData = (activeRoute) => {
  if (activeRoute?.component.getInitialProps) {
    const requestInitialData = activeRoute.component.getInitialProps();
    return Promise.resolve(requestInitialData).then(
      (initialData) => initialData
    );
  }
};

const ssr = async (req) => {
  const activeRoute = routes.find((route) => matchPath(req.url, route));
  const initialProps = await getInitialData(activeRoute);

  const store = createStore(rootReducer);
  const context = { initialProps };
  let content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    </Provider>
  );
  const helmet = Helmet.renderStatic();
  const preloadedState = store.getState();

  return { content, preloadedState, initialProps, helmet };
};

export default ssr;
