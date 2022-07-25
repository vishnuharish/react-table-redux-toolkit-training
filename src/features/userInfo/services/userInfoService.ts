import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const userInfoApi = createApi({
    reducerPath: 'userInfoApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3002/user_info'}),
    endpoints: (builder) => ({
        getAllUsers: builder.query({
            query: () => ''
        }),
    }),
});


export const {useGetAllUsersQuery} = userInfoApi;
export const {reducer, reducerPath} = userInfoApi;
