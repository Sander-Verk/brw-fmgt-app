import { Card, Col, Row } from 'antd';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { GetTrucksQuery, Truck } from 'generated/graphql';
import './styles.scss';

interface Props {
  data: GetTrucksQuery;
}

const className = 'TruckOverview';

const TruckOverview: React.FC<Props> = ({ data }) => {
  const { t } = useTranslation();

  return (
    <div className={className}>
      <h1>{t("truckOverview.title")}</h1>

      <Row gutter={[16, 16]}>
        {!!data.trucks &&
          data.trucks.items.map(
            (truck: Partial<Truck>, i: number) =>
              !!truck && !!truck.id && (
                <Col key={i}>
                  <Link to={"trucks/" + truck.id}>
                    <Card
                      title={`${truck.name} - (${truck.code})`}
                      bodyStyle={{ display: 'none' }}
                      hoverable
                      cover={<img alt="example" src="https://place-hold.it/300" />}
                    />
                  </Link>
                </Col>
              ),
          )}
      </Row>
    </div>
  )
};

export default TruckOverview;