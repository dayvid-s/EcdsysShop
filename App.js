import React, { useEffect } from 'react';
import {useColorScheme} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './src/stacks/MainStack';
import { ThemeProvider } from 'styled-components';
import themes from './src/theme'
import {useFonts} from 'expo-font'
import * as SplashScreen from 'expo-splash-screen';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider as ReduxProvider } from 'react-redux'
import store from './redux/store'

export default function App() {
  const deviceTheme = useColorScheme();
  const theme = themes[deviceTheme] || theme.dark
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
    
  <ReduxProvider store={store} >
    <PaperProvider>
      <ThemeProvider theme={theme}>
        <NavigationContainer
        theme={{ colors: { background: deviceTheme === 'dark' ? '#000' : '#fff'}}}
        // I already have a theme with styled components, but this is to solve 
        //when the page stays flickering at navigation.
        >
          <MainStack></MainStack>
        </NavigationContainer>
      </ThemeProvider>
    </PaperProvider>
  </ReduxProvider>
  );
}
