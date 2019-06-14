import React from 'react';
import { Router, Route, Switch,Link} from 'dva/router';
import IndexPage from './routes/IndexPage';
import OrderLinePage from './routes/OrderLinePage'
import CustomerPage from './routes/CustomerPage'
import WaiterPage from './routes/WaiterPage'
import OrderPage from './routes/OrderPage'
import CommentPage from './routes/CommentPage'
import ProductPage from './routes/ProductPage'
import AddressPage from './routes/AddressPage'
import CategoryPage from './routes/CategoryPage'

import styles from './router.css'
function RouterConfig({ history }) {
  
  return (
    <Router history={history}>
      <div className={styles.container}>
          <div className={styles["left-nav"]}>
            <div className={styles.title}>E洁家政后台管理系统</div>
            <ul>
              <li className={styles["nav-list-item"]}><Link to="/customer">顾客管理</Link></li>
              <li className={styles["nav-list-item"]}><Link to="/address">地址管理</Link></li>
              <li className={styles["nav-list-item"]}><Link to="/order">订单管理</Link></li>
              <li className={styles["nav-list-item"]}><Link to="/waiter">服务员管理</Link></li>
              <li className={styles["nav-list-item"]}><Link to="/comment">评价管理</Link></li>
              <li className={styles["nav-list-item"]}><Link to="/product">产品管理</Link></li>
              <li className={styles["nav-list-item"]}><Link to="/category">分类管理</Link></li>
            </ul>
          </div>
        <div className={styles["right-content"]}>
            <Switch>
             <Route path="/" exact component={IndexPage} />
             <Route path="/orderLine" exact component={OrderLinePage} />
             <Route path="/customer" exact component={CustomerPage} />
            <Route path="/waiter" exact component={WaiterPage} />
            <Route path="/order" exact component={OrderPage} />
            <Route path="/comment" exact component={CommentPage} />
            <Route path="/product" exact component={ProductPage} />
            <Route path="/address" exact component={AddressPage} />
            <Route path="/category" exact component={CategoryPage} />
           </Switch>
      </div>
  </div>
    </Router>
  );
}

export default RouterConfig;