import { gql } from "@apollo/client";

export const MUTATION_CREATE_MATERIAL_WITH_TRUCK = gql`
  mutation CreateMaterialWithTruck(
    $truckId: ID!
    $compartmentId: ID!
    $sectionId: ID!
    $material: CreateMaterialInput!
  ) {
    createMaterialWithTruck(
      truckId: $truckId
      compartmentId: $compartmentId
      sectionId: $sectionId
      material: $material
    ) {
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
