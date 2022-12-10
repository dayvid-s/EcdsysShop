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
            state.cartTotalAmount= state.cartTotalAmount+1
        },
        increaseQuantity(state, action){
            state.cartItems.map((product=>{         // this is the concept of offline first.
                if (product.productId == action.payload.productId){
                    product.quantity = action.payload.quantity+1
                }
            }))
            // console.log("ele",action.payload)
            // state.cartItems.quantity[action.payload.id] = action.;
        },
        retrieveCart(state,action){
            state.cartItems= action.payload
        }
    },
})

export const {addToCart, retrieveCart, increaseQuantity} = cartSlice.actions

export default cartSlice.reducer;