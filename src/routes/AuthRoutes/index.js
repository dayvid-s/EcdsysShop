import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import SignUp from '../../screens/SignUp'
import SignIn from '../../screens/SignIn'
import ForgotPassword from '../../screens/ForgotPassword'

const Stack = createStackNavigator()

export default () =>{
  return (
    <Stack.Navigator>
        <Stack.Screen name='SignUp' component={SignUp} options={{headerShown:false}}/>
        <Stack.Screen name='SignIn' component={SignIn} options={{headerShown:false}} />
        <Stack.Screen name='ForgotPassword' component={ForgotPassword} options={{headerShown:false}} />
    </Stack.Navigator>
    )
}