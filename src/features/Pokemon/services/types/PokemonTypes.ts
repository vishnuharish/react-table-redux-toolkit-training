export interface results {
    name: string;
    url: string;
};

export interface pokemon {
    results: results[]
}


export type PokemonState = pokemon;
