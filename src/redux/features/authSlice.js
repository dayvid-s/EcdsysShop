import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    isUserAuthenticated: false,

}
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        changeUserAuthentication(state,action){
            state.isUserAuthenticated = action.payload
        },
        loading(state, action){
            // state.
        }
    },
})
    
export const {changeUserAuthentication, removeAuth} = authSlice.actions

export default authSlice.reducer;