import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { config } from '../constants/config'


export const courseRegApi = createApi({
   reducerPath: 'courseRegApi',
   baseQuery: fetchBaseQuery({baseUrl: config.PROD_BASE_URL}),
   endpoints: (builder) => ({
       getAllRegistered: builder.query({
           query:()=> '/courseregs',
           providesTags: ['courseregs']
        
       }),
       register: builder.mutation({
           query: (initialReg) => ({
               url: '/courseregs/create',
               method: 'POST',
               body: initialReg
           }),
           invalidatesTags: ['courseregs']

 
       }),
       updateCourseregs: builder.mutation({
        query: ({id, ...rest}) => ({
            url: `/courseregs/${id}`,
            headers : {
                'authorization' : `Bearer ${JSON.parse(localStorage.getItem("user")).accessToken}`
             },
            method: "PUT",
            body: rest 
        }),
        invalidatesTags: ['courseregs']

        
    })



       
   })
})

export default courseRegApi