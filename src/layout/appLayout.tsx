import * as React from 'react';
import { Layout } from 'antd';
import { Content, Header } from 'antd/lib/layout/layout';
import Sider from 'antd/lib/layout/Sider';
import { MenuUnfoldOutlined, MenuFoldOutlined, CloseOutlined } from '@ant-design/icons';
import AppFooter from './components/footer/footer';
import SideNavigation from './components/sideNavigation/sideNavigation';
import './styles.scss';

interface Props {

};

const AppLayout: React.FC<Props> = () => {
  const [collapsed, setCollapsed] = React.useState<boolean>(false);
  const [hasBroken, setHasBroken] = React.useState<boolean>(false);

  const onBreak = (hasBroken: boolean) => {
    setCollapsed(hasBroken);
    setHasBroken(hasBroken);
  }

  // Collapse menu on urlChange when display is to small
  const onUrlChange = () => {
    if (hasBroken) {
      setCollapsed(true);
    }
  }

  return (
    <Layout className="rootSection">
        <Sider
          className='sideBar'
          style={{ position: hasBroken ? "absolute" : "relative", minHeight: '100vh', padding: collapsed ? 0 : '20px' }}
          width={256}
          trigger={null}
          collapsible
          collapsed={collapsed}
          collapsedWidth={0}
          breakpoint="lg"
          onBreakpoint={onBreak}
        >
          <div className='sideBar__row'>
            <div className='sideBar__logo'>
              <span className='sideBar__logo__focus'>Brandweer</span>
              <span>Poperinge</span>
            </div>

            { hasBroken && <CloseOutlined onClick={() => setCollapsed(true)} className="closeIcon" /> }
          </div>
          <SideNavigation onUrlChange={onUrlChange} />
        </Sider>

        <Layout >
          <Header style={{ background: '#fff', textAlign: 'center', padding: 0 }}>
            {hasBroken && React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: () => { setCollapsed(!collapsed) },
            })}
            Header
          </Header>
          <Content style={{ margin: '24px 16px 0' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              <h1>Content</h1>
            </div>
          </Content>
          <AppFooter />
        </Layout>
      </Layout>
    // <Layout className="rootSection">
    //   <AppHeader></AppHeader>
    //   <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
    //     <div className="container" style={{ padding: 24 }}>
    //       <AppRouter />
    //     </div>
    //   </Content>
    //   <AppFooter></AppFooter>
    // </Layout>
  )
};



export default AppLayout;