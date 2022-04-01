import { gql } from "@apollo/client";
import { TRUCK_DETAIL_FRAGMENT } from "graphql/fragments/truckDetailFragment";

export const MUTATION_CREATE_MATERIAL_WITH_TRUCK = gql`
  ${TRUCK_DETAIL_FRAGMENT}
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
      ...TruckDetailFragment
    }
  }
`;
