import { gql } from "@apollo/client";

export const QUERY_GET_TRUCKS = gql`
  query GetTrucks($filter: TruckFilterInput) {
    trucks(filter: $filter) {
      count
      items {
        id
        code
        name
      }
    }
  }
`;
