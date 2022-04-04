import { DatePicker, Form, Select } from "antd";
import TruckSelector from "components/truckSelector/truckSelector";
import { HistoryStatus, LogbookFilterInput, LogBookItemType } from "graphql/schema";
import { Moment } from "moment";
import * as React from "react";
import { useTranslation } from "react-i18next";
import "./styles.scss";

const { RangePicker } = DatePicker;
const { Option } = Select;

interface Props {
  onChange: (filters: LogbookFilterInput) => void
}

const LogbookFilter: React.FC<Props> = ({ onChange }) => {
  const { t } = useTranslation();
  const [form] = Form.useForm();

  const onValuesChange = (values: any, info: { truckIds: string[]; date: Moment[], status: HistoryStatus[], types: LogBookItemType[]}) => {
    onChange({
      truckIds: info.truckIds,
      from: info.date && info.date[0]?.toISOString(),
      to: info.date && info.date[1]?.toISOString(),
      status: info.status,
      types: info.types,
    });
  };

  return (
    <section className="logbook-filter">
      <Form
        className="filter-form"
        layout="vertical"
        form={form}
        onValuesChange={onValuesChange}
      >
        <Form.Item label={t("logbookOverview.truck")} name="truckIds">
          <TruckSelector />
        </Form.Item>

        <Form.Item label={t("logbookOverview.period")} name="date">
          <RangePicker />
        </Form.Item>

        <Form.Item label={t("logbookOverview.status")} name="status">
          <Select mode="multiple" placeholder={t("logbookOverview.status")} style={{minWidth: 200}}>
            { Object.values(HistoryStatus).map(status => {
              return (<Option value={status} key={status}>{t(`historyStatus.${status.toLowerCase()}`)}</Option>);
            }) }
          </Select>
        </Form.Item>

        <Form.Item label={t("logbookOverview.types")} name="types">
          <Select mode="multiple" placeholder={t("logbookOverview.types")} style={{minWidth: 200}}>
            { Object.values(LogBookItemType).map(type => {
              return (<Option value={type} key={type}>{t(`logbookItemType.${type.toLowerCase()}`)}</Option>);
            }) }
          </Select>
        </Form.Item>
      </Form>
    </section>
  );
};

export default LogbookFilter;