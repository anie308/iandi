import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { config } from '../constants/config'


export const bitesApi = createApi({
   reducerPath: 'bitesApi',
   baseQuery: fetchBaseQuery({baseUrl: config.BASE_URL}),
   endpoints: (builder) => ({
       bites: builder.query({
           query:()=> '/posts',
           
       }),

       createBites: builder.mutation({
        query: (initialBites) => ({
            url: '/posts/create',
            method: 'POST',
            body: initialBites
        })
       }),
       deleteBite: builder.mutation({
        query: bitedId => ({
            url: '/post',
            method: "DELETE",
            body: bitedId
        })
    })
   })
})




export default bitesApi

