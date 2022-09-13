import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { config } from "../constants/config";

export const bitesApi = createApi({
  reducerPath: "bitesApi",
  baseQuery: fetchBaseQuery({ baseUrl: config.PROD_BASE_URL }),

  endpoints: (builder) => ({
    bites: builder.query({
      query: () => "/posts",
      providesTags: ['posts']

    }),

    createBites: builder.mutation({
      query: (initialBites) => ({
        url: "/posts/create",
        headers: {
          authorization: `Bearer ${
            JSON.parse(localStorage.getItem("user")).accessToken
          }`,
        },
        method: "POST",
        body: initialBites,
      }),
      invalidatesTags: ['posts']

    }),
    deleteBite: builder.mutation({
      query: (postId) => ({
        url: `/posts/${postId}`,
        headers: {
          authorization: `Bearer ${
            JSON.parse(localStorage.getItem("user")).accessToken
          }`,
        },
        method: "DELETE",
        body: postId,
      }),
      invalidatesTags: ['posts']

    }),
  }),
});

export default bitesApi;
