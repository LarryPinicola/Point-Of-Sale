import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
    cartItems: [],
    quantity : 0
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
          state.cartItems.push({...item,quantity : 1});
        }
       
    },
    incrementQ(state, {payload}){
      const item = {payload};
     state.cartItems += item;
  },
    }
  });
  
  export const {addToCart,incrementQ} = cartSlice.actions;
  
  export default cartSlice.reducer;