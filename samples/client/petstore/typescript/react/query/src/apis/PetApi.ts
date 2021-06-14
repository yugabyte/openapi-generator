// tslint:disable
/**
 * OpenAPI Petstore
 * This is a sample server Petstore server. For this sample, you can use the api key `special-key` to test the authorization filters.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { useQuery, useInfiniteQuery, useMutation, UseQueryOptions, UseInfiniteQueryOptions, UseMutationOptions } from 'react-query';
import Axios from '../runtime';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import type {
  ModelApiResponse,
  Pet,
} from '../models';

type SecondParameter<T extends (...args: any) => any> = T extends (
  config: any,
  args: infer P,
) => any
  ? P extends unknown
  ? Record<string, any>
  : P
  : never;

export interface AddPetForQuery {
  pet: Pet;
}
export interface DeletePetForQuery {
  petId: number;
  apiKey?: string;
}
export interface FindPetsByStatusForQuery {
  status: FindPetsByStatusStatusEnum[];
}
export interface FindPetsByTagsForQuery {
  tags: Array<string>;
}
export interface GetPetByIdForQuery {
  petId: number;
}
export interface UpdatePetForQuery {
  pet: Pet;
}
export interface UpdatePetWithFormForQuery {
  petId: number;
  name?: string;
  status?: string;
}
export interface UploadFileForQuery {
  petId: number;
  additionalMetadata?: string;
  file?: Blob;
}

/**
 * Add a new pet to the store
 */


export const addPetMutate = (
  body: AddPetForQuery,
  options?: SecondParameter<typeof Axios>
) => {
  const url = '/pet';
  return Axios<Pet>(
    {
      url,
      method: 'POST',
      data: {
        ...body.pet
      }
    },
    // eslint-disable-next-line
    // @ts-ignore
    options
  );
};

export const useAddPetMutation = <Error = ApiError>(
  options?: {
    mutation?:UseMutationOptions<Pet, Error>,
    request?: SecondParameter<typeof Axios>
  }
) => {
  const {mutation: mutationOptions, request: requestOptions} = options ?? {};
  // eslint-disable-next-line
  // @ts-ignore
  return useMutation<Pet, Error, AddPetForQuery, unknown>((props) => {
    return  addPetMutate(props,requestOptions);
  }, mutationOptions);
};


/**
 * Deletes a pet
 */


export const deletePetMutate = (
  body: DeletePetForQuery,
  options?: SecondParameter<typeof Axios>
) => {
  const url = '/pet/{petId}'.replace(`{${'petId'}}`, encodeURIComponent(String(body.petId)));
  delete body.petId;
  return Axios<unknown>(
    {
      url,
      method: 'DELETE',
    },
    // eslint-disable-next-line
    // @ts-ignore
    options
  );
};

export const useDeletePetMutation = <Error = ApiError>(
  options?: {
    mutation?:UseMutationOptions<unknown, Error>,
    request?: SecondParameter<typeof Axios>
  }
) => {
  const {mutation: mutationOptions, request: requestOptions} = options ?? {};
  // eslint-disable-next-line
  // @ts-ignore
  return useMutation<unknown, Error, DeletePetForQuery, unknown>((props) => {
    return  deletePetMutate(props,requestOptions);
  }, mutationOptions);
};


/**
 * Multiple status values can be provided with comma separated strings
 * Finds Pets by status
 */

export const findPetsByStatusAxiosRequest = (
  requestParameters: FindPetsByStatusForQuery,
  options?: SecondParameter<typeof Axios>
) => {
  return Axios<Pet[]>(
    {
      url: '/pet/findByStatus',
      method: 'GET',
      requestParameters
    },
    // eslint-disable-next-line
    // @ts-ignore
    options
  );
};

export const findPetsByStatusQueryKey = (
  requestParametersQuery: FindPetsByStatusForQuery,
  pageParam = -1,
  version = 1,
) => [
  `/v${version}/pet/findByStatus`,
  pageParam,
  ...(requestParametersQuery ? [requestParametersQuery] : [])
];


export const useFindPetsByStatusInfiniteQuery = <Error = ApiError>(
  params: FindPetsByStatusForQuery,
  pageParam = -1,
  version = 1,
  options?: {
    query?: UseInfiniteQueryOptions<Pet[], Error>;
    request?: SecondParameter<typeof Axios>;
  },
) => {
  const queryKey = findPetsByStatusQueryKey(params, pageParam, version);
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const query = useInfiniteQuery<Pet[], Error>(
    queryKey,
    () => findPetsByStatusAxiosRequest(params, requestOptions),
    { enabled: !!version, ...queryOptions }
  );

  return {
    queryKey,
    ...query
  };
};

export const useFindPetsByStatusQuery = <Error = ApiError>(
  params: FindPetsByStatusForQuery,
  version = 1,
  options?: {
  query?: UseQueryOptions<Pet[], Error>;
  request?: SecondParameter<typeof Axios>;
}) => {
  const queryKey = findPetsByStatusQueryKey(params,  version);
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const query = useQuery<Pet[], Error>(
    queryKey,
    () => findPetsByStatusAxiosRequest(params, requestOptions),
    { enabled: !!version, ...queryOptions }
  );

  return {
    queryKey,
    ...query
  };
};



/**
 * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
 * Finds Pets by tags
 */

export const findPetsByTagsAxiosRequest = (
  requestParameters: FindPetsByTagsForQuery,
  options?: SecondParameter<typeof Axios>
) => {
  return Axios<Pet[]>(
    {
      url: '/pet/findByTags',
      method: 'GET',
      requestParameters
    },
    // eslint-disable-next-line
    // @ts-ignore
    options
  );
};

export const findPetsByTagsQueryKey = (
  requestParametersQuery: FindPetsByTagsForQuery,
  pageParam = -1,
  version = 1,
) => [
  `/v${version}/pet/findByTags`,
  pageParam,
  ...(requestParametersQuery ? [requestParametersQuery] : [])
];


export const useFindPetsByTagsInfiniteQuery = <Error = ApiError>(
  params: FindPetsByTagsForQuery,
  pageParam = -1,
  version = 1,
  options?: {
    query?: UseInfiniteQueryOptions<Pet[], Error>;
    request?: SecondParameter<typeof Axios>;
  },
) => {
  const queryKey = findPetsByTagsQueryKey(params, pageParam, version);
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const query = useInfiniteQuery<Pet[], Error>(
    queryKey,
    () => findPetsByTagsAxiosRequest(params, requestOptions),
    { enabled: !!version, ...queryOptions }
  );

  return {
    queryKey,
    ...query
  };
};

export const useFindPetsByTagsQuery = <Error = ApiError>(
  params: FindPetsByTagsForQuery,
  version = 1,
  options?: {
  query?: UseQueryOptions<Pet[], Error>;
  request?: SecondParameter<typeof Axios>;
}) => {
  const queryKey = findPetsByTagsQueryKey(params,  version);
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const query = useQuery<Pet[], Error>(
    queryKey,
    () => findPetsByTagsAxiosRequest(params, requestOptions),
    { enabled: !!version, ...queryOptions }
  );

  return {
    queryKey,
    ...query
  };
};



/**
 * Returns a single pet
 * Find pet by ID
 */

export const getPetByIdAxiosRequest = (
  requestParameters: GetPetByIdForQuery,
  options?: SecondParameter<typeof Axios>
) => {
  return Axios<Pet>(
    {
      url: '/pet/{petId}'.replace(`{${'petId'}}`, encodeURIComponent(String(requestParameters.petId))),
      method: 'GET',
      requestParameters
    },
    // eslint-disable-next-line
    // @ts-ignore
    options
  );
};

export const getPetByIdQueryKey = (
  requestParametersQuery: GetPetByIdForQuery,
  pageParam = -1,
  version = 1,
) => [
  `/v${version}/pet/{petId}`,
  pageParam,
  ...(requestParametersQuery ? [requestParametersQuery] : [])
];


export const useGetPetByIdInfiniteQuery = <Error = ApiError>(
  params: GetPetByIdForQuery,
  pageParam = -1,
  version = 1,
  options?: {
    query?: UseInfiniteQueryOptions<Pet, Error>;
    request?: SecondParameter<typeof Axios>;
  },
) => {
  const queryKey = getPetByIdQueryKey(params, pageParam, version);
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const query = useInfiniteQuery<Pet, Error>(
    queryKey,
    () => getPetByIdAxiosRequest(params, requestOptions),
    { enabled: !!version, ...queryOptions }
  );

  return {
    queryKey,
    ...query
  };
};

export const useGetPetByIdQuery = <Error = ApiError>(
  params: GetPetByIdForQuery,
  version = 1,
  options?: {
  query?: UseQueryOptions<Pet, Error>;
  request?: SecondParameter<typeof Axios>;
}) => {
  const queryKey = getPetByIdQueryKey(params,  version);
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const query = useQuery<Pet, Error>(
    queryKey,
    () => getPetByIdAxiosRequest(params, requestOptions),
    { enabled: !!version, ...queryOptions }
  );

  return {
    queryKey,
    ...query
  };
};



/**
 * Update an existing pet
 */


export const updatePetMutate = (
  body: UpdatePetForQuery,
  options?: SecondParameter<typeof Axios>
) => {
  const url = '/pet';
  return Axios<Pet>(
    {
      url,
      method: 'PUT',
      data: {
        ...body.pet
      }
    },
    // eslint-disable-next-line
    // @ts-ignore
    options
  );
};

export const useUpdatePetMutation = <Error = ApiError>(
  options?: {
    mutation?:UseMutationOptions<Pet, Error>,
    request?: SecondParameter<typeof Axios>
  }
) => {
  const {mutation: mutationOptions, request: requestOptions} = options ?? {};
  // eslint-disable-next-line
  // @ts-ignore
  return useMutation<Pet, Error, UpdatePetForQuery, unknown>((props) => {
    return  updatePetMutate(props,requestOptions);
  }, mutationOptions);
};


/**
 * Updates a pet in the store with form data
 */


export const updatePetWithFormMutate = (
  body: UpdatePetWithFormForQuery,
  options?: SecondParameter<typeof Axios>
) => {
  const url = '/pet/{petId}'.replace(`{${'petId'}}`, encodeURIComponent(String(body.petId)));
  delete body.petId;
  return Axios<unknown>(
    {
      url,
      method: 'POST',
    },
    // eslint-disable-next-line
    // @ts-ignore
    options
  );
};

export const useUpdatePetWithFormMutation = <Error = ApiError>(
  options?: {
    mutation?:UseMutationOptions<unknown, Error>,
    request?: SecondParameter<typeof Axios>
  }
) => {
  const {mutation: mutationOptions, request: requestOptions} = options ?? {};
  // eslint-disable-next-line
  // @ts-ignore
  return useMutation<unknown, Error, UpdatePetWithFormForQuery, unknown>((props) => {
    return  updatePetWithFormMutate(props,requestOptions);
  }, mutationOptions);
};


/**
 * uploads an image
 */


export const uploadFileMutate = (
  body: UploadFileForQuery,
  options?: SecondParameter<typeof Axios>
) => {
  const url = '/pet/{petId}/uploadImage'.replace(`{${'petId'}}`, encodeURIComponent(String(body.petId)));
  delete body.petId;
  return Axios<ModelApiResponse>(
    {
      url,
      method: 'POST',
    },
    // eslint-disable-next-line
    // @ts-ignore
    options
  );
};

export const useUploadFileMutation = <Error = ApiError>(
  options?: {
    mutation?:UseMutationOptions<ModelApiResponse, Error>,
    request?: SecondParameter<typeof Axios>
  }
) => {
  const {mutation: mutationOptions, request: requestOptions} = options ?? {};
  // eslint-disable-next-line
  // @ts-ignore
  return useMutation<ModelApiResponse, Error, UploadFileForQuery, unknown>((props) => {
    return  uploadFileMutate(props,requestOptions);
  }, mutationOptions);
};






/**
  * @export
  * @enum {string}
  */
export enum FindPetsByStatusStatusEnum {
  Available = 'available',
  Pending = 'pending',
  Sold = 'sold'
}
