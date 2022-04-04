import { Col, Input, Row } from "antd";
import * as React from "react";
import { Link } from "react-router-dom";
import { GetTrucksQuery, Truck, TruckFilterInput } from "graphql/schema";
import "./styles.scss";
import TruckCard from "components/truckCard/truckCard";
import { SearchOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import LoadingContainer from "components/loader";

interface Props {
  data: GetTrucksQuery;
  loading: boolean;
  onFilterChange: (filter: TruckFilterInput) => void
}

const className = "TruckOverview";

const TruckOverview: React.FC<Props> = ({ data, loading, onFilterChange }) => {
  const { t } = useTranslation();

  const onSearchChange = (value: React.ChangeEvent<HTMLInputElement>) => {
    onFilterChange({ search: value.target.value });
  };

  return (
    <div className={className}>
      <section className="filter-section">
        <Input className="search-box" size="large" placeholder={t("search")} prefix={<SearchOutlined />} onChange={onSearchChange} />
      </section>

      {loading ?
        <LoadingContainer></LoadingContainer> :
        (
          <Row gutter={[32, 32]}>
            {!!data.trucks &&
              data.trucks.items.map(
                (truck: Partial<Truck>, i: number) =>
                  !!truck && !!truck.id && (
                    <Col key={i}>
                      <Link to={"trucks/" + truck.id}>
                        <TruckCard truck={truck} />
                      </Link>
                    </Col>
                  ),
              )}
          </Row>
        )
      }
    </div>
  );
};

export default TruckOverview;