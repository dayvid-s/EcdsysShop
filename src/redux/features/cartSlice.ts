import { createSlice } from '@reduxjs/toolkit'

interface ICartProducts {
    quantity: number
    product:{
      productId: string
      category:string
      name:string
      price: number
      mainPhoto: string
      secondaryPhotos: string[]
      description: string
      specifications: string[]
      rating: number
      evaluationsTotal: number
      isDayOffer: boolean
      isRecommended: boolean
      knownBy: string 
    }
  
}
interface cartState{  
    cartItems: ICartProducts[]
    cartTotalQuantity: number
    cartTotalAmount: number
}

const initialState : cartState = {
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0 

}
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers:{
    addToCart(state, action){
      state.cartItems.push(action.payload)
    },
    retrieveCart(state,action){
      state.cartItems= action.payload
    },
    clearCart(state){
      state.cartTotalAmount = 0
      state.cartTotalQuantity =0
    },
    getTotals(state ) {
      let accumulator = 0
      let sum = 0
            
      state.cartTotalQuantity = state.cartItems.reduce(
        (prevVal, elem) =>prevVal 
                +elem.quantity, 0 )

      state.cartItems.map((product)=>{
        sum= product.quantity*product.product.price
        accumulator= accumulator+sum
      })
      state.cartTotalAmount=  accumulator
    },
  }
})

export const {addToCart, retrieveCart, getTotals, clearCart} = cartSlice.actions

export default cartSlice.reducer