import { Compartment } from 'generated/graphql';
import * as React from 'react';
import CompartmentBlock from './components/compartmentBlock/compartmentBlock';
import './styles.scss';

interface Props {
  compartments: Compartment[];
}

const CompartmentList: React.FC<Props> = ({ compartments }) => {
  const sort = (array: any[]): any[] => {
    return [...array].sort((a, b) => a.code > b.code ? 1 : -1);
  }

  return (
    <>
      {sort(compartments).map((compartment) => (
        <div className='compartment-block' key={compartment.code}>
          <CompartmentBlock compartment={compartment} />
        </div>
      ))}
    </>
  )
};

export default CompartmentList;