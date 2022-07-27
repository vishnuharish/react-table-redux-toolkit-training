import React, {useEffect} from 'react';
import "./styles/Pokemon.scss";
import { useGetAllPokemonQuery, useGetPokemonByNameQuery } from './services/PokemonService';
import {PokemonState} from './services/types/PokemonTypes';
export const Pokemon: React.FC<{}> = () => {
    // const {data, error, isLoading} = useGetPokemonByNameQuery('bulbasaur');
    const {data, error, isLoading}:{data? :PokemonState, error?: any, isLoading: boolean} = useGetAllPokemonQuery('');
    return (
        <div className="pokemon-container">
            <div className="header">
                <h1>Pokemon</h1>
            </div>
            <div className="content">
                {  data&& ( <ul>
                {
                    data.results.map((pokemon: any) => (
                        <li key={pokemon.name}>{pokemon.name}</li>    
                    ))
                
                }
               </ul>)}
            </div>
        </div>
    )
}
