import { Row, Col } from 'antd';
import AppTable from 'components/appTable/appTable';
import { Section } from 'graphql/schema';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { countMaterials } from 'utils/material.helper';
import './styles.scss';


interface Props {
  section: Section;
}

const columns = [
  {
    title: 'Material',
    dataIndex: 'materialName',
    key: 'materialName',
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
  },
];

const SectionBlock: React.FC<Props> = ({ section }) => {
  const { t } = useTranslation();

  // const renderTableFooter = (truckId: string, compartmentId: string, sectionId: string) => (
  //   <AddMaterialModal truckId={truckId} compartmentId={compartmentId} sectionId={sectionId}></AddMaterialModal>
  // )

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
          <AppTable dataSource={countMaterials(section.materials || [])} columns={columns} pagination={false}></AppTable>
        </Col>
      </Row>
    </div>
  );
};

export default SectionBlock;