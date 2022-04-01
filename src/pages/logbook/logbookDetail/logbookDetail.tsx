import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { LogbookItem, LogBookItemType, MaterialCheckReport as MaterialCheckReportType } from 'graphql/schema';
import MaterialCheckReport from './components/materialCheckReport/materialCheckReport';
import './styles.scss';

interface Props {
  logbookItem: LogbookItem;
}
const className = 'LogbookItemDetail';

const LogbookItemDetail: React.FC<Props> = ({ logbookItem }) => {
  const { t } = useTranslation();

  return (
    <div className={className}>
      <div className="pageHeader">
        <h1>{t(`logbookItemDetail.${logbookItem.type.toLowerCase()}.title`)}</h1>
      </div>

      <h2>{ logbookItem.truck.name }</h2>

      {logbookItem.type === LogBookItemType.ProblemReport && (
        <h1>PROBLEM</h1>
      )}

      {logbookItem.type === LogBookItemType.MaterialCheck && (
        <MaterialCheckReport id={logbookItem.id} materialChecks={(logbookItem as MaterialCheckReportType).checks} history={logbookItem.statusHistory}/>
      )}
    </div>
  )
};

export default LogbookItemDetail;