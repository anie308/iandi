import { configureStore } from "@reduxjs/toolkit";
import { coursesApi } from "./services/coursesApi";
import { bitesApi } from "./services/bitesApi";

export const store = configureStore({
    reducer: {
        [coursesApi.reducerPath] : coursesApi.reducer,
        [bitesApi.reducerPath] : bitesApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(coursesApi.middleware)
})
