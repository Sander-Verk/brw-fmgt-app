import { gql } from "@apollo/client";

export const QUERY_GET_LOGBOOK = gql`
  query getLogbook($filter: LogbookFilterInput, $skip: Int, $limit: Int) {
    logbook(filter: $filter, skip: $skip, limit: $limit) {
      count
      items {
        ... on ProblemReport {
          id
          truck { id, name, code }
          user { id, name }
          createdAt
          type
          status
        }
        ... on MaterialCheckReport {
          id
          truck { id, name, code }
          user { id, name }
          createdAt
          type
          status
        }
      }
    }
  }
`;
