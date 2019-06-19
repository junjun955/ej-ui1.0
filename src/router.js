import React from 'react';
import { Router, Route, Switch, Link } from 'dva/router';
import IndexPage from './routes/IndexPage';
import OrderLinePage from './routes/OrderLinePage'
import CustomerPage from './routes/CustomerPage'
import CustomerDetails from './routes/CustomerDetails'
import ProductDetails from './routes/ProductDetails'
import CommentDetails from './routes/CommentDetails'
import WaiterDetails from './routes/WaiterDetails'
import WaiterPage from './routes/WaiterPage'
import OrderPage from './routes/OrderPage'
import CommentPage from './routes/CommentPage'
import ProductPage from './routes/ProductPage'
import AddressPage from './routes/AddressPage'
import CategoryPage from './routes/CategoryPage'
import { Layout, Menu, Breadcrumb, Icon} from 'antd'
function RouterConfig({ history }) {
  const { SubMenu } = Menu;
  const { Header, Content, Sider } = Layout;

  return (
    <Router history={history}>
      
      <Layout>
        <Header className="header">
          <div className="logo" style={{ color: "#fff", fontWeight: "bold", fontSize: "18px" }}>
            e洁家政后台管理系统
            </div>
        </Header>
        <Layout>
          <Sider width={200} style={{ background: '#fff' }}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
            >
              <Menu.Item key="1">
              <Icon type="desktop" />
                
                <span>
                  <Link to="/customer">顾客管理</Link>
                </span>
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="desktop" />
                <span>
                  <Link to="/order">订单管理</Link>
                </span>
              </Menu.Item>
              <Menu.Item key="3">
                <Icon type="desktop" />
                <span>
                  <Link to="/address">地址管理</Link>
                </span>
              </Menu.Item>
              <Menu.Item key="4">
                <Icon type="desktop" />
                <span>
                  <Link to="/waiter">服务员管理</Link>
                </span>
              </Menu.Item>
              <Menu.Item key="5">
                <Icon type="desktop" />
                <span>
                  <Link to="/comment">评价管理</Link>
                </span>
              </Menu.Item>
              <Menu.Item key="6">
                <Icon type="desktop" />
                <span>
                  <Link to="/product">产品管理</Link>
                </span>
              </Menu.Item>
              <Menu.Item key="7">
                <Icon type="desktop" />
                <span>
                  <Link to="/category">分类管理</Link>
                </span>
              </Menu.Item>


            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              style={{
                background: '#fff',
                margin: 0,
                padding: '1em',
                minHeight: 280,
              }}
            >
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
                <Route path="/customerDetails" exact component={CustomerDetails} />
                <Route path="/productDetails" exact component={ProductDetails} />
                <Route path="/commentDetails" exact component={CommentDetails} />
                <Route path="/waiterDetails" exact component={WaiterDetails} />
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </Router>

  );
}
document.title = 'E洁家政后台管理平台';
export default RouterConfig;
