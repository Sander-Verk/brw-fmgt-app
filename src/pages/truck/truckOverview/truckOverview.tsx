import { Col, Row } from 'antd';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { GetTrucksQuery, Truck } from 'generated/graphql';
import './styles.scss';
import TruckCard from 'components/truckCard/truckCard';

interface Props {
  data: GetTrucksQuery;
}

const className = 'TruckOverview';

const TruckOverview: React.FC<Props> = ({ data }) => {
  return (
    <div className={className}>
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
    </div>
  )
};

export default TruckOverview;