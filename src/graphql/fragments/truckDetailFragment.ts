import { gql } from "@apollo/client";

export const TRUCK_DETAIL_FRAGMENT = gql`
  fragment TruckDetailFragment on Truck {
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
            id
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
`;
