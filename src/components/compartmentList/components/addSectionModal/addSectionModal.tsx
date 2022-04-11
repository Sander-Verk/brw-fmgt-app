import { useMutation } from "@apollo/client";
import { Form, Input, Modal } from "antd";
import * as React from "react";
import { useTranslation } from "react-i18next";
import ErrorMessage from "components/errorMessage/errorMessage";
import "./styles.scss";
import { MUTATION_CREATE_SECTION } from "graphql/mutations/createSection";
import { PlusCircleOutlined } from "@ant-design/icons";
import AppButton from "components/appButton/appButton";

interface Props {
  truckId: string;
  compartmentId: string;
  onChange: (isOpen: boolean) => void
}

const AddSectionModal: React.FC<Props> = ({ truckId, compartmentId, onChange }) => {
  const { t } = useTranslation();
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [graphqlError, setGraphqlError] = React.useState<string>();
  const [form] = Form.useForm();
  const [createSection] = useMutation(MUTATION_CREATE_SECTION);

  const showModal = () => {
    setIsModalVisible(true);
    onChange(true);
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
    onChange(false);
  };

  return (
    <>
      <div className="addSection-btn">
        <AppButton
          type="ghost"
          text="addSectionModal.openBtn"
          icon={<PlusCircleOutlined />}
          onClick={event => {
            showModal();
            event.stopPropagation();
          }}
        />
      </div>

      <Modal
        title={t("addSectionModal.title")}
        visible={isModalVisible}
        onOk={form.submit}
        onCancel={handleReset}
        cancelText={t("btn.cancel")}
        okText={t("btn.save")}
        maskClosable={false}>
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