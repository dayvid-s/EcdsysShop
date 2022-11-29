import { View, Text } from 'react-native'
import React from 'react'
import MainStack from './AppRoutes/MainStack'
import AuthRoutes from './AuthRoutes'
import Preload from '../screens/Preload'

export default() =>{
    const signed= false;
    const loading = false;
      
    if(loading){
        return <Preload></Preload>
    }
    return (
        signed? <MainStack/> : <AuthRoutes/>
  )
}