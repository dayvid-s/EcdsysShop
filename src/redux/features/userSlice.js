import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    userData:null,
}
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers:{
        changeUserInfo(state,action){
            state.userData = action.payload
        },
        loading(state, action){
            // state.
        }
    },
})
    
export const {changeUserInfo, } = userSlice.actions

export default userSlice.reducer;