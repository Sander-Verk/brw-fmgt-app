import { gql } from "@apollo/client";

export const MUTATION_CREATE_COMPARTMENT = gql`
  mutation CreateCompartment($truckId: ID!, $compartment: CreateCompartmentInput!){
    createCompartment(
      truckId: $truckId
      compartment: $compartment
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
