import { gql } from "@apollo/client";

export const QUERY_LOGBOOK_ITEM = gql`
  query GetLogbookItem($id: ID!){
  logbookItem(id: $id) {
      __typename
      ... on ProblemReport {
        id
        truck { id, name}
        user
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
        user
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
