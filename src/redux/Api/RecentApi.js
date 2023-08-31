import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const recentApi = createApi({
  reducerPath: "recentApi",
  baseQuery: fetchBaseQuery({
    // baseUrl: `https://a.mmsdev.site/api/v1/`,
    // in case url doesn't work
    baseUrl: `http://192.168.0.168:8000/api/v1`
  }),
  tagTypes: ["recentApi"],
  endpoints: (builder) => ({
    // recent url
    getRecent: builder.query({
      query: ({ token }) => ({
        url: "/user/recent",
        method: "GET",
        headers: { authorization: `Bearer ${token}` },
      }),
      providesTags: ["recentApi"],
    }),
  }),
});

export const { useGetRecentQuery } = recentApi;
