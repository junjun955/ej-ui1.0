import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import CustomerPage from './routes/CustomerPage'
<<<<<<< HEAD
=======
import OrderPage from './routes/OrderPage'
>>>>>>> 321f836eb162f8ced11f1b5319952c61df00a94e

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/customer" exact component={CustomerPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
