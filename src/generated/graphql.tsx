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

export type CreateCompartmentInput = {
  code: Scalars['String'];
  name: Scalars['String'];
};

export type CreateMaterialInput = {
  code: Scalars['String'];
  codeFiche?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['DateTime']>;
  description: Scalars['String'];
  name: Scalars['String'];
  serial?: Maybe<Scalars['String']>;
};

export type CreateSectionInput = {
  imageUrl: Scalars['String'];
  name: Scalars['String'];
};

export type CreateTruckInput = {
  code: Scalars['String'];
  name: Scalars['String'];
};

export enum LogBookItemType {
  ProblemReport = 'PROBLEM_REPORT'
}

export type LogbookFilterInput = {
  from?: Maybe<Scalars['DateTime']>;
  to?: Maybe<Scalars['DateTime']>;
  truckIds?: Maybe<Array<Scalars['ID']>>;
};

export type LogbookItem = ProblemReport;

export type LogbookResult = {
  __typename?: 'LogbookResult';
  count: Scalars['Int'];
  items: Array<LogbookItem>;
};

export type Material = {
  __typename?: 'Material';
  code: Scalars['String'];
  codeFiche: Scalars['String'];
  date: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  serial: Scalars['String'];
};

export type MaterialResult = {
  __typename?: 'MaterialResult';
  count: Scalars['Int'];
  items: Array<Material>;
};

export type MaterialsFilterInput = {
  search?: Maybe<Scalars['String']>;
  truckCodes?: Maybe<Array<Scalars['String']>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addMaterial: Truck;
  createCompartment: Truck;
  createMaterial: Material;
  createSection: Truck;
  createTruck: Truck;
  updateMaterial: Material;
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

export type ProblemReport = {
  __typename?: 'ProblemReport';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  issues: Array<ProblemReportIssue>;
  truckId: Scalars['ID'];
  type: LogBookItemType;
  user: Scalars['String'];
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

export type Section = {
  __typename?: 'Section';
  id: Scalars['ID'];
  imageUrl?: Maybe<Scalars['String']>;
  materials: Array<TruckMaterial>;
  name?: Maybe<Scalars['String']>;
};

export type Truck = {
  __typename?: 'Truck';
  code: Scalars['String'];
  compartments: Array<Compartment>;
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type TruckMaterial = {
  __typename?: 'TruckMaterial';
  amount: Scalars['Int'];
  material: Material;
};

export type TruckResult = {
  __typename?: 'TruckResult';
  count: Scalars['Int'];
  items: Array<Truck>;
};

export type UpdateMaterialInput = {
  codeFiche?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  serial?: Maybe<Scalars['String']>;
};

export type GetMaterialsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMaterialsQuery = { __typename?: 'Query', materials: { __typename?: 'MaterialResult', count: number, items: Array<{ __typename?: 'Material', id: string, code: string, name: string, description: string, serial: string, codeFiche: string, date: any }> } };

export type GetTruckQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetTruckQuery = { __typename?: 'Query', truck: { __typename?: 'Truck', id: string, code: string, name: string, compartments: Array<{ __typename?: 'Compartment', id: string, code: string, name: string, sections: Array<{ __typename?: 'Section', id: string, name?: string | null | undefined, imageUrl?: string | null | undefined, materials: Array<{ __typename?: 'TruckMaterial', amount: number, material: { __typename?: 'Material', id: string, name: string, code: string } }> }> }> } };

export type GetTrucksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTrucksQuery = { __typename?: 'Query', trucks: { __typename?: 'TruckResult', count: number, items: Array<{ __typename?: 'Truck', id: string, code: string, name: string }> } };


export const GetMaterialsDocument = gql`
    query getMaterials {
  materials(filter: {}) {
    count
    items {
      id
      code
      name
      description
      serial
      codeFiche
      date
    }
  }
}
    `;

/**
 * __useGetMaterialsQuery__
 *
 * To run a query within a React component, call `useGetMaterialsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMaterialsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMaterialsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMaterialsQuery(baseOptions?: Apollo.QueryHookOptions<GetMaterialsQuery, GetMaterialsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMaterialsQuery, GetMaterialsQueryVariables>(GetMaterialsDocument, options);
      }
export function useGetMaterialsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMaterialsQuery, GetMaterialsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMaterialsQuery, GetMaterialsQueryVariables>(GetMaterialsDocument, options);
        }
export type GetMaterialsQueryHookResult = ReturnType<typeof useGetMaterialsQuery>;
export type GetMaterialsLazyQueryHookResult = ReturnType<typeof useGetMaterialsLazyQuery>;
export type GetMaterialsQueryResult = Apollo.QueryResult<GetMaterialsQuery, GetMaterialsQueryVariables>;
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
        materials {
          amount
          material {
            id
            name
            code
          }
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