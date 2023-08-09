import {createSlice,createAction,createReducer,createAsyncThunk} from '@reduxjs/toolkit';


const initialState ={
    username:"",
    authToken:"",
    isSignin:false
}

const userDetailsSlice = createSlice({
    name:"userDetails",
    initialState,
    reducers:{
      setUserDetails:(state,action)=>{
          state.authToken = action.payload.authToken;
          state.username = action.payload.username;
          state.isSignin = true;
      },
      removeUserDetails:(state,action)=>{
          state.authToken = "";
          state.username = "";
          state.isSignin = false;
      }
    }
});
const {setUserDetails,removeUserDetails} = userDetailsSlice.actions;  
export {setUserDetails,removeUserDetails}
export default userDetailsSlice.reducer;