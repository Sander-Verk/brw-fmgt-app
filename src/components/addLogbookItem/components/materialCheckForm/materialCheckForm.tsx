import { Card, Checkbox, Col, Form, FormInstance, Row } from 'antd';
import { FormListFieldData } from 'antd/lib/form/FormList';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { Compartment, CompartmentCheckInput, Material, MaterialCheckInput, Section, SectionCheckInput, useGetTruckQuery } from 'generated/graphql';
import ErrorMessage from 'components/errorMessage/errorMessage';
import Loading from 'components/loader/loading';
import './styles.scss';

const _ = require('lodash');

interface Props {
  truckId: string;
  form: FormInstance;
}

const sort = (array: Compartment[]): Compartment[] => {
  return [...array].sort((a, b) => a.code > b.code ? 1 : -1);
}

const MaterialCheckForm: React.FC<Props> = ({ truckId, form }) => {
  const { t } = useTranslation();
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
    return sort(compartments).map(c => ({
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

  const getSection = (compartmentId: string, sectionId: string): Section => {
    return data?.truck.compartments.find(c => c.id === compartmentId)?.sections.find(s => s.id === sectionId) as Section;
  }

  const getMaterialTypeName = (section: Section, materialTypeId: string): string => {
    return section.materials.find(m => m.type.id === materialTypeId)?.type.name || "";
  }

  const renderCompartment = (field: FormListFieldData, comparmentForm: CompartmentCheckInput) => {
    return (
      <Card key={field.fieldKey} className="compartment">
        <h1>{comparmentForm.name}</h1>

        <Form.List name={[field.name, 'sections']} initialValue={comparmentForm.sections}>
          {(fields) => (
            <>
              {fields.map(section => (
                renderSection(section, comparmentForm.sections[section.key], getSection(comparmentForm.id, comparmentForm.sections[section.key].id))
              ))}
            </>
          )}
        </Form.List>
      </Card>
    )
  }

  const renderSection = (field: FormListFieldData, sectionForm: SectionCheckInput, section: Section) => {
    return (
      <section key={field.key}>
        <h2>{sectionForm.name}</h2>
        <Row gutter={[16, 16]}>
          <Col span={18}>
            <Form.List name={[field.name, 'materials']} initialValue={sectionForm.materials}>
              {(fields) => (
                <>
                  {fields.map(material => (
                    sectionForm?.materials && renderMaterial(material, sectionForm.materials[material.key], getMaterialTypeName(section, sectionForm.materials[material.key].materialTypeId))
                  ))}
                </>
              )}
            </Form.List>
          </Col>
          <Col span={6}>
            {section.imageUrl ?
              <img src={section.imageUrl} alt={`Section ${section.name}`} className="sectionImg" /> :
              <p>{t("truckDetail.noImage")}</p>}
          </Col>
        </Row>
      </section>
    )
  };

  const renderMaterial = (field: FormListFieldData, materialForm: MaterialCheckInput, materialTypeName: string) => {
    return (
      <div key={field.fieldKey}>
        <Row>
          <Col span={18}><p>{materialTypeName}</p></Col>
          <Col span={3}><p>{materialForm.amount}</p></Col>
          <Col span={3}>
            <Form.Item
              {...field}
              name={[field.name, 'check']}
              fieldKey={[field.fieldKey, 'check']}
              valuePropName="checked"
            >
              <Checkbox />
            </Form.Item>
          </Col>
        </Row>
      </div>
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