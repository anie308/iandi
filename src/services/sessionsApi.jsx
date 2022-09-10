import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { config } from '../constants/config'


export const sessionsApi = createApi({
   reducerPath: 'sessionsApi',
   baseQuery: fetchBaseQuery({baseUrl: config.PROD_BASE_URL}),
   endpoints: (builder) => ({
       sessions: builder.query({
           query:()=> '/sessions'
       })
   })
})

export default sessionsApi