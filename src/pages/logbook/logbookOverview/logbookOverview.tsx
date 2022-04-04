import * as React from "react";
import { useTranslation } from "react-i18next";
import "./styles.scss";
import AddLogbookItemModal from "./components/addLogbookItemModal/addLogbookItemModal";
import { useHistory } from "react-router-dom";
import LogbookList from "components/logbookList/logbookList";
import LogbookFilter from "./components/logbookFilter/logbookFilter";
import { LogbookFilterInput, LogbookItem } from "graphql/schema";

interface Props {
  data: LogbookItem[];
  onFilterChange: (filters: LogbookFilterInput) => void;
}

const className = "LogbookOverview";

const LogbookOverview: React.FC<Props> = ({ data, onFilterChange }) => {
  const { t } = useTranslation();
  const history = useHistory();

  const goToDetail = (id: string) => {
    history.push(`/logbook/${id}`);
  };

  return (
    <div className={className}>
      <div className="page-header">
        <h1>{t("logbookOverview.title")}</h1>
        <AddLogbookItemModal></AddLogbookItemModal>
      </div>

      <LogbookFilter onChange={onFilterChange}></LogbookFilter>

      <LogbookList
        data={data}
        onClick={goToDetail}
      />
    </div>
  );
};

export default LogbookOverview;