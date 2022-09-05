 import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
 import { config } from '../constants/config'


 export const coursesApi = createApi({
    reducerPath: 'coursesApi',
    baseQuery: fetchBaseQuery({baseUrl: config.BASE_URL}),
    endpoints: (builder) => ({
        courses: builder.query({
            query:()=> '/courses'
        }),
        createCourse: builder.mutation({
            query: (initialCourse) => ({
                url: '/courses/create',
                method: 'POST',
                body: initialCourse
            }),

        }),

        
    })
 })

 export default coursesApi