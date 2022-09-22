import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./services/apiSlice";
import authReducer from './services/authApi'

export const store = configureStore({
    reducer: {

        [apiSlice.reducerPath] : apiSlice.reducer,

        auth: authReducer
    },
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware)
})
