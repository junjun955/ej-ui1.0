import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import OrderLinePage from './routes/OrderLinePage'
import CustomerPage from './routes/CustomerPage'
import WaiterPage from './routes/WaiterPage'
import OrderPage from './routes/OrderPage'

function RouterConfig({ history }) {
  return (
<<<<<<< HEAD
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/orderLine" exact component={OrderLinePage} />
        <Route path="/customer" exact component={CustomerPage} />
        <Route path="/waiter" exact component={WaiterPage} />
        <Route path="/order" exact component={OrderPage} />
      </Switch>
    </Router>
=======
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={IndexPage} />
          <Route path="/orderLine" exact component={OrderLinePage} />
          <Route path="/customer" exact component={CustomerPage} />
          <Route path="/order" exact component={OrderPage} />
        </Switch>
      </Router>
    
>>>>>>> d73434c8c0d49eb848957c10af937bd89abce42e
  );
}

export default RouterConfig;