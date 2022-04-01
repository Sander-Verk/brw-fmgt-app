import { gql } from "@apollo/client";
import { TRUCK_DETAIL_FRAGMENT } from "graphql/fragments/truckDetailFragment";

export const MUTATION_CREATE_COMPARTMENT = gql`
  ${TRUCK_DETAIL_FRAGMENT}
  mutation CreateCompartment($truckId: ID!, $compartment: CreateCompartmentInput!){
    createCompartment(
      truckId: $truckId
      compartment: $compartment
    ) {
      ...TruckDetailFragment
    }
  }
`;
