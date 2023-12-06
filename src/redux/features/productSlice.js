import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk(
  "products/fetch",
  async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      console.log(response)
      return response.data;
    } catch (error) {
      return error;
    }
  }
);

export const productSlice = createSlice({
  name: "products",
  initialState: { isLoading: false, products: [], isError: false,error:[] },
  reducers:{},
  extraReducers:(builders)=>{
    builders.addCase(getProducts.pending,(state,action)=>{
        state.isLoading=true
        console.log("pending...")
    })
    builders.addCase(getProducts.fulfilled,(state,action)=>{
        state.products= action.payload
        state.isLoading=false
        console.log("fulfilled...")
    })
    builders.addCase(getProducts.rejected,(state,action)=>{
        state.error= action.payload
        state.isError=true
        console.log("error...")
    })


  } 

});
export default productSlice.reducer;
