 import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

 const baseURL = "https://iandiapi.onrender.com/api";
 export const apiSlice = createApi({
    reducerPath: 'apiSlice',
    baseQuery: fetchBaseQuery({ baseUrl: baseURL}),
    endpoints: (builder) => ({ 
        courses: builder.query({
            query:()=> '/courses',
            providesTags: ['courses']
        }),
        createCourse: builder.mutation({
            query: (initialCourse) => ({
                url: '/courses/create',
                headers : {
                  'authorization' : `Bearer ${JSON.parse(localStorage.getItem("user")).accessToken}`
                  // 'content-type' : 'multipart/form-data'
               },
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

            
        }),
        bites: builder.query({
            query: () => "/posts",
            providesTags: ['posts']
      
          }),
      
          createBites: builder.mutation({
            query: (initialBites) => ({
              url: "/posts/create",
              headers: {
                authorization: `Bearer ${
                  JSON.parse(localStorage.getItem("user")).accessToken
                }`,
              },
              method: "POST",
              body: initialBites,
            }),
            invalidatesTags: ['posts']
      
          }),
          deleteBite: builder.mutation({
            query: (postId) => ({
              url: `/posts/${postId}`,
              headers: {
                authorization: `Bearer ${
                  JSON.parse(localStorage.getItem("user")).accessToken
                }`,
              },
              method: "DELETE",
              body: postId,
            }),
            invalidatesTags: ['posts']
      
          }),
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
 
         
     }),
     sessions: builder.query({
        query:()=> '/sessions',
        provideTags: ['sessions']
    }),
    createSession: builder.mutation({
      query: (initialSessions) => ({
        url: "/sessions/create",
        headers: {
          authorization: `Bearer ${
            JSON.parse(localStorage.getItem("user")).accessToken
          }`,
        },
        method: "POST",
        body: initialSessions,
      }),
      invalidatesTags: ['sessions']
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

 export default apiSlice