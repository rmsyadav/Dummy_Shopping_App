import {configureStore} from "@reduxjs/toolkit";
import counterSlice from "../Slice/counterSlice";
import cartsSlice from "../Slice/CartsSlice";
import productSlice from "../Slice/ProductsSlice";

const store = configureStore({
    reducer:{
      counterSlice:counterSlice,
      cartsSlice:cartsSlice,
      productSlice:productSlice
    },
    devTools: true 
})

export default store;