import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://pokeapi.co/api/v2/',
  }),
  endpoints: (builder) => ({
    getAllPokemons: builder.query({
      query: () => `/pokemon?limit=1000`,
    }),
    getPokemon: builder.query({
      query: (name) => `pokemon/${name}`,
    }),
  }),
});

export const { useGetAllPokemonsQuery, useGetPokemonQuery } = api;
