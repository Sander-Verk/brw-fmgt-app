import { Button } from "antd";
import * as React from "react";
import { useTranslation } from "react-i18next";
import "./styles.scss";

interface Props {
  text: string;
  onClick: React.MouseEventHandler<HTMLElement>;

  icon?: React.ReactNode;
  type?: "link" | "text" | "ghost" | "default" | "primary" | "dashed";
  block?: boolean;
}

const AppButton: React.FC<Props> = ({ text, onClick, icon, type, block }) => {
  const { t } = useTranslation();

  return (
    <Button
      type={type || "primary"}
      onClick={onClick}
      icon={icon}
      block={block}
    >
      { t(text) }
    </Button>
  );
};

export default AppButton;