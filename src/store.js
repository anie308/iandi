import { configureStore } from "@reduxjs/toolkit";
import { coursesApi } from "./services/coursesApi";
import { bitesApi } from "./services/bitesApi";
import authReducer from './services/authApi'

export const store = configureStore({
    reducer: {
        [coursesApi.reducerPath] : coursesApi.reducer,
        [bitesApi.reducerPath] : bitesApi.reducer,
        auth: authReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(coursesApi.middleware)
})
