import { gql } from "@apollo/client";

export const QUERY_GET_MATERIALS = gql`
  query getMaterials{
  materials (
    filter: {
    }
  ) {
    count
    items {
      id
      code
      name
      description
      serial
      codeFiche
      date
    }
  }
}

`;
