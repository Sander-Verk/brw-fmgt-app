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
  truck: Truck;
  type: LogBookItemType;
  user: Scalars['String'];
};

export type MaterialCheckReportInput = {
  checks: Array<CompartmentCheckInput>;
  truckId: Scalars['ID'];
  user: Scalars['String'];
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
  truck: Truck;
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

export type Section = {
  __typename?: 'Section';
  id: Scalars['ID'];
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

export type Truck = {
  __typename?: 'Truck';
  code: Scalars['String'];
  compartments: Array<Compartment>;
  id: Scalars['ID'];
  name: Scalars['String'];
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

export type CreateMaterialCheckMutationVariables = Exact<{
  materialCheck: MaterialCheckReportInput;
}>;


export type CreateMaterialCheckMutation = { __typename?: 'Mutation', createMaterialCheck: { __typename?: 'MaterialCheckReport', id: string, user: string, createdAt: any, type: LogBookItemType, truck: { __typename?: 'Truck', id: string, name: string }, checks: Array<{ __typename?: 'CompartmentCheck', id: string, code: string, name: string, sections: Array<{ __typename?: 'SectionCheck', id: string, name?: string | null | undefined, materials: Array<{ __typename?: 'MaterialCheck', amount: number, check: boolean, remark?: string | null | undefined, materialType: { __typename?: 'MaterialType', id: string } }> }> }> } };

export type GetLogbookQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLogbookQuery = { __typename?: 'Query', logbook: { __typename?: 'LogbookResult', count: number, items: Array<{ __typename?: 'MaterialCheckReport', id: string, user: string, createdAt: any, type: LogBookItemType, truck: { __typename?: 'Truck', id: string, name: string } } | { __typename?: 'ProblemReport', id: string, user: string, createdAt: any, type: LogBookItemType, truck: { __typename?: 'Truck', id: string, name: string } }> } };

export type CreateMaterialTypeMutationVariables = Exact<{
  materialType: CreateMaterialTypeInput;
}>;


export type CreateMaterialTypeMutation = { __typename?: 'Mutation', createMaterialType: { __typename?: 'MaterialType', id: string, code: string, name: string, description: string, codeFiche?: string | null | undefined } };

export type GetMaterialTypesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMaterialTypesQuery = { __typename?: 'Query', materialTypes: { __typename?: 'MaterialTypeResult', count: number, items: Array<{ __typename?: 'MaterialType', id: string, code: string, name: string, description: string, codeFiche?: string | null | undefined }> } };

export type CreateCompartmentMutationVariables = Exact<{
  truckId: Scalars['ID'];
  compartment: CreateCompartmentInput;
}>;


export type CreateCompartmentMutation = { __typename?: 'Mutation', createCompartment: { __typename?: 'Truck', id: string, code: string, name: string, compartments: Array<{ __typename?: 'Compartment', id: string, code: string, name: string, sections: Array<{ __typename?: 'Section', id: string, name?: string | null | undefined, imageUrl?: string | null | undefined, materials: Array<{ __typename?: 'Material', id: string, serial?: string | null | undefined, date?: any | null | undefined, type: { __typename?: 'MaterialType', code: string, name: string, description: string, codeFiche?: string | null | undefined } }> }> }> } };

export type CreateMaterialWithTruckMutationVariables = Exact<{
  truckId: Scalars['ID'];
  compartmentId: Scalars['ID'];
  sectionId: Scalars['ID'];
  material: CreateMaterialInput;
}>;


export type CreateMaterialWithTruckMutation = { __typename?: 'Mutation', createMaterialWithTruck: { __typename?: 'Truck', id: string, code: string, name: string, compartments: Array<{ __typename?: 'Compartment', id: string, code: string, name: string, sections: Array<{ __typename?: 'Section', id: string, name?: string | null | undefined, imageUrl?: string | null | undefined, materials: Array<{ __typename?: 'Material', id: string, serial?: string | null | undefined, date?: any | null | undefined, type: { __typename?: 'MaterialType', code: string, name: string, description: string, codeFiche?: string | null | undefined } }> }> }> } };

export type CreateSectionMutationVariables = Exact<{
  truckId: Scalars['ID'];
  compartmentId: Scalars['ID'];
  section: CreateSectionInput;
}>;


export type CreateSectionMutation = { __typename?: 'Mutation', createSection: { __typename?: 'Truck', id: string, code: string, name: string, compartments: Array<{ __typename?: 'Compartment', id: string, code: string, name: string, sections: Array<{ __typename?: 'Section', id: string, name?: string | null | undefined, imageUrl?: string | null | undefined, materials: Array<{ __typename?: 'Material', id: string, serial?: string | null | undefined, date?: any | null | undefined, type: { __typename?: 'MaterialType', code: string, name: string, description: string, codeFiche?: string | null | undefined } }> }> }> } };

export type GetTruckQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetTruckQuery = { __typename?: 'Query', truck: { __typename?: 'Truck', id: string, code: string, name: string, compartments: Array<{ __typename?: 'Compartment', id: string, code: string, name: string, sections: Array<{ __typename?: 'Section', id: string, name?: string | null | undefined, imageUrl?: string | null | undefined, materials: Array<{ __typename?: 'Material', id: string, serial?: string | null | undefined, date?: any | null | undefined, type: { __typename?: 'MaterialType', id: string, code: string, name: string, description: string, codeFiche?: string | null | undefined } }> }> }> } };

export type GetTrucksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTrucksQuery = { __typename?: 'Query', trucks: { __typename?: 'TruckResult', count: number, items: Array<{ __typename?: 'Truck', id: string, code: string, name: string }> } };


export const CreateMaterialCheckDocument = gql`
    mutation CreateMaterialCheck($materialCheck: MaterialCheckReportInput!) {
  createMaterialCheck(materialCheck: $materialCheck) {
    id
    truck {
      id
      name
    }
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
          }
          amount
          check
          remark
        }
      }
    }
  }
}
    `;
export type CreateMaterialCheckMutationFn = Apollo.MutationFunction<CreateMaterialCheckMutation, CreateMaterialCheckMutationVariables>;

/**
 * __useCreateMaterialCheckMutation__
 *
 * To run a mutation, you first call `useCreateMaterialCheckMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMaterialCheckMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMaterialCheckMutation, { data, loading, error }] = useCreateMaterialCheckMutation({
 *   variables: {
 *      materialCheck: // value for 'materialCheck'
 *   },
 * });
 */
export function useCreateMaterialCheckMutation(baseOptions?: Apollo.MutationHookOptions<CreateMaterialCheckMutation, CreateMaterialCheckMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateMaterialCheckMutation, CreateMaterialCheckMutationVariables>(CreateMaterialCheckDocument, options);
      }
export type CreateMaterialCheckMutationHookResult = ReturnType<typeof useCreateMaterialCheckMutation>;
export type CreateMaterialCheckMutationResult = Apollo.MutationResult<CreateMaterialCheckMutation>;
export type CreateMaterialCheckMutationOptions = Apollo.BaseMutationOptions<CreateMaterialCheckMutation, CreateMaterialCheckMutationVariables>;
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
        }
        user
        createdAt
        type
      }
      ... on MaterialCheckReport {
        id
        truck {
          id
          name
        }
        user
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
export const CreateMaterialTypeDocument = gql`
    mutation CreateMaterialType($materialType: CreateMaterialTypeInput!) {
  createMaterialType(materialType: $materialType) {
    id
    code
    name
    description
    codeFiche
  }
}
    `;
export type CreateMaterialTypeMutationFn = Apollo.MutationFunction<CreateMaterialTypeMutation, CreateMaterialTypeMutationVariables>;

/**
 * __useCreateMaterialTypeMutation__
 *
 * To run a mutation, you first call `useCreateMaterialTypeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMaterialTypeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMaterialTypeMutation, { data, loading, error }] = useCreateMaterialTypeMutation({
 *   variables: {
 *      materialType: // value for 'materialType'
 *   },
 * });
 */
export function useCreateMaterialTypeMutation(baseOptions?: Apollo.MutationHookOptions<CreateMaterialTypeMutation, CreateMaterialTypeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateMaterialTypeMutation, CreateMaterialTypeMutationVariables>(CreateMaterialTypeDocument, options);
      }
export type CreateMaterialTypeMutationHookResult = ReturnType<typeof useCreateMaterialTypeMutation>;
export type CreateMaterialTypeMutationResult = Apollo.MutationResult<CreateMaterialTypeMutation>;
export type CreateMaterialTypeMutationOptions = Apollo.BaseMutationOptions<CreateMaterialTypeMutation, CreateMaterialTypeMutationVariables>;
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
export const CreateCompartmentDocument = gql`
    mutation CreateCompartment($truckId: ID!, $compartment: CreateCompartmentInput!) {
  createCompartment(truckId: $truckId, compartment: $compartment) {
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
          id
          type {
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
export type CreateCompartmentMutationFn = Apollo.MutationFunction<CreateCompartmentMutation, CreateCompartmentMutationVariables>;

/**
 * __useCreateCompartmentMutation__
 *
 * To run a mutation, you first call `useCreateCompartmentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCompartmentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCompartmentMutation, { data, loading, error }] = useCreateCompartmentMutation({
 *   variables: {
 *      truckId: // value for 'truckId'
 *      compartment: // value for 'compartment'
 *   },
 * });
 */
export function useCreateCompartmentMutation(baseOptions?: Apollo.MutationHookOptions<CreateCompartmentMutation, CreateCompartmentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCompartmentMutation, CreateCompartmentMutationVariables>(CreateCompartmentDocument, options);
      }
export type CreateCompartmentMutationHookResult = ReturnType<typeof useCreateCompartmentMutation>;
export type CreateCompartmentMutationResult = Apollo.MutationResult<CreateCompartmentMutation>;
export type CreateCompartmentMutationOptions = Apollo.BaseMutationOptions<CreateCompartmentMutation, CreateCompartmentMutationVariables>;
export const CreateMaterialWithTruckDocument = gql`
    mutation CreateMaterialWithTruck($truckId: ID!, $compartmentId: ID!, $sectionId: ID!, $material: CreateMaterialInput!) {
  createMaterialWithTruck(
    truckId: $truckId
    compartmentId: $compartmentId
    sectionId: $sectionId
    material: $material
  ) {
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
          id
          type {
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
export type CreateMaterialWithTruckMutationFn = Apollo.MutationFunction<CreateMaterialWithTruckMutation, CreateMaterialWithTruckMutationVariables>;

/**
 * __useCreateMaterialWithTruckMutation__
 *
 * To run a mutation, you first call `useCreateMaterialWithTruckMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMaterialWithTruckMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMaterialWithTruckMutation, { data, loading, error }] = useCreateMaterialWithTruckMutation({
 *   variables: {
 *      truckId: // value for 'truckId'
 *      compartmentId: // value for 'compartmentId'
 *      sectionId: // value for 'sectionId'
 *      material: // value for 'material'
 *   },
 * });
 */
export function useCreateMaterialWithTruckMutation(baseOptions?: Apollo.MutationHookOptions<CreateMaterialWithTruckMutation, CreateMaterialWithTruckMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateMaterialWithTruckMutation, CreateMaterialWithTruckMutationVariables>(CreateMaterialWithTruckDocument, options);
      }
export type CreateMaterialWithTruckMutationHookResult = ReturnType<typeof useCreateMaterialWithTruckMutation>;
export type CreateMaterialWithTruckMutationResult = Apollo.MutationResult<CreateMaterialWithTruckMutation>;
export type CreateMaterialWithTruckMutationOptions = Apollo.BaseMutationOptions<CreateMaterialWithTruckMutation, CreateMaterialWithTruckMutationVariables>;
export const CreateSectionDocument = gql`
    mutation CreateSection($truckId: ID!, $compartmentId: ID!, $section: CreateSectionInput!) {
  createSection(
    truckId: $truckId
    compartmentId: $compartmentId
    section: $section
  ) {
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
          id
          type {
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
export type CreateSectionMutationFn = Apollo.MutationFunction<CreateSectionMutation, CreateSectionMutationVariables>;

/**
 * __useCreateSectionMutation__
 *
 * To run a mutation, you first call `useCreateSectionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSectionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSectionMutation, { data, loading, error }] = useCreateSectionMutation({
 *   variables: {
 *      truckId: // value for 'truckId'
 *      compartmentId: // value for 'compartmentId'
 *      section: // value for 'section'
 *   },
 * });
 */
export function useCreateSectionMutation(baseOptions?: Apollo.MutationHookOptions<CreateSectionMutation, CreateSectionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateSectionMutation, CreateSectionMutationVariables>(CreateSectionDocument, options);
      }
export type CreateSectionMutationHookResult = ReturnType<typeof useCreateSectionMutation>;
export type CreateSectionMutationResult = Apollo.MutationResult<CreateSectionMutation>;
export type CreateSectionMutationOptions = Apollo.BaseMutationOptions<CreateSectionMutation, CreateSectionMutationVariables>;
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