import { Table } from 'antd';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { GetMaterialTypesQuery } from '../../generated/graphql';
import AddMaterialTypeModal from './components/addMaterialTypeModal/addMaterialTypeModal';
import './styles.scss';

interface Props {
  data: GetMaterialTypesQuery;
}

interface TableItem {
  code: string;
  name: string;
  codeFiche?: string | null;
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
    title: 'Code Fiche',
    dataIndex: 'codeFiche',
    key: 'codeFiche',
  }
];

const MaterialOverview: React.FC<Props> = ({ data }) => {
  const { t } = useTranslation();
  const dataSource: TableItem[] = data?.materialTypes?.items.map(material => ({
    code: material.code,
    name: material.name,
    codeFiche: material.codeFiche,
    key: material.code
  }) || [])

  return (
    <div className={className}>
      <div className="pageHeader">
        <h1>{t("materialsOverview.title")}</h1>
        <AddMaterialTypeModal></AddMaterialTypeModal>
      </div>
      

      <Table dataSource={dataSource} columns={columns} pagination={false}/>
    </div>
  )
};

export default MaterialOverview;