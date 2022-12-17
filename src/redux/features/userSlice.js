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
        changeUserAvatar(state, action){
            state.userData.userAvatar = action.payload
        }
    },
})
    
export const {changeUserInfo, changeUserAvatar } = userSlice.actions

export default userSlice.reducer;