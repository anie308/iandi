import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { config } from '../constants/config'


export const courseRegApi = createApi({
   reducerPath: 'courseRegApi',
   baseQuery: fetchBaseQuery({baseUrl: config.PROD_BASE_URL}),
   endpoints: (builder) => ({
       getAllRegistered: builder.query({
           query:()=> '/courseregs',
        
       }),
       register: builder.mutation({
           query: (initialReg) => ({
               url: '/courseregs/create',
               method: 'POST',
               body: initialReg
           }),
           transformResponse: (response) => response.data,

       }),

       
   })
})

export default courseRegApi