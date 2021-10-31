import { useMutation } from '@apollo/client';
import { Button, Form, Input, Modal } from 'antd';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import ErrorMessage from '../../../errorMessage/errorMessage';
import { MUTATION_CREATE_COMPARTMENT } from './mutation';
import './styles.scss';

interface Props {
  truckId: string;
}

const AddCompartmentModal: React.FC<Props> = ({ truckId }) => {
  const { t } = useTranslation();
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [graphqlError, setGraphqlError] = React.useState<string>();
  const [form] = Form.useForm();
  const [createCompartment] = useMutation(MUTATION_CREATE_COMPARTMENT);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const onFinish = async (values: any) => {
    try {
      const result = await createCompartment({ variables: {
        truckId,
        compartment: {
          code: values.code,
          name: values.name
        }
      }});
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
      <Button type="primary" onClick={showModal}>
        {t('addCompartmentModal.openBtn')}
      </Button>
      <Modal title={t('addCompartmentModal.openBtn')} visible={isModalVisible} onOk={form.submit} onCancel={handleReset} cancelText={t('btn.cancel')} okText={t('btn.save')}>
        { graphqlError && (
          <ErrorMessage message={graphqlError}></ErrorMessage>
        )}
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