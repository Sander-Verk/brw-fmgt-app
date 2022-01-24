import { gql } from "@apollo/client";

export const QUERY_GET_MATERIALTYPES = gql`
  query getMaterialTypes {
    materialTypes(filter: {}) {
      count
      items {
        id
        code
        name
        description
        codeFiche
      }
    }
  }
`;
