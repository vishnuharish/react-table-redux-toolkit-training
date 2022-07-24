import { configureStore } from '@reduxjs/toolkit';
import userInfoReducer from '../features/userInfo/slices/userInfoSlice';
import { setupListeners } from '@reduxjs/toolkit/query';
import {pokemonApi, reducer, reducerPath} from '../features/Pokemon/services/PokemonService';


export const store = configureStore({
	reducer: {
        [reducerPath]: reducer,
		user_info: userInfoReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(pokemonApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch
