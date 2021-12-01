import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, Row, Select, Space } from 'antd';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { GetTrucksQuery } from '../../../../generated/graphql';
import './styles.scss';

const { Option } = Select;

interface Props {
  trucks: GetTrucksQuery;
}

const ProblemReportForm: React.FC<Props> = ({ trucks }) => {
  const { t } = useTranslation();
  const [form] = Form.useForm();


  const onFinish = async (values: any) => {
    console.log(values);
  };

  return (
    <>
      <Form
        form={form}
        onFinish={onFinish}
        autoComplete="off"
        requiredMark={"optional"}
      >
        <Row>
          <Col span={12} offset={6}>
            <Form.Item name="truckId" rules={[{ required: true, message: 'This field is required' }]}>
              <Select
                showSearch
                style={{ width: '100%' }}
                placeholder={t("problemReportForm.truck.placeholder")}
                filterOption={(input: any, option: any) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
              >
                {trucks && trucks?.trucks?.items && trucks?.trucks?.items.map((truck) => <Option value={truck.id} key={truck.id}>{truck.code} - {truck.name}</Option>)}
              </Select>
            </Form.Item>
          </Col>
        </Row>

        <Row>
          <Form.List name="issues">
            {(fields, { add, remove }) => (
              <>
                {fields.map(field => (
                  <Col span={12} offset={6}>
                    <Space key={field.key} align="baseline">
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
                      Add problem
                    </Button>
                  </Form.Item>
                </Col>
              </>
            )}
          </Form.List>
        </Row>
      </Form>

      <Button type="primary" onClick={form.submit}>
        {t('problemReportForm.save')}
      </Button>
    </>
  );
};

export default ProblemReportForm;