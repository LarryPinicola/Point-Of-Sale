import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
    cartItems: []
  };
  
  const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
      addToCart: (state, {payload}) => {
        const item = payload;
        const productItem = state.cartItems.find(product => product.id === item.id);
        if(productItem){
          productItem.quantity += 1;
        }else{
          state.cartItems = [...state.cartItems,item];
        }
       

    },
    incrementQ(state, action){
      const item = action.payload;
      const productItem = state.cartItems.find(product => product.id === item.id);
      if(productItem){
        productItem.quantity += 1;
      }
  },
    }
  });
  
  export const {addToCart,incrementQ} = cartSlice.actions;
  
  export default cartSlice.reducer;