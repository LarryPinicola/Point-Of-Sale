import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../redux/auth/authSlice";
import { authApi } from "../redux/auth/authApi";

export const store = configureStore({
    reducer : {
        [authApi.reducerPath]: authApi.reducer,
        auth : authSlice
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(authApi.middleware),
  })