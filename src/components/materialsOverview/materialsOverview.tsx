import { Table } from 'antd';
import dayjs from 'dayjs'
import * as React from 'react';
import { GetMaterialsQuery } from '../../generated/graphql';
import './styles.scss';

interface Props {
  data: GetMaterialsQuery;
}

interface TableItem {
  code: string;
  name: string;
  serial: string;
  codeFiche: string;
  date: string;
}

const className = 'MaterialOverview';

const columns = [
  {
    title: 'Code',
    dataIndex: 'code',
    key: 'code',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Serial',
    dataIndex: 'serial',
    key: 'serial',
  },
  {
    title: 'Code Fiche',
    dataIndex: 'codeFiche',
    key: 'codeFiche',
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
];

const MaterialOverview: React.FC<Props> = ({ data }) => {
  const dataSource: TableItem[] = data?.materials?.items.map(material => ({
    code: material.code,
  name: material.name,
  serial: material.serial,
  codeFiche: material.codeFiche,
  date: dayjs(material.date).format('DD/MM/YYYY') 
  }) || [])
  
  return (
  <div className={className}>
    <h1>Materials</h1>

    <Table dataSource={dataSource} columns={columns} pagination={false}/>
  </div>
)};

export default MaterialOverview;