import { configureStore } from "@reduxjs/toolkit";
import  useReducer  from './userSlice'
import courseSlice from './courseSlice'
import biteSlice from './biteSlice'
import {apiSlice} from './apiSlice'

export default configureStore({
    reducer: {
        user: useReducer,
        course: courseSlice,
        bite:biteSlice,
        [apiSlice.reducerPath]: apiSlice.reducer,
        
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware),
})