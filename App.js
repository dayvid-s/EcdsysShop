import React, { useEffect } from 'react';
import {useColorScheme, View} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './src/stacks/MainStack';
import { ThemeProvider } from 'styled-components';
import themes from './src/theme'
import {useFonts} from 'expo-font'
import * as SplashScreen from 'expo-splash-screen';



export default function App() {
  const deviceTheme = useColorScheme();
  const theme = themes[deviceTheme] || theme.dark
  let [fontsLoaded,error] = useFonts({
      'Hard': require('./src/assets/fonts/AvenirLTStd-Black.otf'),
      'Medium': require('./src/assets/fonts/AvenirLTStd-Roman.otf'),
      'Easy': require('./src/assets/fonts/AvenirLTStd-Book.otf')
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
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <MainStack></MainStack>
        </NavigationContainer>
        </ThemeProvider>
  );
}
