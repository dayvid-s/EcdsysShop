import { createSlice } from '@reduxjs/toolkit'

// interface cartState{
//     cartItems: Array<['user','']>
//     cartTotalQuantity: number
//     cartTotalAmount: number
// }

// const initialState : cartState = {
const initialState  = {
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
    increaseQuantity(state, action){
      state.cartItems.map((product=>{         // this is the concept of offline first.
        if (product.productId == action.payload.productId){
          product.quantity = action.payload.quantity+1
        }
      }))
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

export const {addToCart, retrieveCart, increaseQuantity, getTotals, clearCart} = cartSlice.actions

export default cartSlice.reducer