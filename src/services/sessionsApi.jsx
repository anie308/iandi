import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { config } from '../constants/config'


export const sessionsApi = createApi({
   reducerPath: 'sessionsApi',
   baseQuery: fetchBaseQuery({baseUrl: config.PROD_BASE_URL}),
   endpoints: (builder) => ({
       sessions: builder.query({
           query:()=> '/sessions',
           provideTags: ['sessions']
       }),
       deleteSession: builder.mutation({
        query : (sessionId) => ({
            url: `/sessions/${sessionId}`,
            headers: {
                authorization: `Bearer ${
                  JSON.parse(localStorage.getItem("user")).accessToken
                }`,
              },
              method: "DELETE",
              body: sessionId,
        }),
        invalidatesTags: ['sessions']
       }),

     
   })
})

export default sessionsApi