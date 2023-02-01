import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../services/api'
import { IProduct } from './cartSlice'


interface IFetchProducts{
  items: IProduct[]
  status:'pending' | 'success'| 'rejected' | null
}


const initialState : IFetchProducts  = {
  items: [],
  status: null,
}

export const productsFetch = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    try {
      const response = await api.get(
        '/products'
      )
      return response.data
    } catch (error) {
      console.log(error)
    }
  }
)

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) =>{
    builder
      .addCase(productsFetch.pending, (state, action) => {
        state.status = 'pending'
      })
      .addCase(productsFetch.fulfilled, (state, action) => {
        state.items = action.payload
        state.status = 'success'
      })
      .addCase(productsFetch.rejected, (state, action) => {
        state.status = 'rejected'
      })
  },
})

export default productsSlice.reducer