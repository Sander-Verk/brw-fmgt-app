import { useMutation } from "@apollo/client";
import { Button, Form, Input, Modal } from "antd";
import * as React from "react";
import { useTranslation } from "react-i18next";
import ErrorMessage from "components/errorMessage/errorMessage";
import "./styles.scss";
import { MUTATION_CREATE_SECTION } from "graphql/mutations/createSection";
import { PlusCircleOutlined } from "@ant-design/icons";

interface Props {
  truckId: string;
  compartmentId: string;
}

const AddSectionModal: React.FC<Props> = ({ truckId, compartmentId }) => {
  const { t } = useTranslation();
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [graphqlError, setGraphqlError] = React.useState<string>();
  const [form] = Form.useForm();
  const [createSection] = useMutation(MUTATION_CREATE_SECTION);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const onFinish = async (values: any) => {
    try {
      const result = await createSection({
        variables: {
          truckId,
          compartmentId,
          section: {
            name: values.name,
            imageUrl: values.imageUrl
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
      <div>
        <Button
          ghost
          className='addSection-btn'
          onClick={event => {
            event.stopPropagation();
            showModal();
          }}
        >
          <PlusCircleOutlined />
          {t("addSectionModal.openBtn")}
        </Button>
      </div>
      <Modal title={t("addSectionModal.title")} visible={isModalVisible} onOk={form.submit} onCancel={handleReset} cancelText={t("btn.cancel")} okText={t("btn.save")}>
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
            label="Name"
            name="name"
            rules={[{ required: true, message: "This field is required" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Image URL"
            name="imageUrl"
            rules={[{ required: true, message: "This field is required" }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default AddSectionModal;