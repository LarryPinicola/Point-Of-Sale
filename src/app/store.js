import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../redux/auth/authSlice";
import { authApi } from "../redux/auth/authApi";
import { productApi } from "../redux/Api/productApi";
import cartSlice from "../redux/Service/cartSlice";
import { recentApi } from "../redux/Api/RecentApi";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    [recentApi.reducerPath]: recentApi.reducer,
    auth: authSlice,
    cart: cartSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      productApi.middleware,
      recentApi.middleware
    ),
});
