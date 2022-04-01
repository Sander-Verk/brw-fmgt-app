import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type Compartment = {
  __typename?: 'Compartment';
  code: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  sections: Array<Section>;
};

export type CompartmentCheck = {
  __typename?: 'CompartmentCheck';
  code: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  sections: Array<SectionCheck>;
};

export type CompartmentCheckInput = {
  code: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  sections: Array<SectionCheckInput>;
};

export type CreateCompartmentInput = {
  code: Scalars['String'];
  name: Scalars['String'];
};

export type CreateMaterialInput = {
  date?: Maybe<Scalars['DateTime']>;
  materialTypeId: Scalars['ID'];
  serial?: Maybe<Scalars['String']>;
};

export type CreateMaterialTypeInput = {
  code: Scalars['String'];
  codeFiche?: Maybe<Scalars['String']>;
  description: Scalars['String'];
  name: Scalars['String'];
};

export type CreateSectionInput = {
  imageUrl: Scalars['String'];
  name: Scalars['String'];
};

export type CreateTruckInput = {
  code: Scalars['String'];
  name: Scalars['String'];
};

export enum HistoryStatus {
  Created = 'CREATED',
  Finished = 'FINISHED',
  Reviewed = 'REVIEWED'
}

export type ImageSize = {
  __typename?: 'ImageSize';
  height: Scalars['Int'];
  width: Scalars['Int'];
};

export enum LogBookItemType {
  MaterialCheck = 'MATERIAL_CHECK',
  ProblemReport = 'PROBLEM_REPORT'
}

export type LogbookFilterInput = {
  from?: Maybe<Scalars['DateTime']>;
  to?: Maybe<Scalars['DateTime']>;
  truckIds?: Maybe<Array<Scalars['ID']>>;
};

export type LogbookItem = MaterialCheckReport | ProblemReport;

export type LogbookResult = {
  __typename?: 'LogbookResult';
  count: Scalars['Int'];
  items: Array<LogbookItem>;
};

export type Material = {
  __typename?: 'Material';
  date?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  serial?: Maybe<Scalars['String']>;
  type: MaterialType;
};

export type MaterialCheck = {
  __typename?: 'MaterialCheck';
  amount: Scalars['Int'];
  check: Scalars['Boolean'];
  materialType: MaterialType;
  remark?: Maybe<Scalars['String']>;
};

export type MaterialCheckInput = {
  amount: Scalars['Int'];
  check: Scalars['Boolean'];
  materialTypeId: Scalars['ID'];
  remark?: Maybe<Scalars['String']>;
};

export type MaterialCheckReport = {
  __typename?: 'MaterialCheckReport';
  checks: Array<CompartmentCheck>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  statusHistory: Array<StatusHistoryItem>;
  truck: Truck;
  type: LogBookItemType;
  user: User;
};

export type MaterialCheckReportInput = {
  checks: Array<CompartmentCheckInput>;
  truckId: Scalars['ID'];
};

export type MaterialResult = {
  __typename?: 'MaterialResult';
  count: Scalars['Int'];
  items: Array<Material>;
};

export type MaterialType = {
  __typename?: 'MaterialType';
  code: Scalars['String'];
  codeFiche?: Maybe<Scalars['String']>;
  description: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type MaterialTypeFilterInput = {
  codes?: Maybe<Array<Scalars['String']>>;
  search?: Maybe<Scalars['String']>;
};

export type MaterialTypeResult = {
  __typename?: 'MaterialTypeResult';
  count: Scalars['Int'];
  items: Array<MaterialType>;
};

export type MaterialsFilterInput = {
  materialTypeId?: Maybe<Scalars['ID']>;
  search?: Maybe<Scalars['String']>;
  truckCodes?: Maybe<Array<Scalars['String']>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addLogbookStatusUpdate: LogbookItem;
  addMaterial: Truck;
  createCompartment: Truck;
  createMaterial: Material;
  createMaterialCheck: MaterialCheckReport;
  createMaterialType: MaterialType;
  createMaterialWithTruck: Truck;
  createSection: Truck;
  createTruck: Truck;
  updateMaterial: Material;
  updateMaterialType: MaterialType;
};


export type MutationAddLogbookStatusUpdateArgs = {
  logbookId: Scalars['ID'];
  status: HistoryStatus;
};


export type MutationAddMaterialArgs = {
  compartmentId: Scalars['ID'];
  materialId: Scalars['ID'];
  sectionId: Scalars['ID'];
  truckId: Scalars['ID'];
};


export type MutationCreateCompartmentArgs = {
  compartment: CreateCompartmentInput;
  truckId: Scalars['ID'];
};


export type MutationCreateMaterialArgs = {
  material: CreateMaterialInput;
};


export type MutationCreateMaterialCheckArgs = {
  materialCheck: MaterialCheckReportInput;
};


export type MutationCreateMaterialTypeArgs = {
  materialType: CreateMaterialTypeInput;
};


export type MutationCreateMaterialWithTruckArgs = {
  compartmentId: Scalars['ID'];
  material: CreateMaterialInput;
  sectionId: Scalars['ID'];
  truckId: Scalars['ID'];
};


export type MutationCreateSectionArgs = {
  compartmentId: Scalars['ID'];
  section: CreateSectionInput;
  truckId: Scalars['ID'];
};


export type MutationCreateTruckArgs = {
  truck: CreateTruckInput;
};


export type MutationUpdateMaterialArgs = {
  id: Scalars['String'];
  material: UpdateMaterialInput;
};


export type MutationUpdateMaterialTypeArgs = {
  id: Scalars['ID'];
  materialType: UpdateMaterialTypeInput;
};

export type ProblemReport = {
  __typename?: 'ProblemReport';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  issues: Array<ProblemReportIssue>;
  statusHistory: Array<StatusHistoryItem>;
  truck: Truck;
  type: LogBookItemType;
  user: User;
};

export type ProblemReportIssue = {
  __typename?: 'ProblemReportIssue';
  description: Scalars['String'];
  part: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  logbook: LogbookResult;
  logbookItem: LogbookItem;
  material: Material;
  materialType: MaterialType;
  materialTypes: MaterialTypeResult;
  materials: MaterialResult;
  truck: Truck;
  truckPDF: Scalars['String'];
  trucks: TruckResult;
};


export type QueryLogbookArgs = {
  filter: LogbookFilterInput;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryLogbookItemArgs = {
  id: Scalars['ID'];
};


export type QueryMaterialArgs = {
  id: Scalars['ID'];
};


export type QueryMaterialTypeArgs = {
  id: Scalars['ID'];
};


export type QueryMaterialTypesArgs = {
  filter?: Maybe<MaterialTypeFilterInput>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryMaterialsArgs = {
  filter?: Maybe<MaterialsFilterInput>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryTruckArgs = {
  id: Scalars['ID'];
};


export type QueryTruckPdfArgs = {
  id: Scalars['ID'];
};


export type QueryTrucksArgs = {
  filter?: Maybe<TruckFilterInput>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type Section = {
  __typename?: 'Section';
  id: Scalars['ID'];
  imageSize?: Maybe<ImageSize>;
  imageUrl?: Maybe<Scalars['String']>;
  materials: Array<Material>;
  name?: Maybe<Scalars['String']>;
};

export type SectionCheck = {
  __typename?: 'SectionCheck';
  id: Scalars['ID'];
  materials: Array<MaterialCheck>;
  name?: Maybe<Scalars['String']>;
};

export type SectionCheckInput = {
  id: Scalars['ID'];
  materials: Array<MaterialCheckInput>;
  name?: Maybe<Scalars['String']>;
};

export type StatusHistoryItem = {
  __typename?: 'StatusHistoryItem';
  status: HistoryStatus;
  timestamp: Scalars['DateTime'];
  user: User;
};

export type Truck = {
  __typename?: 'Truck';
  code: Scalars['String'];
  compartments: Array<Compartment>;
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type TruckFilterInput = {
  search?: Maybe<Scalars['String']>;
};

export type TruckResult = {
  __typename?: 'TruckResult';
  count: Scalars['Int'];
  items: Array<Truck>;
};

export type UpdateMaterialInput = {
  date?: Maybe<Scalars['DateTime']>;
  serial?: Maybe<Scalars['String']>;
};

export type UpdateMaterialTypeInput = {
  codeFiche?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  email: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  profilePicture: Scalars['String'];
};

export type GetLogbookQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLogbookQuery = { __typename?: 'Query', logbook: { __typename?: 'LogbookResult', count: number, items: Array<{ __typename?: 'MaterialCheckReport', id: string, createdAt: any, type: LogBookItemType, truck: { __typename?: 'Truck', id: string, name: string, code: string }, user: { __typename?: 'User', id: string, name: string } } | { __typename?: 'ProblemReport', id: string, createdAt: any, type: LogBookItemType, truck: { __typename?: 'Truck', id: string, name: string, code: string }, user: { __typename?: 'User', id: string, name: string } }> } };

export type GetLogbookItemQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetLogbookItemQuery = { __typename?: 'Query', logbookItem: { __typename: 'MaterialCheckReport', id: string, createdAt: any, type: LogBookItemType, truck: { __typename?: 'Truck', id: string, name: string }, user: { __typename?: 'User', id: string, name: string }, statusHistory: Array<{ __typename?: 'StatusHistoryItem', status: HistoryStatus, timestamp: any, user: { __typename?: 'User', id: string, name: string } }>, checks: Array<{ __typename?: 'CompartmentCheck', id: string, code: string, name: string, sections: Array<{ __typename?: 'SectionCheck', id: string, name?: string | null | undefined, materials: Array<{ __typename?: 'MaterialCheck', amount: number, check: boolean, remark?: string | null | undefined, materialType: { __typename?: 'MaterialType', id: string, name: string } }> }> }> } | { __typename: 'ProblemReport', id: string, createdAt: any, type: LogBookItemType, truck: { __typename?: 'Truck', id: string, name: string, code: string }, user: { __typename?: 'User', id: string, name: string }, issues: Array<{ __typename?: 'ProblemReportIssue', part: string, description: string }> } };

export type GetMaterialTypesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMaterialTypesQuery = { __typename?: 'Query', materialTypes: { __typename?: 'MaterialTypeResult', count: number, items: Array<{ __typename?: 'MaterialType', id: string, code: string, name: string, description: string, codeFiche?: string | null | undefined }> } };

export type GetTruckQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetTruckQuery = { __typename?: 'Query', truck: { __typename?: 'Truck', id: string, code: string, name: string, compartments: Array<{ __typename?: 'Compartment', id: string, code: string, name: string, sections: Array<{ __typename?: 'Section', id: string, name?: string | null | undefined, imageUrl?: string | null | undefined, imageSize?: { __typename?: 'ImageSize', width: number, height: number } | null | undefined, materials: Array<{ __typename?: 'Material', id: string, serial?: string | null | undefined, date?: any | null | undefined, type: { __typename?: 'MaterialType', id: string, code: string, name: string, description: string, codeFiche?: string | null | undefined } }> }> }> } };

export type GetTrucksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTrucksQuery = { __typename?: 'Query', trucks: { __typename?: 'TruckResult', count: number, items: Array<{ __typename?: 'Truck', id: string, code: string, name: string }> } };


export const GetLogbookDocument = gql`
    query getLogbook {
  logbook(filter: {}) {
    count
    items {
      ... on ProblemReport {
        id
        truck {
          id
          name
          code
        }
        user {
          id
          name
        }
        createdAt
        type
      }
      ... on MaterialCheckReport {
        id
        truck {
          id
          name
          code
        }
        user {
          id
          name
        }
        createdAt
        type
      }
    }
  }
}
    `;

/**
 * __useGetLogbookQuery__
 *
 * To run a query within a React component, call `useGetLogbookQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLogbookQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLogbookQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetLogbookQuery(baseOptions?: Apollo.QueryHookOptions<GetLogbookQuery, GetLogbookQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetLogbookQuery, GetLogbookQueryVariables>(GetLogbookDocument, options);
      }
export function useGetLogbookLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLogbookQuery, GetLogbookQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetLogbookQuery, GetLogbookQueryVariables>(GetLogbookDocument, options);
        }
export type GetLogbookQueryHookResult = ReturnType<typeof useGetLogbookQuery>;
export type GetLogbookLazyQueryHookResult = ReturnType<typeof useGetLogbookLazyQuery>;
export type GetLogbookQueryResult = Apollo.QueryResult<GetLogbookQuery, GetLogbookQueryVariables>;
export const GetLogbookItemDocument = gql`
    query GetLogbookItem($id: ID!) {
  logbookItem(id: $id) {
    __typename
    ... on ProblemReport {
      id
      truck {
        id
        name
        code
      }
      user {
        id
        name
      }
      createdAt
      type
      issues {
        part
        description
      }
    }
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

/**
 * __useGetLogbookItemQuery__
 *
 * To run a query within a React component, call `useGetLogbookItemQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLogbookItemQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLogbookItemQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetLogbookItemQuery(baseOptions: Apollo.QueryHookOptions<GetLogbookItemQuery, GetLogbookItemQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetLogbookItemQuery, GetLogbookItemQueryVariables>(GetLogbookItemDocument, options);
      }
export function useGetLogbookItemLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLogbookItemQuery, GetLogbookItemQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetLogbookItemQuery, GetLogbookItemQueryVariables>(GetLogbookItemDocument, options);
        }
export type GetLogbookItemQueryHookResult = ReturnType<typeof useGetLogbookItemQuery>;
export type GetLogbookItemLazyQueryHookResult = ReturnType<typeof useGetLogbookItemLazyQuery>;
export type GetLogbookItemQueryResult = Apollo.QueryResult<GetLogbookItemQuery, GetLogbookItemQueryVariables>;
export const GetMaterialTypesDocument = gql`
    query getMaterialTypes {
  materialTypes(filter: {}) {
    count
    items {
      id
      code
      name
      description
      codeFiche
    }
  }
}
    `;

/**
 * __useGetMaterialTypesQuery__
 *
 * To run a query within a React component, call `useGetMaterialTypesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMaterialTypesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMaterialTypesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMaterialTypesQuery(baseOptions?: Apollo.QueryHookOptions<GetMaterialTypesQuery, GetMaterialTypesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMaterialTypesQuery, GetMaterialTypesQueryVariables>(GetMaterialTypesDocument, options);
      }
export function useGetMaterialTypesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMaterialTypesQuery, GetMaterialTypesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMaterialTypesQuery, GetMaterialTypesQueryVariables>(GetMaterialTypesDocument, options);
        }
export type GetMaterialTypesQueryHookResult = ReturnType<typeof useGetMaterialTypesQuery>;
export type GetMaterialTypesLazyQueryHookResult = ReturnType<typeof useGetMaterialTypesLazyQuery>;
export type GetMaterialTypesQueryResult = Apollo.QueryResult<GetMaterialTypesQuery, GetMaterialTypesQueryVariables>;
export const GetTruckDocument = gql`
    query GetTruck($id: ID!) {
  truck(id: $id) {
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
        imageSize {
          width
          height
        }
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
}
    `;

/**
 * __useGetTruckQuery__
 *
 * To run a query within a React component, call `useGetTruckQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTruckQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTruckQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetTruckQuery(baseOptions: Apollo.QueryHookOptions<GetTruckQuery, GetTruckQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTruckQuery, GetTruckQueryVariables>(GetTruckDocument, options);
      }
export function useGetTruckLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTruckQuery, GetTruckQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTruckQuery, GetTruckQueryVariables>(GetTruckDocument, options);
        }
export type GetTruckQueryHookResult = ReturnType<typeof useGetTruckQuery>;
export type GetTruckLazyQueryHookResult = ReturnType<typeof useGetTruckLazyQuery>;
export type GetTruckQueryResult = Apollo.QueryResult<GetTruckQuery, GetTruckQueryVariables>;
export const GetTrucksDocument = gql`
    query GetTrucks {
  trucks {
    count
    items {
      id
      code
      name
    }
  }
}
    `;

/**
 * __useGetTrucksQuery__
 *
 * To run a query within a React component, call `useGetTrucksQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTrucksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTrucksQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTrucksQuery(baseOptions?: Apollo.QueryHookOptions<GetTrucksQuery, GetTrucksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTrucksQuery, GetTrucksQueryVariables>(GetTrucksDocument, options);
      }
export function useGetTrucksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTrucksQuery, GetTrucksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTrucksQuery, GetTrucksQueryVariables>(GetTrucksDocument, options);
        }
export type GetTrucksQueryHookResult = ReturnType<typeof useGetTrucksQuery>;
export type GetTrucksLazyQueryHookResult = ReturnType<typeof useGetTrucksLazyQuery>;
export type GetTrucksQueryResult = Apollo.QueryResult<GetTrucksQuery, GetTrucksQueryVariables>;