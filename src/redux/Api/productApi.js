import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    // baseUrl: "https://a.mmsdev.site/api/v1",
    baseUrl : "http://192.168.0.158:8000/api/v1"
  }),
  tagTypes: ["productApi"],

  endpoints: (builder) => ({
    getproduct: builder.query({
      query: ({ token }) => ({
        url: "/user/product",
        method: "GET",
        headers: { authorization: `Bearer ${token}` },
      }),
      providesTags: ["productApi"],
    }),
    paginatePages: builder.query({
      query: ({ token, page }) => ({
        url: `user/product?page=${page}`,
        headers: { authorization: ` Bearer ${token}` },
      }),
      providesTags: ["productApi"],
    }),
    recentPagination: builder.query({
      query:({token, page})=>({
        url:`user/recent?page=${page}`,
        headers: {authorization: `Bearer ${token}`}
      })
    })
  }),
});

export const { useGetproductQuery, usePaginatePagesQuery, useRecentPaginationQuery } = productApi;
