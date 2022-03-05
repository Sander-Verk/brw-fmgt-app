import { gql } from "@apollo/client";

export const ADD_MATERIALCHECK_UPDATE = gql`
  mutation addLogbookStatusUpdate($logbookId: ID!, $status: HistoryStatus!) {
    addLogbookStatusUpdate(logbookId: $logbookId, status: $status) {
      ... on MaterialCheckReport {
        id
        truck {
          id
          name
        }
        user {
          id
          name
        }
        createdAt
        type
        statusHistory {
          status
          timestamp
          user {
            id
            name
          }
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
