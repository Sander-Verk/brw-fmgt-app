import { Select } from "antd";
import { Truck, useGetTrucksQuery } from "graphql/schema";
import * as React from "react";
import { useTranslation } from "react-i18next";
import "./styles.scss";

const { Option } = Select;

interface Props {
  onChange?: (ids: string[]) => void
}

const TruckSelector: React.FC<Props> = ({ onChange }) => {
  const { t } = useTranslation();
  const { data, loading } = useGetTrucksQuery();

  const renderOption = (truck: Partial<Truck>, index: number) => {
    return <Option value={truck.id || ""} key={`truckSelector-${index}`}>{truck.code} {truck.name}</Option>;
  };

  return (
    <Select
      loading={loading}
      placeholder={t("truckselector.placeholder")}
      mode="multiple"
      style={{minWidth: 200}}
      filterOption={(input, option) => option?.children?.some((value: string) => value.toLowerCase().includes(input.toLowerCase()))}
      onChange={onChange}
    >
      { data && data?.trucks.items.length && data?.trucks.items.map(renderOption)}
    </Select>
  );
};

export default TruckSelector;