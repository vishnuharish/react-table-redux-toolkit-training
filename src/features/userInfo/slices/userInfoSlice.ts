import {createSlice, createAsyncThunk, Slice, PayloadAction} from '@reduxjs/toolkit';

const FETCH_ALL_USERS_TYPE = 'USER_INFO/FETCH_ALL_USERS';
const BASE_URL = 'http://localhost:3002/user_info';

export interface UserInfo {
	id: number;
	first_name: string;
	last_name: string;
	country: string;
	age: number;
	phone: string;
	dob: string;
}
export interface UserInfoState {
	loading: boolean;
	data: UserInfo[];
	error: string | null | unknown;
}

const initialState: UserInfoState = {
	loading: false,
	data: [],
	error: null
}

export const fetchAllUsers = createAsyncThunk(FETCH_ALL_USERS_TYPE, async (action, {rejectWithValue}) => {
	try {
		const headers = { 'Content-Type': "application/json"};
		const response: Response = await fetch(BASE_URL, {headers});
		const userInfo: UserInfo[] = await response.json();
	       return userInfo;	

	} catch (error: any) {
		return rejectWithValue(error.message as string);
	}
});

const userInfoSlice:Slice = createSlice({
	name: 'user_info',
	initialState,
	reducers: {},
	extraReducers: (builder)  => {
		builder.addCase(fetchAllUsers.pending, (state, action): UserInfoState => {
			return {
				...state,
				loading: true
			}
		});
		builder.addCase(fetchAllUsers.fulfilled, (state, action): UserInfoState => {
			return {
				...state,
				data: [...action.payload],
				loading: false
			}
		});
		builder.addCase(fetchAllUsers.rejected, (state, action): UserInfoState => {
			return {
				...state,
				data: [],
				loading: false,
				error: action.payload
			}
		})
	},

})


export default userInfoSlice.reducer;
