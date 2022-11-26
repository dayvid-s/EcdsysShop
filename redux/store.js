import {configureStore} from '@reduxjs/toolkit'
import cartReducer from '../src/features/cartSlice'
import productsReducer from '../src/features/productsSlice'

export default configureStore({
    reducer: {
        cart: cartReducer,
        products : productsReducer
    }
  })
