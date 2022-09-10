// import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
// import { config } from '../constants/config'


// export const signinApi = createApi({
//     baseQuery: fetchBaseQuery({
//         baseUrl:  config.BASE_URL,
//         prepareHeaders : (headers) => {
//             const token = JSON.parse(localStorage.getItem('user').accessToken)
//             if(token) {
//                 headers.set('authorization', `Bearer ${token}`)
//             }
//             return headers
//         }
      
//     }),

//     endpoints : (builder) => ({
//         login: builder.mutation({
//             query: (initialUser) => ({
//                 url: '/auth/signin',
//                 method: 'POST',
//                 body: initialUser
//             }),
//         }),
//         protected: builder.mutation({
//             query : () => 'protected'
//         })
//     })
// })

// export default signinApi