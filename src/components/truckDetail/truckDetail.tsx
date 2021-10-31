import { Col, Collapse, Row, Table } from 'antd';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { Compartment, GetTruckQuery, Section } from '../../generated/graphql';
import './styles.scss';

const { Panel } = Collapse;

interface Props {
  data: GetTruckQuery
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

const renderCompartment = (compartment: Partial<Compartment>, id: number, t: any) => (compartment &&
  <Panel header={compartment.name} key={'comparment_'+id}>
    { compartment.sections && compartment.sections.length ? 
      compartment.sections.map((section, i) => renderSection(section as Section, i, t)) :
      <div>{ t("truckDetail.noCompartment")}</div>}
  </Panel>);

const renderSection = (section: Partial<Section>, id: number, t: any) => {
  const counts: { [key:string]: number } = {};

  for (const num of section.materials?.map(m => m.type.name) || []) {
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  }
  const dataSource: { materialName: string; amount: number}[] = Object.keys(counts).map(key => ({ key: key, materialName: key, amount: counts[key] })) || [];

  return (section &&
    <div key={'section_'+id} className="section">
      <h3>{section.name} </h3>
      <Row gutter={[16, 16]}>
        <Col span={18}>
          <Table dataSource={dataSource} columns={columns} pagination={false} showHeader={false}/>
        </Col>
        <Col span={6}>
          {section.imageUrl ?
            <img src={section.imageUrl} alt={`Section ${section.name}`} /> :
            <p>{ t("truckDetail.noImage")}</p>}
        </Col>
      </Row>
    </div>);
};

const TruckDetail: React.FC<Props> = ({ data }) => {
  const { t } = useTranslation();

  return (
  <div className={className}>
    { data && data.truck && (
      <>
      <h1>{`${data.truck.name} - (${data.truck.code})`}</h1>
      <Collapse>
        { data.truck.compartments.map((compartment, i) => renderCompartment(compartment as Compartment, i, t))}
      </Collapse>
      </>
    )}
  </div>
);
};

export default TruckDetail;