import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import customApi from '../customFetchApi/fetchApi';


const initialState ={
    products:[],
    isLoading:true,
    error:false
}
const fetchProduct = createAsyncThunk(
    'product/fetchdata',
    async () => {
        const response = await customApi.get('https://dummyjson.com/products'); 
        return response.data;
    }
  )

  const productSlice = createSlice({
      name:"product",
      initialState,
      reducers:{
        setProducts:(state,action)=>{
            state.products = action.payload;
        }
      },
      extraReducers:(builder)=>{
        builder.addCase(fetchProduct.fulfilled,(state,action)=>{
            state.products = [...action.payload.products];
            state.isLoading = false;
        }).addCase(fetchProduct.rejected,(state,action)=>{
             state.error = action.error;
        })
      }
  });
const {setProducts} = productSlice.actions;  
export {fetchProduct,setProducts}
export default productSlice.reducer;