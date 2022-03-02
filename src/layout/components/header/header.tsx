import { CarOutlined, ToolOutlined, InfoCircleOutlined, LogoutOutlined, UserOutlined, BookOutlined } from "@ant-design/icons";
import { AdminPortal, useAuthUser } from "@frontegg/react";
import { Menu } from "antd";
import { Header } from "antd/lib/layout/layout";
import SubMenu from "antd/lib/menu/SubMenu";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

interface Props {

};

const AppHeader: React.FC<Props> = () => {
  const { t } = useTranslation();
  const user = useAuthUser();

  const onSettingsClick = () => {
    AdminPortal.show();
  }

  return (
    <Header className="no-print" style={{ position: 'fixed', zIndex: 1, width: '100%', display: 'flex', justifyContent: 'space-between' }}>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" style={{width: "100%"}} >
        <Menu.Item key="1" icon={<CarOutlined />}>
          <Link to="/">{t("navigation.trucks")}</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<ToolOutlined />}>
          <Link to="/materials">{t("navigation.materials")}</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<BookOutlined />}>
          <Link to="/logbook">{t("navigation.logbook")}</Link>
        </Menu.Item>
        <SubMenu key="4" icon={<UserOutlined />} title={user.name}>
          <Menu.Item key="3:1" icon={<InfoCircleOutlined />}>
            <Link to="/about">{t("navigation.about")}</Link>
          </Menu.Item>
          <Menu.Item key="3:2" icon={<InfoCircleOutlined />} onClick={onSettingsClick}>
            {t("navigation.settings")}
          </Menu.Item>
          <Menu.Item key="3:3" icon={<LogoutOutlined />}>
            <Link to="/account/logout">{t("navigation.logout")}</Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </Header>
  );
}

export default AppHeader;