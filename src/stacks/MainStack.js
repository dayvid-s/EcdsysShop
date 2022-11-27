import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../src/screens/Home'
import Preload from '../../src/screens/Preload';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import Cart from '../../src/screens/Cart';
import About from '../screens/About';
import MainDrawer from './MainDrawer'; 
import SearchProduct from '../../src/screens/SearchProduct';

const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator 
    // initialRouteName='Cart'
    screenOptions={{headerShown: false}}
    // to solve the problem of openDrawer, put a token and two routes.
    > 
        <Stack.Screen name ='SignUp' component={SignUp}></Stack.Screen>
        <Stack.Screen name ='SignIn' component= {SignIn}></Stack.Screen>
        <Stack.Screen name ='Preload' component={Preload}></Stack.Screen>
        <Stack.Screen name ='MainDrawer' component={MainDrawer} ></Stack.Screen>
        <Stack.Screen name ='Home' component={Home}></Stack.Screen>
        <Stack.Screen name ='SearchProduct' component={SearchProduct} ></Stack.Screen>
        <Stack.Screen name ='Cart' component={Cart} ></Stack.Screen>
        <Stack.Screen name ='About' component={About} ></Stack.Screen>
    </Stack.Navigator>
    )