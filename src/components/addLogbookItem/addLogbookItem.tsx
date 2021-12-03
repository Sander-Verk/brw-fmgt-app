import { Button, Col, Form, Row, Select } from 'antd';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { GetTrucksQuery, LogBookItemType } from '../../generated/graphql';
import MaterialCheckForm from './components/materialCheckForm/materialCheckForm';
import ProblemReportForm from './components/problemReportForm/problemReportForm';
import './styles.scss';

const { Option } = Select;

interface Props {
  trucks: GetTrucksQuery;
  type?: string;
}
const className = 'AddLogbookItem';

const AddLogbookItem: React.FC<Props> = ({ trucks, type = LogBookItemType.MaterialCheck }) => {
  const { t } = useTranslation();
  const [selectedTruckId, setSelectedTruckId] = React.useState<string>();
  const [form] = Form.useForm();

  const onFinish = async (values: any) => {
    console.log(values);
  };

  const onChange = (value: string) => {
    setSelectedTruckId(value);
  }

  return (
    <div className={className}>
      <div className="pageHeader">
        <h1>{t("addLogbookItem.title")}</h1>
      </div>

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
                onChange={onChange}
              >
                {trucks && trucks?.trucks?.items && trucks?.trucks?.items.map((truck) => <Option value={truck.id} key={truck.id}>{truck.code} - {truck.name}</Option>)}
              </Select>
            </Form.Item>
          </Col>
        </Row>

        {type === LogBookItemType.ProblemReport && (
          <ProblemReportForm></ProblemReportForm>
        )}

        {type === LogBookItemType.MaterialCheck && selectedTruckId && (
          <MaterialCheckForm truckId={selectedTruckId} form={form}></MaterialCheckForm>
        )}
      </Form>

      <Button type="primary" onClick={form.submit}>
        {t('problemReportForm.save')}
      </Button>
    </div>
  )
};

export default AddLogbookItem;