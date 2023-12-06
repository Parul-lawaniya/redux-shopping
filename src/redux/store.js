import { configureStore} from "@reduxjs/toolkit";
import cartReducer from "../redux/features/cartSlice"
import productReducer from "../redux/features/productSlice"
 export  const store = configureStore({
    reducer:{
        cart:cartReducer,
        product:productReducer
    }

 })