import * as React from 'react';
import { useTranslation } from 'react-i18next';
import './styles.scss';
import AddLogbookItemModal from './components/addLogbookItemModal/addLogbookItemModal';
import { useHistory } from 'react-router-dom';
import LogbookList from 'components/logbookList/logbookList';

interface Props {
}

const className = 'LogbookOverview';

const LogbookOverview: React.FC<Props> = () => {
  const { t } = useTranslation();
  const history = useHistory();

  const goToDetail = (id: string) => {
    history.push(`/logbook/${id}`);
  }

  return (
    <div className={className}>
      <div className="page-header">
        <h1>{t("logbookOverview.title")}</h1>
        <AddLogbookItemModal></AddLogbookItemModal>
      </div>


      <LogbookList
        onClick={goToDetail}
      />
    </div>
  )
};

export default LogbookOverview;