import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
    reducerPath : 'authApi',
    baseQuery:fetchBaseQuery({
        baseUrl : "https://a.mmsdev.site/api/v1"
    }),
    tagTypes:["authApi"],

    endpoints : (builder) => ({
        login:builder.mutation({
            query:(user) => ({
                url : "/login",
                method : "POST",
                body : user
            }),
            invalidatesTags:["authApi"]
        }),
    })
})

export const {useLoginMutation} = authApi