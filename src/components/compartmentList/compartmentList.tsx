import { Compartment } from "graphql/schema";
import * as React from "react";
import CompartmentBlock from "./components/compartmentBlock/compartmentBlock";
import "./styles.scss";

interface Props {
  truckId: string;
  compartments: Compartment[];
}

const CompartmentList: React.FC<Props> = ({ truckId, compartments }) => {
  const sort = (array: any[]): any[] => {
    return [...array].sort((a, b) => a.code > b.code ? 1 : -1);
  };

  return (
    <>
      {sort(compartments).map((compartment) => (
        <div className='compartment-block' key={compartment.code}>
          <CompartmentBlock truckId={truckId} compartment={compartment} />
        </div>
      ))}
    </>
  );
};

export default CompartmentList;