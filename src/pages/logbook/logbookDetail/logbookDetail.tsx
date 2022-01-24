import { Row, Col, Tooltip } from 'antd';
import * as React from 'react';
import Moment from 'react-moment';
import { useTranslation } from 'react-i18next';
import { LogbookItem, LogBookItemType, MaterialCheckReport as MaterialCheckReportType } from 'generated/graphql';
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

      <Row gutter={[16, 16]}>
        <Col span={6}>
          <h2>{ logbookItem.truck.name }</h2>
          <span>
            Opgemaakt op <Tooltip title={<Moment format="HH:mm:ss">{logbookItem.createdAt}</Moment>}><Moment format="DD-MM-YYYY">{logbookItem.createdAt}</Moment></Tooltip> door {logbookItem.user}
          </span>
        </Col>
        <Col span={18}>
          {logbookItem.type === LogBookItemType.ProblemReport && (
            <h1>PROBLEM</h1>
          )}

          {logbookItem.type === LogBookItemType.MaterialCheck && (
            <MaterialCheckReport materialChecks={(logbookItem as MaterialCheckReportType).checks} />
          )}
        </Col>
      </Row>
    </div>
  )
};

export default LogbookItemDetail;