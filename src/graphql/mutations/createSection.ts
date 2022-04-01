import { gql } from "@apollo/client";
import { TRUCK_DETAIL_FRAGMENT } from "graphql/fragments/truckDetailFragment";

export const MUTATION_CREATE_SECTION = gql`
 ${TRUCK_DETAIL_FRAGMENT}
  mutation CreateSection($truckId: ID!, $compartmentId: ID!, $section: CreateSectionInput!){
    createSection(
      truckId: $truckId
      compartmentId: $compartmentId
      section: $section
    ) {
      ...TruckDetailFragment
    }
  }
`;
