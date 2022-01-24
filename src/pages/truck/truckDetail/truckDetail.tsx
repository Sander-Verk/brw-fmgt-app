import { Button, Col, Collapse, Row, Table } from 'antd';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { Compartment, GetTruckQuery, Section } from 'generated/graphql';
import AddCompartmentModal from './components/addCompartmentModal/addCompartmentModal';
import AddMaterialModal from './components/addMaterialModal/addMaterialModal';
import AddSectionModal from './components/addSectionModal/addSectionModal';
import './styles.scss';
import { countMaterials } from 'utils/material.helper';

const { Panel } = Collapse;

interface Props {
  data: GetTruckQuery,
  printDetail: () => void
}

const className = 'TruckDetail';
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

const renderCompartment = (truckId: string, compartment: Partial<Compartment>, id: number, t: any) => (compartment && compartment.id &&
  <Panel header={compartment.name} key={'comparment_' + id}>
    <AddSectionModal truckId={truckId} compartmentId={compartment.id}></AddSectionModal>
    {compartment.sections && compartment.sections.length ?
      compartment.sections.map((section, i) => renderSection(truckId, compartment.id as string, section as Section, i, t)) :
      <div>{t("truckDetail.noSection")}</div>}
  </Panel>);

const renderSection = (truckId: string, compartmentId: string, section: Partial<Section>, id: number, t: any) => {
  const dataSource = countMaterials(section.materials || []);

  return (section && section.id &&
    <div key={'section_' + id} className="section">
      <h3>{section.name}</h3>
      <Row gutter={[16, 16]}>
        <Col span={18}>
          <Table dataSource={dataSource} columns={columns} pagination={false} showHeader={false} footer={() => renderTableFooter(truckId, compartmentId, section.id as string)}/>
        </Col>
        <Col span={6}>
          {section.imageUrl ?
            <img src={section.imageUrl} alt={`Section ${section.name}`} width={300}/> :
            <p>{t("truckDetail.noImage")}</p>}
        </Col>
      </Row>
    </div>);
};

const renderTableFooter = (truckId: string, compartmentId: string, sectionId: string) => (
  <AddMaterialModal truckId={truckId} compartmentId={compartmentId} sectionId={sectionId}></AddMaterialModal>
)

const sort = (array: any[]): any[] => {
  return [...array].sort((a, b) => a.code > b.code ? 1 : -1);
}

const TruckDetail: React.FC<Props> = ({ data, printDetail }) => {
  const { t } = useTranslation();

  return (
    <div className={className}>
      {data && data.truck && (
        <>
          <div className="truck-header">
            <h1>{`${data.truck.name} - (${data.truck.code})`}</h1>

            <div>
              <Button type="primary" className="printBtn" onClick={printDetail}>
                {t('truckDetail.printList')}
              </Button>
              <AddCompartmentModal truckId={data.truck.id}></AddCompartmentModal>
            </div>
          </div>

          <Collapse>
            {sort(data.truck.compartments).map((compartment, i) => renderCompartment(data.truck.id, compartment as Compartment, i, t))}
          </Collapse>
        </>
      )}
    </div>
  );
};

export default TruckDetail;