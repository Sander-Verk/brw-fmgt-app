import { CheckCircleFilled, CloseCircleFilled } from "@ant-design/icons";
import { Card, Tabs, Timeline, Form, Select, Button, Divider } from "antd";
import * as React from "react";
import { useTranslation } from "react-i18next";
import { CompartmentCheck, HistoryStatus, MaterialCheck, SectionCheck, StatusHistoryItem } from "graphql/schema";
import "./styles.scss";
import Moment from "react-moment";
import { useMutation } from "@apollo/client";
import AppTable from "components/appTable/appTable";
import { ADD_MATERIALCHECK_UPDATE } from "graphql/mutations/addLogbookStatusUpdate";

const { TabPane } = Tabs;
const { Option } = Select;

interface Props {
  id: string;
  materialChecks: CompartmentCheck[];
  history: StatusHistoryItem[];
}

const sort = (array: any[]): any[] => {
  return [...array].sort((a, b) => a.code > b.code ? 1 : -1);
};

const columns = [
  {
    title: "Material",
    dataIndex: "materialTypeName",
    key: "materialTypeName",
  },
  {
    title: "Amount",
    dataIndex: "amount",
    key: "amount",
  },
  {
    title: "Check",
    dataIndex: "check",
    key: "check",
    render: (check: boolean) => {
      return check ?
        <CheckCircleFilled className="successIcon" /> :
        <CloseCircleFilled className="errorIcon" />;
    }
  },
];

const MaterialCheckReport: React.FC<Props> = ({ id, materialChecks, history }) => {
  const { t } = useTranslation();
  const [addMaterialCheckUpdate] = useMutation(ADD_MATERIALCHECK_UPDATE);
  const [form] = Form.useForm();

  const renderCompartment = (compartment: CompartmentCheck) => (compartment && compartment.id &&
    <Card key={"comparment_" + compartment.id} className="compartment">
      <h2>{compartment.name}</h2>

      {compartment.sections && compartment.sections.length ?
        compartment.sections.map((section) => renderSection(section)) :
        <div>{t("truckDetail.noSection")}</div>}
    </Card>);

  const renderSection = (section: SectionCheck) => {
    return (section && section.id &&
      <div key={"section_" + section.id} className="section">
        <h3>{section.name}</h3>

        <AppTable
          dataSource={section.materials.map(m => ({ materialTypeName: m.materialType.name, amount: m.amount, check: m.check }))}
          columns={columns}
          pagination={false}
          showHeader={false}
        />
      </div>);
  };

  const renderHistoryItem = (historyItem: StatusHistoryItem) => {
    return (
      <Timeline.Item>
        <p className='timeLineTitle'>{historyItem.status}</p>
        <p>{historyItem.user.name} op <Moment format="HH:mm:ss">{historyItem.timestamp}</Moment></p>
      </Timeline.Item>
    );
  };

  const onFinish = async (values: any) => {
    await addMaterialCheckUpdate({
      variables: {
        logbookId: id,
        status: values.status
      }
    });

    form.resetFields();
  };

  const renderRecap = (compartments: CompartmentCheck[]) => {
    const materials: MaterialCheck[] = [];
    compartments.forEach(compartment => {
      compartment.sections.forEach(section => {
        section.materials.forEach(material => {
          if (!material.check) {
            materials.push(material);
          }
        });
      });
    });

    return (
      <AppTable
        dataSource={materials.map(m => ({ materialTypeName: m.materialType.name, amount: m.amount, check: m.check }))}
        columns={columns}
        pagination={false}
        showHeader={false}
      />
    );
  };

  return (
    <Tabs defaultActiveKey="1">
      <TabPane tab="Overview" key="1">
        <Timeline>
          {history?.map((historyItem) => renderHistoryItem(historyItem))}
          <Timeline.Item>
            <Form
              form={form}
              onFinish={onFinish}
              autoComplete="off"
              requiredMark={"optional"}
            >
              <div>
                <Form.Item
                  label="Status"
                  name="status"
                  rules={[{ required: true, message: "This field is required" }]}
                >
                  <Select
                    showSearch
                    
                    filterOption={(input: any, option: any) =>
                      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                  >
                    {Object.keys(HistoryStatus).map((status) => <Option value={status.toUpperCase()} key={status}>{status}</Option>)}
                  </Select>
                </Form.Item>
                <Button type="primary" onClick={form.submit}>
                  {t("problemReportForm.save")}
                </Button>
              </div>
            </Form>
          </Timeline.Item>
        </Timeline>

        <Divider></Divider>

        <h3>{t("logbookItemDetail.material_check.recap")}</h3>

        { renderRecap(materialChecks) }
      </TabPane>
      <TabPane tab="Detail" key="2">
        {sort(materialChecks).map((compartment) => renderCompartment(compartment))}
      </TabPane>
    </Tabs>
  );
};

export default MaterialCheckReport;