import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Col, Form, Input, Row, Space } from "antd";
import AppButton from "components/appButton/appButton";
import * as React from "react";
import "./styles.scss";

interface Props {
}

const ProblemReportForm: React.FC<Props> = () => {
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
                    name={[field.name, "part"]}
                    fieldKey={[field.fieldKey, "part"]}
                    rules={[{ required: true, message: "This field is required" }]}
                  >
                    <Input />
                  </Form.Item>

                  <Form.Item
                    {...field}
                    label="Description"
                    name={[field.name, "description"]}
                    fieldKey={[field.fieldKey, "description"]}
                    rules={[{ required: true, message: "This field is required" }]}
                  >
                    <Input />
                  </Form.Item>

                  <MinusCircleOutlined onClick={() => remove(field.name)} />
                </Space>
              </Col>
            ))}

            <Col span={12} offset={6}>
              <Form.Item>
                <AppButton text="problemReportForm.addProblem" type="dashed" onClick={add} block icon={<PlusOutlined />} />
              </Form.Item>
            </Col>
          </>
        )}
      </Form.List>
    </Row>
  );
};

export default ProblemReportForm;