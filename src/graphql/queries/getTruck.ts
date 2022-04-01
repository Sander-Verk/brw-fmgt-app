import { gql } from "@apollo/client";
import { TRUCK_DETAIL_FRAGMENT } from "graphql/fragments/truckDetailFragment";

export const QUERY_GET_TRUCK = gql`
  ${TRUCK_DETAIL_FRAGMENT}
  query GetTruck($id: ID!) {
    truck(id: $id) {
      ...TruckDetailFragment
    }
  }
`;
