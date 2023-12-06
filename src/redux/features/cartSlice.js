import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    isLoading: false,
    cartList: [],
    isError: false,
  },
  reducers: {
    addToCart: (state, action) => {
      state.cartList.push(action.payload);
    },
    removeFromCart: (state, action) => {
      console.log('remove')
      state.cartList = state.cartList.filter((item) => item.id !== action.payload);
    },
  },
});
export const { removeFromCart, addToCart } = cartSlice.actions;
export default cartSlice.reducer;
