import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { ThemeProvider } from 'styled-components'
import themes from './theme'
import {useFonts} from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { Provider as PaperProvider } from 'react-native-paper'
import { StatusBar } from 'react-native'
import Routes from './routes'
import { useAppSelector } from './hooks/useAppSelector'



export function App () {
  const currentTheme = useAppSelector((state) => state.theme.currentTheme)
  const theme = currentTheme == 'light'? themes.lightTheme : themes.darkTheme  
  //will get default theme, otherwise will be dark theme

  const [fontsLoaded] = useFonts({
    'Hard': require('../src/assets/fonts/Roboto-Bold.ttf'),
    'Medium': require('../src/assets/fonts/Roboto-Medium.ttf'),
    'Easy': require('../src/assets/fonts/Roboto-Regular.ttf')
  })
  
  useEffect(() => {

    if (!fontsLoaded) {
      return undefined
    }
    async function getFonts() {
      await SplashScreen.preventAutoHideAsync()
    }
    getFonts()
  }, [])

  if (!fontsLoaded) {
    return undefined
  } else {
    SplashScreen.hideAsync()
  }

  return (
    <PaperProvider>
      <ThemeProvider theme={theme}>
        <NavigationContainer   
          theme={{ colors: { background: currentTheme === 'dark' ? '#000' : '#fff'}}}
        // I already have a theme with styled components, but this is to solve the bug
        //when the page render at white color in the navigation
        >
          <StatusBar 
            animated={true}  
            barStyle={currentTheme === 'dark' ? 'light-content' : 'dark-content'}
            backgroundColor={currentTheme==='light'? '#fcfcfc': '#000'}
          ></StatusBar>
          <Routes></Routes>
        </NavigationContainer>
      </ThemeProvider>
    </PaperProvider>
  )
}
