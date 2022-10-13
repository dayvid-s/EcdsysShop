import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../src/screens/Home'
import Preload from '../../src/screens/Preload';
import SignInAndSignUp from '../screens/SignInAndSignUp';
import Cart from '../../src/screens/Cart';
import MainDrawer from './MainDrawer'; 

const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator screenOptions={{headerShown: false}}> 
        <Stack.Screen name ='MainDrawer' component={MainDrawer} ></Stack.Screen>
        <Stack.Screen name ='Preload' component={Preload}></Stack.Screen>
        <Stack.Screen name ='SignInAndSignUp' component={SignInAndSignUp}></Stack.Screen>
        <Stack.Screen name ='Home' component={Home}></Stack.Screen>
        <Stack.Screen name ='Cart' component={Cart} ></Stack.Screen>
    </Stack.Navigator>
    )