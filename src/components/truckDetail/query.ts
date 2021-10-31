import { gql } from "@apollo/client";

export const QUERY_GET_TRUCK = gql`
  query GetTruck($id: ID!) {
    truck(id: $id) {
      id
      code
      name
      compartments {
        id
        code
        name
        sections {
          id
          name
          imageUrl
          materials {
            id
            type {
              code
              name
              description
              codeFiche
            }
            serial
            date
          }
        }
      }
    }
  }
`;