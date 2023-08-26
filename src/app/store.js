import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../redux/auth/authSlice";
import { authApi } from "../redux/auth/authApi";
import { productApi } from "../redux/Api/productApi";

export const store = configureStore({
    reducer : {
        [authApi.reducerPath]: authApi.reducer,
        [productApi.reducerPath]: productApi.reducer,
        auth : authSlice
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(authApi.middleware,productApi.middleware),
  })