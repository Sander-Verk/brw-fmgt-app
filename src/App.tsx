import './app.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import TruckOverviewContainer from './components/truckOverview';
import { Layout, Menu } from 'antd';
import { ToolOutlined, InfoCircleOutlined, CarOutlined } from '@ant-design/icons';
import { Footer } from 'antd/lib/layout/layout';
import TruckDetailContainer from './components/truckDetail';
import MaterialOverviewContainer from './components/materialsOverview';

const { Header, Content } = Layout;

function App() {
  return (
    <Router>
      <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal">
            <Menu.Item key="1" icon={<CarOutlined />}>
              <Link to="/">Trucks</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<ToolOutlined />}>
              <Link to="/materials">Materials</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<InfoCircleOutlined />}>
              <Link to="/about">About</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
          <div className="container" style={{ padding: 24 }}>
            <Switch>
              <Route path="/trucks" exact={true}>
                <TruckOverviewContainer />
              </Route>
              <Route path="/trucks/:id" children={<TruckDetailContainer />} />
              <Route path="/materials">
                <MaterialOverviewContainer></MaterialOverviewContainer>
              </Route>
              <Route path="/about" exact={true}>
                <div>
                  <h1>About</h1>
                </div>
              </Route>
              <Route path="/" exact={true}>
                <Redirect to="/trucks" />
              </Route>
            </Switch>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Router>
  );
}

export default App;
