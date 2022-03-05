import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Header } from "antd/lib/layout/layout";
import React from "react";
import UserDropdown from "./components/userDropdown/userDropdown";
import './styles.scss';

interface Props {
  hasBroken: boolean;
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
};

const AppHeader: React.FC<Props> = ({ hasBroken, collapsed, setCollapsed}) => {
  return (
    <Header className='appHeader'>
      <div>
        {hasBroken && React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
          className: 'trigger',
          onClick: () => { setCollapsed(!collapsed) },
        })}
      </div>
      

      <UserDropdown></UserDropdown>
    </Header>
  );
}

export default AppHeader;