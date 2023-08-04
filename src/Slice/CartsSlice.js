import {createSlice,createAction,createReducer,createAsyncThunk} from '@reduxjs/toolkit';
import axios, {Axios} from "axios"; 


const initialState ={
    carts:[]
}

const addnewcart = createAction("carts/addcart");
const removecart =  createAction("carts/removecart");
const cartsReducer = createReducer(initialState,(builder) =>{
    builder.addCase(addnewcart,(state,action)=>{
        state.carts.push(action.payload)
    }).addCase(removecart,(state,action)=>{
        state.carts.splice(state.carts.indexOf(action.payload),1);
    })
})

export {addnewcart,removecart};
export default cartsReducer;