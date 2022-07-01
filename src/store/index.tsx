import { configureStore } from '@reduxjs/toolkit';
import userInfoReducer from '../features/userInfo/slices/userInfoSlice';

export const store = configureStore({
	reducer: {
		user_info: userInfoReducer
	}
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch
