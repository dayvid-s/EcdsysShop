import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../../src/screens/Home'
import Preload from '../../src/screens/Preload';
import SignUp from '../screens/SignUp';
import SignIn from '../screens/SignIn';
import Cart from '../../src/screens/Cart';


const Drawer = createDrawerNavigator();

export default () => (
    <Drawer.Navigator  screenOptions={{headerShown: false, }} initialRouteName='SignIn' >
        <Drawer.Screen name ='Preload' component={Preload}></Drawer.Screen>
        <Drawer.Screen name ='SignUp' component={SignUp}></Drawer.Screen>
        <Drawer.Screen name ='SignIn' component={SignIn}></Drawer.Screen>
        <Drawer.Screen name ='Home' component={Home}></Drawer.Screen>
        <Drawer.Screen name ='Cart' component={Cart} ></Drawer.Screen>
    </Drawer.Navigator>
    )