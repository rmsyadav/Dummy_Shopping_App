import {configureStore} from "@reduxjs/toolkit";
import counterSlice from "../Slice/counterSlice";
import cartsSlice from "../Slice/CartsSlice";
import productSlice from "../Slice/ProductsSlice";
import userDetailsSlice from "../Slice/userDetailsSlice";

const store = configureStore({
    reducer:{
      counterSlice:counterSlice,
      cartsSlice:cartsSlice,
      productSlice:productSlice,
      userDetails:userDetailsSlice
    },
    devTools: true 
})

export default store;