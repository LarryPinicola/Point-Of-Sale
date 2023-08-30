import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: []
  };
  
  const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
      addToCart: (state, {payload}) => {
        const item = payload;
        let productItem = state.cartItems.find(product => product.id === item.id);
        if(productItem){
          productItem.quantity += 1;
        }else{
          state.cartItems = [...state.cartItems,item];
        }
    },
    }
  });
  
  export const { addToCart} = cartSlice.actions;
  
  export default cartSlice.reducer;