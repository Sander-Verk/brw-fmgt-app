import { WarningOutlined, ControlOutlined } from "@ant-design/icons";
import { ColumnsType } from "antd/lib/table";
import AppTable from "components/appTable/appTable";
import Translated from "components/translated/translated";
import { LogbookItem, LogBookItemType } from "graphql/schema";
import * as React from "react";
import Moment from "react-moment";
import "./styles.scss";

interface Props {
  data: LogbookItem[],
  onClick: (id: string) => void
}

interface TableItem {
  id: string;
  type: string;
  truck: string;
  user: string;
  createdAt: string;
}

const columns: ColumnsType<TableItem> = [
  {
    title: <Translated value={"logbookItems.type"} />,
    dataIndex: "type",
    key: "type",
    render: (value: LogBookItemType) => {
      if (value === LogBookItemType.ProblemReport) {
        return (<span><WarningOutlined /> <Translated value={"logbookItemType." + value.toLowerCase()} /></span>);
      } else if (value === LogBookItemType.MaterialCheck) {
        return (<span><ControlOutlined /> <Translated value={"logbookItemType." + value.toLowerCase()} /></span>);
      } else {
        return (<span><Translated value={"logbookItemType." + value} /></span>);
      }
    }
  },
  {
    title: <Translated value={"logbookItems.truck"} />,
    dataIndex: "truck",
    key: "truck",
  },
  {
    title: <Translated value={"logbookItems.user"} />,
    dataIndex: "user",
    key: "user",
  },
  {
    title: <Translated value={"logbookItems.status"} />,
    dataIndex: "status",
    key: "status",
    render: (value) => {
      return <Translated value={`historyStatus.${value?.toLowerCase()}`} />;
    }
  },
  {
    title: <Translated value={"logbookItems.createdAt"} />,
    dataIndex: "createdAt",
    key: "createdAt",
    render: (value) => {
      return <Moment format="DD-MM-YYYY HH:mm:ss">{value}</Moment>;
    }
  }
];

const LogbookList: React.FC<Props> = ({ data, onClick }) => {
  const dataSource: any = data.map(logbook => ({
    key: logbook.id,
    id: logbook.id,
    type: logbook.type,
    truck: `(${logbook.truck.code}) ${logbook.truck.name}`,
    user: logbook.user.name,
    status: logbook.status,
    createdAt: logbook.createdAt,
  }) || []);

  return (
    <AppTable
      dataSource={dataSource}
      columns={columns}
      pagination={false}
      onRow={(record: TableItem) => {
        return {
          onClick: () => { onClick(record.id); }
        };
      }}
    />
  );
};

export default LogbookList;