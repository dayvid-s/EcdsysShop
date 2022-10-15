import React from 'react';
import {useColorScheme} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './src/stacks/MainStack';
import { ThemeProvider } from 'styled-components';
import themes from './src/theme'

export default function App() {
  const deviceTheme = useColorScheme();
  console.log(deviceTheme)
  const theme = themes[deviceTheme] || theme.dark
  return (
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <MainStack></MainStack>
        </NavigationContainer>
        </ThemeProvider>
  );
}
