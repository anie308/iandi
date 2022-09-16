import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { config } from '../constants/config'


export const waitlistApi = createApi({
   reducerPath: 'waitlistApi',
   baseQuery: fetchBaseQuery({baseUrl: config.PROD_BASE_URL}),
   endpoints: (builder) => ({
       waitlists: builder.query({
           query:()=> '/waitlists',  
           providesTags: ['waiters']

       }),
       joinWaitlist: builder.mutation({
           query: (initialList) => ({
               url: '/waitlists/create',
               method: 'POST',
               body: initialList
           }),
           invalidatesTags: ['waiters'],
       }),
       deleteWaiter: builder.mutation({
           query: (waiterId) => ({
               url: `waitlists/${waiterId}`,
               headers : {
                'authorization' : `Bearer ${JSON.parse(localStorage.getItem("user")).accessToken}`
             },
               method: 'DELETE',
               body: waiterId
           }),
           invalidatesTags: ['waiters'],
       }),

       
   })
})

export default waitlistApi