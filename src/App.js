import React from 'react';
import { Switch, Route } from 'react-router';
import routes from './routes';


const App = (props) => {
  return (
    <Switch>
      {routes.map((route, index) => <Route key={index} {...route} />)}
    </Switch>
  );
};

export default App;
