import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';
import themes from './src/theme'
import {useFonts} from 'expo-font'
import * as SplashScreen from 'expo-splash-screen';
import { Provider as PaperProvider } from 'react-native-paper';
import { useSelector } from 'react-redux'
import { StatusBar } from 'react-native';
import Routes from './src/routes';

export default function App() {
  const currentTheme = useSelector((state) => state.theme.currentTheme);
  const theme = themes[currentTheme] || theme.dark


  let [fontsLoaded,error] = useFonts({
      "Hard": require('./src/assets/fonts/Roboto-Bold.ttf'),
      "Medium": require('./src/assets/fonts/Roboto-Medium.ttf'),
      'Easy': require('./src/assets/fonts/Roboto-Regular.ttf')
  })
  
  useEffect(() => {
    if (!fontsLoaded) {
        return undefined;
      }
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  if (!fontsLoaded) {
    return undefined;
  } else {
    SplashScreen.hideAsync();
  }

  return (
    <PaperProvider>
      <ThemeProvider theme={theme} themename={'#fff'}>
        <NavigationContainer    //this isn't working 
        // theme={{ colors: { background: deviceTheme === 'dark' ? '#000' : '#fff'}}}
        //this isn't working
        // I already have a theme with styled components, but this is to solve 
        //when the page render at white color in the navigation
        >

            <StatusBar animated={true} 
            backgroundColor={currentTheme==='light'? '#fff': '#000'}   ></StatusBar>
            
          <Routes></Routes>
        </NavigationContainer>
      </ThemeProvider>
    </PaperProvider>
  );
}
