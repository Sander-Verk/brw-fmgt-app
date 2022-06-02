import { gql } from "@apollo/client";

export const QUERY_GET_MATERIALTYPES = gql`
  query getMaterialTypes($filter: MaterialTypeFilterInput, $skip: Int, $limit: Int) {
    materialTypes(filter: $filter, skip: $skip, limit: $limit) {
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
