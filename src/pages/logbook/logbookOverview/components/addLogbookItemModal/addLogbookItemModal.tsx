import { ControlOutlined, WarningOutlined } from "@ant-design/icons";
import { Card, Col, Modal, Row } from "antd";
import * as React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { LogBookItemType } from "graphql/schema";
import Translated from "components/translated/translated";
import "./styles.scss";
import AppButton from "components/appButton/appButton";

interface Props {
}

const AddLogbookItemModal: React.FC<Props> = () => {
  const { t } = useTranslation();
  const [isModalVisible, setIsModalVisible] = React.useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const hideModal = () => {
    setIsModalVisible(false);
  };


  return (
    <>
      <AppButton text="addLogbookItemModal.openBtn" onClick={showModal} />
      <Modal title={t("addLogbookItemModal.title")} visible={isModalVisible} onCancel={hideModal} cancelText={t("btn.cancel")} okButtonProps={{ hidden: true }}>
        <Row>
          <Col span={12}>
            <Link to={`/logbook/new?type=${LogBookItemType.ProblemReport}`}>
              <Card
                className="iconCard"
                hoverable
                cover={<WarningOutlined />}
              >
                <h2><Translated value={"logbookItemType." + LogBookItemType.ProblemReport.toLowerCase()} /></h2>
              </Card>
            </Link>
          </Col>
          <Col span={12}>
            <Link to={`/logbook/new?type=${LogBookItemType.MaterialCheck}`}>
              <Card
                className="iconCard"
                hoverable
                cover={<ControlOutlined />}
              >
                <h2><Translated value={"logbookItemType." + LogBookItemType.MaterialCheck.toLowerCase()} /></h2>
              </Card>
            </Link>
          </Col>
        </Row>
      </Modal>
    </>
  );
};

export default AddLogbookItemModal;