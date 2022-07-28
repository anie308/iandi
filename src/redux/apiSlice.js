import {createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const baseURI = 'https://iandiapi.herokuapp.com';
export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({baseUrl: baseURI}),
    endpoints:builder => ({
        getBites: builder.query({
            //get bites
            query: ()=>'/api/post/posts'
        }),

        // getCourses: builder.query({
        //     //get courses
        //     query: ()=>'/api/course/courses'
        // }),

        addBite: builder.mutation({
            query: (initialBite)=> ({
                url: '/api/post/create',
                method: 'POST',
                body: initialBite,
            })
        }),

        deleteBite: builder.mutation({
            query: recordId => ({
                url: '/api/post/:postId',
                method: 'DELETE',
                body: recordId,

            })
        })
    })
})


export default  apiSlice;