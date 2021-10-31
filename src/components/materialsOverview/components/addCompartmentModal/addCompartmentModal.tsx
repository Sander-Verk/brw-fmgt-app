import { useMutation } from '@apollo/client';
import { Button, Form, Input, Modal } from 'antd';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { MUTATION_CREATE_COMPARTMENT } from './mutation';
import './styles.scss';

interface Props {
  truckId: string;
}

const AddCompartmentModal: React.FC<Props> = ({ truckId }) => {
  const { t } = useTranslation();
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [form] = Form.useForm();
  const [createCompartment] = useMutation(MUTATION_CREATE_COMPARTMENT);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const onFinish = async (values: any) => {
    const result = await createCompartment({ variables: {
      truckId,
      compartment: {
        code: values.code,
        name: values.name
      }
    }});
    if (result.data) {
      setIsModalVisible(false);
    }
  };

  const handleCancel = () => {
    form.resetFields();
    setIsModalVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        {t('addCompartmentModal.openBtn')}
      </Button>
      <Modal title={t('addCompartmentModal.openBtn')} visible={isModalVisible} onOk={form.submit} onCancel={handleCancel} cancelText={t('btn.cancel')} okText={t('btn.save')}>
        <Form
          form={form}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label="Code"
            name="code"
            rules={[{ required: true, message: 'This field is required' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: 'This field is required' }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default AddCompartmentModal;