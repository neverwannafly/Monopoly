import React from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import history from './history';
import Landing from './pages/Landing';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/notfound' component={NotFound} />
        <Redirect to='/notfound' />
      </Switch>
    </Router>
  );
}

export default App;