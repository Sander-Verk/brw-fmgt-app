import { Table } from 'antd';
import * as React from 'react';
import './styles.scss';

interface Props {
  dataSource: any[];
  columns: any;
  pagination: boolean;
  showHeader?: boolean;
  onRow?: any;
}

const AppTable: React.FC<Props> = ({ dataSource, columns, pagination, showHeader,  onRow }) => {
  return (
    <Table
      dataSource={dataSource}
      columns={columns}
      pagination={pagination ? { position: ['bottomRight'] } : false}
      showHeader={showHeader}
      onRow={onRow}
    />
  );
};

export default AppTable;