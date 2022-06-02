import { useMutation } from "@apollo/client";
import { Col, Form, Row, Select } from "antd";
import * as React from "react";
import { useTranslation } from "react-i18next";
import { useHistory, useLocation } from "react-router-dom";
import { GetTrucksQuery, LogBookItemType } from "graphql/schema";
import ErrorMessage from "../errorMessage/errorMessage";
import MaterialCheckForm from "./components/materialCheckForm/materialCheckForm";
import ProblemReportForm from "./components/problemReportForm/problemReportForm";
import "./styles.scss";
import { MUTATION_CREATE_MATERIAL_CHECK } from "graphql/mutations/createMaterialCheck";
import AppButton from "components/appButton/appButton";

const { Option } = Select;

interface Props {
  trucks: GetTrucksQuery;
  type?: string;
}
const className = "AddLogbookItem";

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

const AddLogbookItem: React.FC<Props> = ({ trucks, type = LogBookItemType.MaterialCheck }) => {
  const { t } = useTranslation();
  const history = useHistory();
  const query = useQuery();
  const [selectedTruckId, setSelectedTruckId] = React.useState<string>(query.get("truckId") || "");
  const [graphqlError, setGraphqlError] = React.useState<string>();
  const [creatematerialCheck] = useMutation(MUTATION_CREATE_MATERIAL_CHECK);
  const [form] = Form.useForm();

  const onFinish = async (values: any) => {
    if (type === LogBookItemType.MaterialCheck) {
      try {
        const result = await creatematerialCheck({
          variables: {
            materialCheck: values
          }
        });

        if (result.data) {
          form.resetFields();
          history.push(`/logbook/${result.data.createMaterialCheck.id}`);
        }
      } catch (error: any) {
        setGraphqlError(error.message);
      }
    }
  };

  const onChange = (value: string) => {
    setSelectedTruckId(value);
  };

  return (
    <div className={className}>
      {graphqlError && (
        <ErrorMessage message={graphqlError}></ErrorMessage>
      )}

      <div className="pageHeader">
        <h1>{t(`addLogbookItem.${type.toLowerCase()}.title`)}</h1>
      </div>

      <Form
        form={form}
        onFinish={onFinish}
        autoComplete="off"
        requiredMark={"optional"}
      >
        <Row gutter={[16, 16]}>
          <Col span={12} offset={6}>
            <Form.Item name="truckId" rules={[{ required: true, message: "This field is required" }]} initialValue={query.get("truckId") || ""}>
              { !query.get("truckId") && (
                <Select
                  showSearch
                  style={{ width: "100%" }}
                  placeholder={t("problemReportForm.truck.placeholder")}
                  filterOption={(input: any, option: any) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                  }
                  onChange={onChange}
                >
                  {trucks && trucks?.trucks?.items && trucks?.trucks?.items.map((truck) => <Option value={truck.id} key={truck.id}>{truck.code} - {truck.name}</Option>)}
                </Select>
              )}
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

      <AppButton text="problemReportForm.save" onClick={form.submit} />
    </div>
  );
};

export default AddLogbookItem;