import { configureStore } from "@reduxjs/toolkit";
import { coursesApi } from "./services/coursesApi";
import { sessionsApi } from "./services/sessionsApi";
import { waitlistApi } from "./services/waitlistApi";
import { bitesApi } from "./services/bitesApi";
import { courseRegApi } from "./services/courseRegApi";
import authReducer from './services/authApi'

export const store = configureStore({
    reducer: {
        [coursesApi.reducerPath] : coursesApi.reducer,
        [bitesApi.reducerPath] : bitesApi.reducer,
        [sessionsApi.reducerPath] : sessionsApi.reducer,
        [waitlistApi.reducerPath] : waitlistApi.reducer,
        [courseRegApi.reducerPath] : courseRegApi.reducer,
        auth: authReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(coursesApi.middleware)
})
