import { gql } from "@apollo/client";

export const MUTATION_CREATE_MATERIALTYPE = gql`
  mutation CreateMaterialType($materialType: CreateMaterialTypeInput!) {
    createMaterialType(materialType: $materialType) {
      id
      code
      name
      description
      codeFiche
    }
  }
`;
