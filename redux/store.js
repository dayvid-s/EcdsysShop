import {configureStore} from '@reduxjs/toolkit'
import cartReducer from '../src/features/cartSlice'

export default configureStore({
    reducer: {
        cart: cartReducer
    }
  })

//Isso cria uma loja Redux e também configura automaticamente a 
//extensão Redux DevTools para que você possa inspecionar a loja durante o desenvolvimento.