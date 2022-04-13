import { Row, Col } from "antd";
import AppTable from "components/appTable/appTable";
import { Role } from "components/rolesGuard/roles.enum";
import RoleGuard from "components/rolesGuard/rolesGuard";
import { Section } from "graphql/schema";
import * as React from "react";
import { useTranslation } from "react-i18next";
import { countMaterials } from "utils/material.helper";
import AddMaterialModal from "../addMaterialModal/addMaterialModal";
import "./styles.scss";


interface Props {
  truckId: string;
  compartmentId: string;
  section: Section;
}

const columns = [
  {
    title: "Material",
    dataIndex: "materialName",
    key: "materialName",
  },
  {
    title: "Amount",
    dataIndex: "amount",
    key: "amount",
  },
];

const SectionBlock: React.FC<Props> = ({ truckId, compartmentId, section }) => {
  const { t } = useTranslation();

  const renderTableFooter = (truckId: string, compartmentId: string, sectionId: string) => (
    <RoleGuard minumumRole={Role.Manager}>
      <AddMaterialModal truckId={truckId} compartmentId={compartmentId} sectionId={sectionId}></AddMaterialModal>
    </RoleGuard>
  );

  return (
    <div className='section-block'>
      <h1 className='section-title'>{section.name}</h1>
      <Row gutter={16}>
        <Col span={8}>
          {section.imageUrl ?
            <img src={section.imageUrl} alt={`Section ${section.name}`} className="sectionImg" /> :
            <p>{t("truckDetail.noImage")}</p>}
        </Col>
        <Col span={16}>
          <AppTable
            dataSource={countMaterials(section.materials || [])}
            columns={columns}
            pagination={false}
            footer={() => renderTableFooter(truckId, compartmentId, section.id)}
          />
        </Col>
      </Row>
    </div>
  );
};

export default SectionBlock;