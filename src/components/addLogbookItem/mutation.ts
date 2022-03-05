import { gql } from "@apollo/client";

export const MUTATION_CREATE_MATERIAL_CHECK = gql`
  mutation CreateMaterialCheck(
    $materialCheck: MaterialCheckReportInput!
  ) {
    createMaterialCheck(
      materialCheck: $materialCheck
    ) {
      id
      truck {
        id
        name
      }
      user { id, name }
      createdAt
      type
      checks {
        id
        code
        name
        sections {
          id
          name
          materials {
            materialType {
              id
            }
            amount
            check
            remark
          }
        }
      }
    }
  }
`;
