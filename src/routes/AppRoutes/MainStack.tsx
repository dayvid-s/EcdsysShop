import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../../screens/Home'
import Cart from '../../screens/Cart'
import About from '../../screens/About'
import MainDrawer from './MainDrawer' 
import SearchProduct from '../../screens/SearchProduct'

const Stack = createStackNavigator()

export const MainStack = () => (
  <Stack.Navigator screenOptions={{headerShown: false}} > 
    <Stack.Screen name ='MainDrawer' component={MainDrawer} ></Stack.Screen>
    <Stack.Screen name ='Home' component={Home}></Stack.Screen>

    <Stack.Screen
      options={{ detachPreviousScreen:true, presentation:'transparentModal' }}
      name ='SearchProduct' component={SearchProduct} >
    </Stack.Screen>
            
    <Stack.Screen name ='Cart' component={Cart} ></Stack.Screen>
    <Stack.Screen name ='About' component={About} ></Stack.Screen>
  </Stack.Navigator>
)