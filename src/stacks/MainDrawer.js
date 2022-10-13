import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../../src/screens/Home'
import Preload from '../../src/screens/Preload';
import SignInAndSignUp from '../screens/SignInAndSignUp';
import Cart from '../../src/screens/Cart';


const Drawer = createDrawerNavigator();

export default () => (
    <Drawer.Navigator  screenOptions={{headerShown: false, }} initialRouteName='SignInAndSignUp' >
        <Drawer.Screen name ='Preload' component={Preload}></Drawer.Screen>
        <Drawer.Screen name ='SignInAndSignUp' component={SignInAndSignUp}></Drawer.Screen>
        <Drawer.Screen name ='Home' component={Home}></Drawer.Screen>
        <Drawer.Screen name ='Cart' component={Cart} ></Drawer.Screen>
    </Drawer.Navigator>
    )