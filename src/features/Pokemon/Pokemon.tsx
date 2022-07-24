import React, {useEffect} from 'react';
import "./styles/Pokemon.scss";
import { useGetAllPokemonQuery, useGetPokemonByNameQuery } from './services/PokemonService';
export const Pokemon: React.FC<{}> = () => {
    // const {data, error, isLoading} = useGetPokemonByNameQuery('bulbasaur');
    const {data, error, isLoading} = useGetAllPokemonQuery('');
    useEffect(() => {console.log(data, isLoading, error)}, [data, isLoading, error])
    return (
        <div className="pokemon-container">
            <div className="header">
                <h1>Pokemon</h1>
            </div>

        </div>
    )
}
