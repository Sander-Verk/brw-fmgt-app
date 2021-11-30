import { CarOutlined, ToolOutlined, InfoCircleOutlined, LogoutOutlined, UserOutlined, BookOutlined } from "@ant-design/icons";
import { useMsal } from "@azure/msal-react";
import { Menu } from "antd";
import { Header } from "antd/lib/layout/layout";
import SubMenu from "antd/lib/menu/SubMenu";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { loginRequest } from "../../../authentication/authConfig";

interface Props {

};

const AppHeader: React.FC<Props> = () => {
  const { instance, accounts } = useMsal();
  const { t } = useTranslation();

  const [userName, setUserName] = useState<string>();
  const requestProfileData = (): any => {
    instance.acquireTokenSilent({
      ...loginRequest,
      account: accounts[0]
    }).then((response) => {
      setUserName(response.account?.name);
    });
  }
  useState(requestProfileData());

  const logout = () => {
    instance.logoutRedirect({
      postLogoutRedirectUri: "/",
    });
  }



  return (
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%', display: 'flex', justifyContent: 'space-between' }}>
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
        <SubMenu key="4" icon={<UserOutlined />} title={userName}>
          <Menu.Item key="3:1" icon={<InfoCircleOutlined />}>
            <Link to="/about">{t("navigation.about")}</Link>
          </Menu.Item>
          <Menu.Item key="3:2" icon={<LogoutOutlined />} onClick={logout}>
            {t("navigation.logout")}
          </Menu.Item>
        </SubMenu>
      </Menu>
    </Header>
  );
}

export default AppHeader;