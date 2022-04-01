import { gql } from "@apollo/client";

export const QUERY_LOGBOOK_ITEM = gql`
  query GetLogbookItem($id: ID!){
  logbookItem(id: $id) {
      __typename
      ... on ProblemReport {
        id
        truck { id, name, code }
        user { id, name }
        createdAt
        type
        issues {
          part
          description
        }
      }
      ... on MaterialCheckReport {
        id
         truck { id, name }
        user { id, name }
        createdAt
        type
        statusHistory {
          status
          timestamp
          user { id, name }
        }
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
                name
              }
              amount
              check
              remark
            }
          }
        }
      }
  }
}
`;
