import {configureStore} from '@reduxjs/toolkit'
import cartReducer from './features/cartSlice'
import productsReducer from './features/productsSlice'
import userReducer from './features/userSlice'
import historicReducer from  './features/productHistoricSlice'

export default configureStore({
    reducer: {
        cart: cartReducer,
        user : userReducer,
        products : productsReducer,
        historic: historicReducer
    }
  })
