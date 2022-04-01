import * as React from "react";
import "./styles.scss";
import Gif from "./loading.gif";
import { useTranslation } from "react-i18next";

interface Props {
}

const className = "LoadingOverview";

const Loading: React.FC<Props> = () => {
  const { t } = useTranslation();

  return (
    <div className={className}>
      <img src={Gif as any} alt='Loading Animation' width={75} />
      <h3>{t("loading")}</h3>
    </div>
  );
};

export default Loading;