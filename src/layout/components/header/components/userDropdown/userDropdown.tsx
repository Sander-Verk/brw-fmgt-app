import { DownOutlined, InfoCircleOutlined, LogoutOutlined, SettingOutlined } from "@ant-design/icons";
import { AdminPortal, useAuthUser } from "@frontegg/react";
import { Avatar, Dropdown, Menu } from "antd";
import * as React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./styles.scss";

interface Props {
}

const UserDropdown: React.FC<Props> = () => {
  const { t } = useTranslation();
  const user = useAuthUser();

  const onSettingsClick = () => {
    AdminPortal.show();
  };

  const userMenu = (
    <Menu>
      <Menu.Item icon={<SettingOutlined />} onClick={onSettingsClick}>
        {t("navigation.settings")}
      </Menu.Item>
      <Menu.Item icon={<InfoCircleOutlined />}>
        <Link to="/about">{t("navigation.about")}</Link>
      </Menu.Item>
      <Menu.Item icon={<LogoutOutlined />}>
        <Link to="/account/logout">{t("navigation.logout")}</Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={userMenu}>
      <div className='userContent'>
        <Avatar src={user.profilePictureUrl} />
        <span className='userContent__name'>{ user.name }</span>
        <DownOutlined />
      </div>
    </Dropdown>
  );
};

export default UserDropdown;