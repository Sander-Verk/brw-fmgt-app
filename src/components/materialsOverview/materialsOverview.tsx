import { Table } from 'antd';
import dayjs from 'dayjs'
import * as React from 'react';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();
  const dataSource: TableItem[] = data?.materials?.items.map(material => ({
    code: material.type.code,
    name: material.type.name,
    serial: material.serial,
    codeFiche: material.type.codeFiche,
    date: dayjs(material.date).format('DD/MM/YYYY'),
    key: material.type.code
  }) || [])

  return (
    <div className={className}>
      <h1>{t("materialsOverview.title")}</h1>

      <Table dataSource={dataSource} columns={columns} pagination={false} />
    </div>
  )
};

export default MaterialOverview;