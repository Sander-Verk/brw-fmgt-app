import { Card, Checkbox, Form, FormInstance } from 'antd';
import { FormListFieldData } from 'antd/lib/form/FormList';
import * as React from 'react';
import { Compartment, CompartmentCheckInput, Material, MaterialCheckInput, SectionCheckInput, useGetTruckQuery } from '../../../../generated/graphql';
import ErrorMessage from '../../../errorMessage/errorMessage';
import Loading from '../../../loader/loading';
import './styles.scss';

const _ = require('lodash');

interface Props {
  truckId: string;
  form: FormInstance;
}

const MaterialCheckForm: React.FC<Props> = ({ truckId, form }) => {
  const { data, error, loading } = useGetTruckQuery({
    variables: { id: truckId },
  });

  const mapMaterials = (materials: Material[]): MaterialCheckInput[] => {
    const grouped = _.groupBy(materials, "type.id");
    return Object.keys(grouped).map(key => ({
      materialTypeId: key,
      amount: grouped[key].length,
      check: false
    }));
  };

  const mapMaterialForm = (compartments: Compartment[]): CompartmentCheckInput[] => {
    return compartments.map(c => ({
      id: c.id,
      code: c.code,
      name: c.name,
      sections: c.sections.map((s) => ({
        id: s.id || "",
        name: s.name || "",
        materials: mapMaterials(s.materials)
      }))
    }));
  };

  const renderCompartment = (field: FormListFieldData, comparment: CompartmentCheckInput) => {
    return (
      <Card key={field.fieldKey} className="">
        <h1>{ comparment.name }</h1>
        {renderSection(field.name, comparment.sections)}
      </Card>
    )
  }

  const renderSection = (fieldName: number, sections: SectionCheckInput[]) => {
    return (
      <Form.List name={[fieldName, 'sections']} initialValue={sections}>
        {(fields) => (
          <>
            {fields.map(section => (
              <div key={section.key}>
                <h2>{ sections[section.key].name }</h2>
                {sections[section.key]?.materials && renderMaterials(section.name, sections[section.key].materials)}
              </div>
            ))}
          </>
        )}
      </Form.List>
    )
  };

  const renderMaterials = (fieldName: number, materials: MaterialCheckInput[]) => {
    return (
      <Form.List name={[fieldName, 'materials']} initialValue={materials}>
        {(fields) => (
          <>
            {fields.map(field => (
              <div key={field.fieldKey}>
                <Form.Item
                  {...field}
                  name={[field.name, 'check']}
                  fieldKey={[field.fieldKey, 'check']}
                  valuePropName="checked"
                ><Checkbox></Checkbox></Form.Item>
              </div>
            ))}
          </>
        )}
      </Form.List>
    )
  };

  if (loading) {
    return <Loading></Loading>
  }

  if (error || !data) {
    return <ErrorMessage message={error?.message}></ErrorMessage>;
  }

  return (
    <Form.List name="checks" initialValue={mapMaterialForm(data.truck.compartments)}>
      {(comparments) => (
        <>
          {comparments.map(field => renderCompartment(field, mapMaterialForm(data.truck.compartments)[field.key]))}
        </>
      )}
    </Form.List>
  );
};

export default MaterialCheckForm;