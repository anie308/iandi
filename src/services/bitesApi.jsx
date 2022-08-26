import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { config } from '../constants/config'


export const bitesApi = createApi({
   reducerPath: 'bitesApi',
   baseQuery: fetchBaseQuery({baseUrl: config.BASE_URL}),
   endpoints: (builder) => ({
       bites: builder.query({
           query:()=> '/posts'
       })
   })
})

export const {
   useBitesQuery
} = bitesApi