import {createSlice,createAction,createReducer,createAsyncThunk} from '@reduxjs/toolkit';
import axios, {Axios} from "axios"; 


const initialState ={
    count:0,
    products:[],
    isLoading:true,
    error:false
}
const updateUser = createAsyncThunk(
    'users/update',
    async () => {
        const response = await fetch('https://dummyjson.com/products');
        const response1 = await response.json();
        return response1.products;
    },
    {
        condition: (state,{ getState }) => {
          const stateData  = getState()
          console.log(stateData.counterSlice);
        if (stateData.counterSlice.isLoading === false) {
             return false;
          }

        },
      }
  )
const increament = createAction("counter/increament");
const decreament =  createAction("counter/decreament");
const counterReducer = createReducer(initialState,(builder) =>{
    builder.addCase(increament,(state,action)=>{
        state.count++;
    }).addCase(decreament,(state,count)=>{
        state.count--;
    }).addCase(updateUser.fulfilled,(state,action)=>{
      state.isLoading = false;  
      state.products.push(action.payload);
    })
})

export {increament,decreament,updateUser};
export default counterReducer;

