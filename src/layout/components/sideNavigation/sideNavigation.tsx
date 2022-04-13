import { CarOutlined, ToolOutlined, BookOutlined } from "@ant-design/icons";
import { Role } from "components/rolesGuard/roles.enum";
import RoleGuard from "components/rolesGuard/rolesGuard";
import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import "./styles.scss";

interface Props {
  onUrlChange: () => void;
}

interface MenuItem {
  text: string;
  icon: React.ForwardRefExoticComponent<any>;
  url: string;
  role: Role;
}

const items: MenuItem[] = [
  { text: "navigation.trucks", icon: CarOutlined, url: "/trucks", role: Role.Basic },
  { text: "navigation.materials", icon: ToolOutlined, url: "/materials", role: Role.Manager },
  { text: "navigation.logbook", icon: BookOutlined, url: "/logbook", role: Role.Basic },
];

const SideNavigation: React.FC<Props> = ({ onUrlChange }) => {
  const { t } = useTranslation();

  return (
    <div className="sideNavigation">
      {items.map((item, i) => (
        <RoleGuard minumumRole={item.role} key={i}>
          <NavLink to={item.url} activeClassName="navigationElement__active" className="navigationElement" onClick={onUrlChange}>
            {React.createElement(item.icon)}
            {t(item.text)}
          </NavLink>
        </RoleGuard>
      ))}
    </div>
  );
};

export default SideNavigation;