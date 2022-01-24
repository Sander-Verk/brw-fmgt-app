import { useMutation } from '@apollo/client';
import { Button, Form, Input, Modal } from 'antd';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import ErrorMessage from 'components/errorMessage/errorMessage';
import { MUTATION_CREATE_MATERIALTYPE } from './mutation';
import './styles.scss';

interface Props {
}

const AddMaterialTypeModal: React.FC<Props> = () => {
  const { t } = useTranslation();
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [graphqlError, setGraphqlError] = React.useState<string>();
  const [form] = Form.useForm();
  const [creatematerialType] = useMutation(MUTATION_CREATE_MATERIALTYPE);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const onFinish = async (values: any) => {
    try {
      const result = await creatematerialType({ variables: {
        materialType: {
          code: values.code,
          name: values.name,
          description: values.description,
          codeFiche: values.codeFiche
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
        {t('addMaterialTypeModal.openBtn')}
      </Button>
      <Modal title={t('addMaterialTypeModal.title')} visible={isModalVisible} onOk={form.submit} onCancel={handleReset} cancelText={t('btn.cancel')} okText={t('btn.save')}>
        { graphqlError && (
          <ErrorMessage message={graphqlError}></ErrorMessage>
        )}
        <Form
          form={form}
          onFinish={onFinish}
          autoComplete="off"
          requiredMark={"optional"}
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

          <Form.Item
            label="Description"
            name="description"
            rules={[{ required: true, message: 'This field is required' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Code fiche"
            name="codeFiche"
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default AddMaterialTypeModal;