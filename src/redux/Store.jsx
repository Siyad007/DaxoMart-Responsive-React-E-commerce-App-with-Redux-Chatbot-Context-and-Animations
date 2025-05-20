import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import productReducer from "./productSlice";
import productDetailsReducer from "./productDetailsSlice";

const Store = configureStore({
  reducer: {
   
    cart: cartReducer,
    products: productReducer,
    productDetails: productDetailsReducer,
  },
});

export default Store;
