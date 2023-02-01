import { createSlice } from '@reduxjs/toolkit'
import * as NavigationBar from 'expo-navigation-bar'

interface themeState{
  toggleTheme: boolean
  currentTheme: 'dark' | 'light'
  
}

const initialState : themeState = {
  toggleTheme: true,
  currentTheme: 'dark'
}

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers:{
    changeTheme(state){
      state.toggleTheme= !state.toggleTheme
      if(state.currentTheme=== 'dark'){
        state.currentTheme= 'light'
        setTimeout(() => {
          NavigationBar.setBackgroundColorAsync('white')
        }, 300)
                
      }else{
        setTimeout(() => {
          NavigationBar.setBackgroundColorAsync('#000')
        }, 300)
        state.currentTheme= 'dark'
      }
    },
  }
})

export const {changeTheme} = themeSlice.actions
export default themeSlice.reducer