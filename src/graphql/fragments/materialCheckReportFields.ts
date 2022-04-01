import { gql } from "@apollo/client";

export const MATERIAL_CHECK_REPORT_FIELDS = gql`
  fragment MaterialCheckReportFields on MaterialCheckReport {
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
`;
