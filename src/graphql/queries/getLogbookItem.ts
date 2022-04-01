import { gql } from "@apollo/client";
import { MATERIAL_CHECK_REPORT_FIELDS } from "graphql/fragments/materialCheckReportFields";

export const QUERY_LOGBOOK_ITEM = gql`
  ${MATERIAL_CHECK_REPORT_FIELDS}
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
        ... MaterialCheckReportFields
      }
  }
}
`;
