import { gql } from "@apollo/client";

export const QUERY_GET_TRUCKS = gql`
  query GetTrucks{
    trucks {
      count
      items {
        id
        code
        name
      }
    }
  }
`;
