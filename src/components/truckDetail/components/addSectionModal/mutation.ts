import { gql } from "@apollo/client";

export const MUTATION_CREATE_SECTION = gql`
  mutation CreateSection($truckId: ID!, $compartmentId: ID!, $section: CreateSectionInput!){
    createSection(
      truckId: $truckId
      compartmentId: $compartmentId
      section: $section
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
