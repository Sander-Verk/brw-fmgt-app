import { gql } from "@apollo/client";

export const QUERY_GET_LOGBOOK = gql`
  query getLogbook {
    logbook(filter: {}) {
      count
      items {
        ... on ProblemReport {
          id
          truck { id, name }
          user
          createdAt
          type
        }
        ... on MaterialCheckReport {
          id
          truck { id, name }
          user
          createdAt
          type
        }
      }
    }
  }
`;
