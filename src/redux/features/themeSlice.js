import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    toggleTheme: true,
    currentTheme: 'dark'
}
const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers:{
        changeTheme(state){
            state.toggleTheme= !state.toggleTheme
            if(state.currentTheme=== 'dark'){
                state.currentTheme= 'light'
                
            }else{
                state.currentTheme= 'dark'
            }
        },
    }
})

export const {changeTheme} = themeSlice.actions
export default themeSlice.reducer;