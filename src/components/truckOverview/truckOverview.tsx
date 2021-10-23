import * as React from 'react';
import { GetTrucksQuery, Truck } from '../../generated/graphql';
import './styles.scss';

interface Props {
  data: GetTrucksQuery;
}

const className = 'TruckOverview';

const TruckOverview: React.FC<Props> = ({ data }) => (
  <div className={className}>
    <h3>Trucks</h3>
    <ol className={`${className}__list`}>
      {!!data.trucks &&
        data.trucks.items.map(
          (truck: Partial<Truck>, i: number) =>
            !!truck && (
              <li key={i} className={`${className}__item`}>
                {truck.name} - ({truck.code})
              </li>
            ),
        )}
    </ol>
  </div>
);

export default TruckOverview;