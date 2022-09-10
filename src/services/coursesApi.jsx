 import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
 import { config } from '../constants/config'

 
 export const coursesApi = createApi({
    reducerPath: 'coursesApi',
    // prepareHeaders: (headers) => {
    //     const token = JSON.parse(localStorage.getItem("user")).accessToken
    //     if (token) {
    //       headers.set("authorization", );
    //     }
    //     return headers;
    //   },
    baseQuery: fetchBaseQuery({baseUrl: config.PROD_BASE_URL}),
    endpoints: (builder) => ({
        courses: builder.query({
            query:()=> '/courses',
            providesTags: ['courses']
        }),
        createCourse: builder.mutation({
            query: (initialCourse) => ({
                url: '/courses/create',
                method: 'POST',
                body: initialCourse
            }),
            invalidatesTags: ['courses']

        }),
        deleteCourse: builder.mutation({
            query: (courseId) => ({
                url: `/courses/${courseId}`,
                headers : {
                    'authorization' : `Bearer ${JSON.parse(localStorage.getItem("user")).accessToken}`
                 },
                method: "DELETE",
                body: courseId 
            }),
            invalidatesTags: ['courses']

            
        })

        
    })
 })

 export default coursesApi