import * as React from "react";
import { useTranslation } from "react-i18next";
import { GetMaterialTypesQuery } from "graphql/schema";
import AddMaterialTypeModal from "./components/addMaterialTypeModal/addMaterialTypeModal";
import "./styles.scss";
import AppTable from "components/appTable/appTable";
import RoleGuard from "components/rolesGuard/rolesGuard";
import { Role } from "components/rolesGuard/roles.enum";
import { TablePaginationConfig } from "antd";

interface Props {
  data: GetMaterialTypesQuery;
  refetchData: (skip: number, limit: number) => void;
}

interface TableItem {
  code: string;
  name: string;
  codeFiche?: string | null;
}

const className = "MaterialOverview";

const columns = [
  {
    title: "Code",
    dataIndex: "code",
    key: "code",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
  }
];

const MaterialOverview: React.FC<Props> = ({ data, refetchData }) => {
  const { t } = useTranslation();
  const dataSource: TableItem[] = data?.materialTypes?.items.map(material => ({
    code: material.code,
    name: material.name,
    description: material.description,
    key: material.code
  }) || []);

  const handlePageChange = (pagination: TablePaginationConfig) => {
    console.log(pagination);
    const skip = ((pagination.current || 1) * (pagination.pageSize || 0)) - (pagination.pageSize || 0);
    refetchData(skip, pagination.pageSize || 10);
  };

  return (
    <div className={className}>
      <div className="page-header">
        <h1>{t("materialsOverview.title")}</h1>
        <RoleGuard role={Role.Manager}>
          <AddMaterialTypeModal></AddMaterialTypeModal>
        </RoleGuard>
      </div>
      

      <AppTable
        dataSource={dataSource}
        columns={columns}
        pagination={{ total: data.materialTypes.count }}
        onChange={(pagination) => { handlePageChange(pagination); }}
      />
    </div>
  );
};

export default MaterialOverview;