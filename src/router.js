import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import OrderLinePage from './routes/OrderLinePage'
import CustomerPage from './routes/CustomerPage'
import WaiterPage from './routes/WaiterPage'
import OrderPage from './routes/OrderPage'
import CommentPage from './routes/CommentPage'
import ProductPage from './routes/ProductPage'
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/orderLine" exact component={OrderLinePage} />
        <Route path="/customer" exact component={CustomerPage} />
        <Route path="/waiter" exact component={WaiterPage} />
        <Route path="/order" exact component={OrderPage} />
        <Route path="/comment" exact component={CommentPage} />
        <Route path="/product" exact component={ProductPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;