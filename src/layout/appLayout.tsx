import { Layout } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import * as React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import AddLogbookItemContainer from '../components/addLogbookItem';
import LogbookOverviewContainer from '../components/logbookOverview';
import MaterialOverviewContainer from '../components/materialsOverview';
import TruckDetailContainer from '../components/truckDetail';
import TruckOverviewContainer from '../components/truckOverview';
import AppFooter from './components/footer/footer';
import AppHeader from './components/header/header';
import './styles.scss';

interface Props {

};

const AppLayout: React.FC<Props> = () => {
  return (
    <Layout>
      <AppHeader></AppHeader>
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
            <Route path="/logbook" exact={true}>
              <LogbookOverviewContainer></LogbookOverviewContainer>
            </Route>
            <Route path="/logbook/new" exact={true}>
              <AddLogbookItemContainer></AddLogbookItemContainer>
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
      <AppFooter></AppFooter>
    </Layout>
  )
};

export default AppLayout;