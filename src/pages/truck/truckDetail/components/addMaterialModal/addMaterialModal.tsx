import { PlusCircleOutlined } from '@ant-design/icons';
import { useMutation } from '@apollo/client';
import { DatePicker, Form, Input, Modal, Select } from 'antd';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useGetMaterialTypesQuery } from 'generated/graphql';
import ErrorMessage from 'components/errorMessage/errorMessage';
import { MUTATION_CREATE_MATERIAL_WITH_TRUCK } from './mutation';
import './styles.scss';

interface Props {
  truckId: string;
  compartmentId: string;
  sectionId: string;
}

const AddMaterialModal: React.FC<Props> = ({ truckId, compartmentId, sectionId }) => {
  const { t } = useTranslation();
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [graphqlError, setGraphqlError] = React.useState<string>();
  const [form] = Form.useForm();
  const { data } = useGetMaterialTypesQuery();
  const [createMaterial] = useMutation(MUTATION_CREATE_MATERIAL_WITH_TRUCK);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const onFinish = async (values: any) => {
    try {
      const result = await createMaterial({
        variables: {
          truckId,
          compartmentId,
          sectionId,
          material: {
            materialTypeId: values.materialTypeId,
            serial: values.serial,
            date: values.date && values.date.toISOString()
          }
        }
      });
      if (result.data) {
        form.resetFields();
        handleReset();
      }
    } catch (error: any) {
      setGraphqlError(error.message);
    }
  };

  const handleReset = () => {
    form.resetFields();
    setGraphqlError(undefined);
    setIsModalVisible(false);
  };

  return (
    <>
      <div onClick={showModal} style={{cursor: 'pointer' }}>
        <PlusCircleOutlined /> {t('addMaterialModal.openBtn')}
      </div>
      <Modal title={t('addMaterialModal.title')} visible={isModalVisible} onOk={form.submit} onCancel={handleReset} cancelText={t('btn.cancel')} okText={t('btn.save')}>
        {graphqlError && (
          <ErrorMessage message={graphqlError}></ErrorMessage>
        )}
        <Form
          form={form}
          onFinish={onFinish}
          autoComplete="off"
          requiredMark={"optional"}
        >
          <Form.Item
            label="Material type"
            name="materialTypeId"
            rules={[{ required: true, message: 'This field is required' }]}>
            <Select>
              {data && data.materialTypes?.items?.length && data.materialTypes.items.map(m => (
                <Select.Option value={m.id} key={m.id}>{m.name}</Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            label="Serial number"
            name="serial"
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Date"
            name="date"
          >
            <DatePicker />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default AddMaterialModal;