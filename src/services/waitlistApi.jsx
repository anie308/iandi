import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { config } from '../constants/config'


export const waitlistApi = createApi({
   reducerPath: 'waitlistApi',
   baseQuery: fetchBaseQuery({baseUrl: config.PROD_BASE_URL}),
   endpoints: (builder) => ({
       waitlists: builder.query({
           query:()=> '/waitlists',  
       }),
       joinWaitlist: builder.mutation({
           query: (initialList) => ({
               url: '/waitlists/create',
               method: 'POST',
               body: initialList
           }),
           transformResponse: (response) => response.data,

       }),
    //    updateWait: builder.mutation({
    //        query: (initialList) => ({
    //            url: '/waitlists/create',
    //            method: 'POST',
    //            body: initialList
    //        }),
    //        transformResponse: (response) => response.data,

    //    }),

       
   })
})

export default waitlistApi