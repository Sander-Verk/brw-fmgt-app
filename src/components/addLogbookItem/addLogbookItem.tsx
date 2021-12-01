import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { GetTrucksQuery, LogBookItemType } from '../../generated/graphql';
import ProblemReportForm from './components/problemReportForm/problemReportForm';
import './styles.scss';

interface Props {
  trucks: GetTrucksQuery;
  type?: string;
}
const className = 'AddLogbookItem';

const AddLogbookItem: React.FC<Props> = ({ trucks, type = LogBookItemType.MaterialCheck }) => {
  const { t } = useTranslation();

  return (
    <div className={className}>
      <div className="pageHeader">
        <h1>{t("addLogbookItem.title")}</h1>
      </div>
      
      {type === LogBookItemType.ProblemReport && (
        <ProblemReportForm trucks={trucks}></ProblemReportForm>
      )}
    </div>
  )
};

export default AddLogbookItem;