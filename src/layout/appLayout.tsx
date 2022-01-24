import { Layout } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import * as React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import AddLogbookItemContainer from '../components/addLogbookItem';
import LogbookItemDetailContainer from '../pages/logbook/logbookDetail';
import LogbookOverviewContainer from '../pages/logbook/logbookOverview';
import MaterialOverviewContainer from '../pages/material/materialsOverview';
import TruckDetailContainer from '../pages/truck/truckDetail';
import TruckOverviewContainer from '../pages/truck/truckOverview';
import AppFooter from './components/footer/footer';
import AppHeader from './components/header/header';
import './styles.scss';

interface Props {

};

const AppLayout: React.FC<Props> = () => {
  return (
    <Layout className="rootSection">
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
            <Route path="/logbook/:id" >
              <LogbookItemDetailContainer></LogbookItemDetailContainer>
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