import { gql } from "@apollo/client";
import { MATERIAL_CHECK_REPORT_FIELDS } from "graphql/fragments/materialCheckReportFields";

export const ADD_MATERIALCHECK_UPDATE = gql`
  ${MATERIAL_CHECK_REPORT_FIELDS}
  mutation addLogbookStatusUpdate($logbookId: ID!, $status: HistoryStatus!) {
    addLogbookStatusUpdate(logbookId: $logbookId, status: $status) {
      ... on MaterialCheckReport {
        ... MaterialCheckReportFields
      }
    }
  }
`;
