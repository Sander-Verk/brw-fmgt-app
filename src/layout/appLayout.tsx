import * as React from "react";
import { Layout } from "antd";
import { Content } from "antd/lib/layout/layout";
import Sider from "antd/lib/layout/Sider";
import { CloseOutlined } from "@ant-design/icons";
import AppFooter from "./components/footer/footer";
import SideNavigation from "./components/sideNavigation/sideNavigation";
import "./styles.scss";
import AppHeader from "./components/header/header";
import AppRouter from "./appRouter";

interface Props {

}

const AppLayout: React.FC<Props> = () => {
  const [collapsed, setCollapsed] = React.useState<boolean>(false);
  const [hasBroken, setHasBroken] = React.useState<boolean>(false);

  const onBreak = (hasBroken: boolean) => {
    setCollapsed(hasBroken);
    setHasBroken(hasBroken);
  };

  // Collapse menu on urlChange when display is to small
  const onUrlChange = () => {
    if (hasBroken) {
      setCollapsed(true);
    }
  };

  return (
    <Layout className="rootSection">
      <Sider
        className='sideBar'
        style={{ position: hasBroken ? "absolute" : "relative", minHeight: "100vh", padding: collapsed ? 0 : "20px" }}
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

      <Layout>
        <AppHeader collapsed={collapsed} hasBroken={hasBroken} setCollapsed={setCollapsed}/>

        <Content style={{ margin: "80px 40px 0" }}>
          <AppRouter></AppRouter>
        </Content>

        <AppFooter />
      </Layout>
    </Layout>
  );
};



export default AppLayout;