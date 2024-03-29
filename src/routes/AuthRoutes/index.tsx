import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import {SignUp} from '../../screens/SignUp'
import {SignIn} from '../../screens/SignIn'
import {ForgotPassword} from '../../screens/ForgotPassword'

const Stack = createStackNavigator()

export const AuthRoutes = () =>{
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name='SignUp' component={SignUp} />
      <Stack.Screen name='SignIn' component={SignIn} />
      <Stack.Screen name='ForgotPassword' component={ForgotPassword} />
    </Stack.Navigator>
  )
}