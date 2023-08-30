import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../redux/auth/authSlice";
import { authApi } from "../redux/auth/authApi";
import { productApi } from "../redux/Api/productApi";
import cartSlice from "../redux/Service/cartSlice";

export const store = configureStore({
    reducer : {
        [authApi.reducerPath]: authApi.reducer,
        [productApi.reducerPath]: productApi.reducer,
        auth : authSlice,
        cart : cartSlice
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(authApi.middleware,productApi.middleware),
  })