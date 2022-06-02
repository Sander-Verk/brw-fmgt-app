import { Table, TablePaginationConfig } from "antd";
import * as React from "react";
import "./styles.scss";

interface Props {
  dataSource: any[];
  columns: any;
  pagination: false | TablePaginationConfig;
  showHeader?: boolean;
  onRow?: any;
  footer?: any;
  onChange?: (pagination: TablePaginationConfig, filters: any, sorter: any, extra: any) => void;
}

const AppTable: React.FC<Props> = ({ dataSource, columns, pagination, showHeader,  onRow, footer, onChange }) => {
  return (
    <Table
      dataSource={dataSource}
      columns={columns}
      pagination={pagination ? { ...pagination, position: ["bottomRight"]} : false}
      onChange={onChange}
      showHeader={showHeader}
      onRow={onRow}
      footer={footer}
    />
  );
};

export default AppTable;