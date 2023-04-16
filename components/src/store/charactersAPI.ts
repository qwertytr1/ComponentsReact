import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { build } from 'vite';
export const charactersApi = createApi({
  reducerPath: 'characters',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api/' }),
  endpoints: (build) => ({
    getCharacters: build.query({
      query: (name = '') => `character/${name && `?name=${name}`}`,
    }),
  }),
});
export const { useGetCharactersQuery } = charactersApi;
