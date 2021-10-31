import { gql } from "@apollo/client";

export const QUERY_GET_MATERIALS = gql`
  query getMaterials {
    materials(filter: {}) {
      count
      items {
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
`;
