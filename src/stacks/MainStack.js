import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../src/screens/Home'
import Preload from '../../src/screens/Preload';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import Cart from '../../src/screens/Cart';
import MainDrawer from './MainDrawer'; 

const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator screenOptions={{headerShown: false}}> 
        <Stack.Screen name ='MainDrawer' component={MainDrawer} ></Stack.Screen>
        <Stack.Screen name ='Preload' component={Preload}></Stack.Screen>
        <Stack.Screen name ='SignUp' component={SignUp}></Stack.Screen>
        <Stack.Screen name ='SignIn' component={SignIn}></Stack.Screen>
        <Stack.Screen name ='Home' component={Home}></Stack.Screen>
        <Stack.Screen name ='Cart' component={Cart} ></Stack.Screen>
    </Stack.Navigator>
    )