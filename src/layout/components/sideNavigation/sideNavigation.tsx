import { CarOutlined, ToolOutlined, BookOutlined } from "@ant-design/icons";
import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import "./styles.scss";

interface Props {
  onUrlChange: () => void;
}

const items: { text: string; icon: any; url: string }[] = [
  { text: "navigation.trucks", icon: CarOutlined, url: "/trucks" },
  { text: "navigation.materials", icon: ToolOutlined, url: "/materials" },
  { text: "navigation.logbook", icon: BookOutlined, url: "/logbook" },
];

const SideNavigation: React.FC<Props> = ({ onUrlChange }) => {
  const { t } = useTranslation();

  return (
    <div className="sideNavigation">
      {items.map((item, i) => (
        <NavLink to={item.url} activeClassName="navigationElement__active" key={i} className="navigationElement" onClick={onUrlChange}>
          {React.createElement(item.icon)}
          {t(item.text)}
        </NavLink>
      ))}
    </div>
  );
};

export default SideNavigation;