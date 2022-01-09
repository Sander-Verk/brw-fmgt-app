import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, Row, Space } from 'antd';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import './styles.scss';

interface Props {
}

const ProblemReportForm: React.FC<Props> = () => {
  const { t } = useTranslation();

  return (
        <Row>
          <Form.List name="issues">
            {(fields, { add, remove }) => (
              <>
                {fields.map(field => (
                  <Col span={12} offset={6} key={field.fieldKey}>
                    <Space align="baseline">
                      <Form.Item
                        {...field}
                        label="Part"
                        name={[field.name, 'part']}
                        fieldKey={[field.fieldKey, 'part']}
                        rules={[{ required: true, message: 'This field is required' }]}
                      >
                        <Input />
                      </Form.Item>

                      <Form.Item
                        {...field}
                        label="Description"
                        name={[field.name, 'description']}
                        fieldKey={[field.fieldKey, 'description']}
                        rules={[{ required: true, message: 'This field is required' }]}
                      >
                        <Input />
                      </Form.Item>

                      <MinusCircleOutlined onClick={() => remove(field.name)} />
                    </Space>
                  </Col>
                ))}

                <Col span={12} offset={6}>
                  <Form.Item>
                    <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                      { t("problemReportForm.addProblem")}
                    </Button>
                  </Form.Item>
                </Col>
              </>
            )}
          </Form.List>
        </Row>
  );
}

export default ProblemReportForm;