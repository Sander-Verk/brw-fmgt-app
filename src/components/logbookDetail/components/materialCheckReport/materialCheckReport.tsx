import { CheckCircleFilled, CloseCircleFilled } from '@ant-design/icons';
import { Table, Card } from 'antd';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { CompartmentCheck, SectionCheck } from '../../../../generated/graphql';
import './styles.scss';

interface Props {
  materialChecks: CompartmentCheck[]
}

const sort = (array: any[]): any[] => {
  return [...array].sort((a, b) => a.code > b.code ? 1 : -1);
}

const columns = [
  {
    title: 'Material',
    dataIndex: 'materialTypeName',
    key: 'materialTypeName',
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
  },
  {
    title: 'Check',
    dataIndex: 'check',
    key: 'check',
    render: (check: boolean) => {
      return check ?
        <CheckCircleFilled className="successIcon"/> :
        <CloseCircleFilled className="errorIcon" />;
    }
  },
];

const MaterialCheckReport: React.FC<Props> = ({ materialChecks }) => {
  const { t } = useTranslation();

  const renderCompartment = (compartment: CompartmentCheck) => (compartment && compartment.id &&
    <Card key={'comparment_' + compartment.id} className="compartment">
      <h2>{compartment.name}</h2>

      {compartment.sections && compartment.sections.length ?
        compartment.sections.map((section) => renderSection(section)) :
        <div>{t("truckDetail.noSection")}</div>}
    </Card>);
  
  const renderSection = (section: SectionCheck) => {
    return (section && section.id &&
      <div key={'section_' + section.id} className="section">
        <h3>{section.name}</h3>
        
        <Table
          dataSource={section.materials.map(m => ({ materialTypeName: m.materialType.name, amount: m.amount, check: m.check}))}
          columns={columns}
          pagination={false}
          showHeader={false}
        />
      </div>);
  };

  return (
    <div>
      {sort(materialChecks).map((compartment) => renderCompartment(compartment))}
    </div>
  );
};

export default MaterialCheckReport;