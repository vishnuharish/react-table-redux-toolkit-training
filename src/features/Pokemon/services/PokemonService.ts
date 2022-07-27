import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {PokemonState} from './types/PokemonTypes';

export const pokemonApi = createApi({
    reducerPath: 'pokemonApi',
    baseQuery: fetchBaseQuery({baseUrl: "https://pokeapi.co/api/v2/"}),
    endpoints: (builder) => ({
        getPokemonByName: builder.query({
            query: (name) => `pokemon/${name}`,
        }),
        getAllPokemon: builder.query<PokemonState, string>({
            query: () => `pokemon`
        })
    }),
})

export const {reducerPath, reducer} = pokemonApi;
export const {useGetPokemonByNameQuery, useGetAllPokemonQuery} = pokemonApi;
