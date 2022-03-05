import { Card } from 'antd';
import { Truck } from 'generated/graphql';
import * as React from 'react';
import './styles.scss';

interface Props {
  truck: Partial<Truck>;
}

const randomIntFromInterval = (min: number, max: number) => { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const TruckCard: React.FC<Props> = ({ truck }) => {
  return (
    <Card
      hoverable
      style={{ width: 340 }}
      cover={<img alt={`Detail of ${truck.name}`} src={`https://picsum.photos/200/300?random=${randomIntFromInterval(1,100)}`} className='truckImg'/>}
    >
      <h2>{truck.code}</h2>
      <h1>{truck.name}</h1>
    </Card>
  );
};

export default TruckCard;