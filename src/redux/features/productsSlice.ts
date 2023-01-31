import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import api from '../../services/api'
const initialState = {
  items: [],
  status: null,
}

export const productsFetch = createAsyncThunk(
  "products/fetchProducts",
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
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) =>{
    builder
    .addCase(productsFetch.pending, (state, action) => {
      state.status = "pending"
    })
    .addCase(productsFetch.fulfilled, (state, action) => {
      state.items = action.payload
      state.status = "success"
    })
    .addCase(productsFetch.rejected, (state, action) => {
      state.status = "rejected"
    })
    },
})

export default productsSlice.reducer