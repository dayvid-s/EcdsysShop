import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartItems: [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0 

}
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{
        addToCart(state, action){
            state.cartItems.push(action.payload);
        },
        retrieveCart(state,action){
            state.cartItems= action.payload
        }
    },
})

export const {addToCart, retrieveCart} = cartSlice.actions

export default cartSlice.reducer;