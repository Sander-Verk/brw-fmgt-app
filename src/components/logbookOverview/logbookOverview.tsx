import { Table } from 'antd';
import * as React from 'react';
import Moment from 'react-moment';
import { useTranslation } from 'react-i18next';
import { GetLogbookQuery, LogBookItemType } from '../../generated/graphql';
import './styles.scss';
import { ColumnsType } from 'antd/lib/table';
import { ControlOutlined, WarningOutlined } from '@ant-design/icons';
import Translated from '../translated/translated';
import AddLogbookItemModal from './components/addLogbookItemModal/addLogbookItemModal';

interface Props {
  data: GetLogbookQuery;
}

interface TableItem {
  id: string;
  type: string;
  truck: string;
  user: string;
  createdAt: string;
}

const className = 'LogbookOverview';

const columns: ColumnsType<TableItem> = [
  {
    title: <Translated value={'logbookItems.type'}/>,
    dataIndex: 'type',
    key: 'type',
    render: (value: LogBookItemType) => {
      if (value === LogBookItemType.ProblemReport) {
        return (<span><WarningOutlined /> <Translated value={'logbookItemType.'+value.toLowerCase()}/></span>);
      } else if (value === LogBookItemType.MaterialCheck) {
        return (<span><ControlOutlined /> <Translated value={'logbookItemType.'+value.toLowerCase()}/></span>);
      } else {
        return (<span><Translated value={'logbookItemType.'+value}/></span>);
      }
    }
  },
  {
    title: <Translated value={'logbookItems.truck'}/>,
    dataIndex: 'truck',
    key: 'truck',
  },
  {
    title: <Translated value={'logbookItems.user'}/>,
    dataIndex: 'user',
    key: 'user',
  },
  {
    title: <Translated value={'logbookItems.createdAt'}/>,
    dataIndex: 'createdAt',
    key: 'createdAt',
    render: (value) => {
      return <Moment format="MM-DD-YYYY HH:mm:ss">{value}</Moment>;
    }
  }
];

const LogbookOverview: React.FC<Props> = ({ data }) => {
  const { t } = useTranslation();
  const dataSource: TableItem[] = data?.logbook?.items.map(logbook => ({
    key: logbook.id,
    id: logbook.id,
    type: logbook.type,
    truck: logbook.truck.name,
    user: logbook.user,
    createdAt: logbook.createdAt,
  }) || [])

  return (
    <div className={className}>
      <div className="pageHeader">
        <h1>{t("logbookOverview.title")}</h1>
        <AddLogbookItemModal></AddLogbookItemModal>
      </div>
      

      <Table dataSource={dataSource} columns={columns} pagination={false} />
    </div>
  )
};

export default LogbookOverview;