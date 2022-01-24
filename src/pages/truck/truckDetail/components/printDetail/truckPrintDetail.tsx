import * as React from 'react';
import { Compartment, GetTruckQuery } from 'generated/graphql';
import './styles.scss';
import { calculatePrintBlocks, PrintBlockType } from './print.service';
import { Col, Row, Table } from 'antd';

interface Props {
  data: GetTruckQuery,
}

const className = 'TruckPrintDetail';
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
const sort = (array: any[]): any[] => {
  return [...array].sort((a, b) => a.code > b.code ? 1 : -1);
}

const renderCompartment = (key: string, title: string) => {
  return (
    <section key={key}>
      <p className='compartmentTitle title'>{title}</p>
    </section>
  );
}

const renderSection = (key: string, title: string, materials: { materialName: string; amount: number }[], imageUrl: string) => {
  return (
    <section key={key}>
      <p className='sectionTitle title'>{title}</p>

      <Row gutter={[16, 16]} className='materialList'>
        <Col span={14}>
          <Table dataSource={materials} columns={columns} pagination={false} showHeader={false} />
        </Col>
        <Col span={10}>
          { imageUrl && <img src={imageUrl} alt={`Section ${title}`}/> }
        </Col>
      </Row>
    </section>
  );
}

const renderPrintBlocks = (compartments: Compartment[]) => {
  return calculatePrintBlocks(compartments).map((block) => {
    if (block.type === PrintBlockType.SECTION) { return renderSection(block.key, block.content.title, block.content.materials, block.content.imageUrl)}
    if (block.type === PrintBlockType.COMPARTMENT) { return renderCompartment(block.key, block.content.title)}
    if (block.type === PrintBlockType.PAGEBREAK) { return <div className='pageBreak' /> }

    return null;
  });
};

const TruckPrintDetail: React.FC<Props> = ({ data }) => {
  return (
    <div className={className}>
      {data && data.truck && (
        <>
          {/* <div className="truck-header">
            <h1>{`${data.truck.name} - (${data.truck.code})`}</h1>
          </div> */}

          {renderPrintBlocks(sort(data.truck.compartments))}
        </>
      )}
    </div>
  );
};

export default TruckPrintDetail;