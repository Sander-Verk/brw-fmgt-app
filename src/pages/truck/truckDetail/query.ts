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
          imageSize {
            width
            height
          }
          materials {
            id
            type {
              id
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
