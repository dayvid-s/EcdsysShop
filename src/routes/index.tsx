import React, { useEffect, useState } from 'react'
import {MainStack} from './AppRoutes/MainStack'
import {AuthRoutes} from './AuthRoutes'
import Preload from '../screens/Preload'
import  AsyncStorage  from '@react-native-async-storage/async-storage'
import {useDispatch} from 'react-redux'
import { useSelector} from 'react-redux'
import {changeUserInfo} from '../redux/features/userSlice'



export default() =>{
  const user = useSelector((state) => state.user)
  const [loadingAuth, setLoadingAuth ]= useState(false)
  const dispatch = useDispatch()
    
  useEffect (() =>{
    setLoadingAuth(true)
    const verifyUser = async ()=>{
      const storageUser = await AsyncStorage.getItem('userData')
      if(storageUser){
        dispatch(changeUserInfo(JSON.parse(storageUser))) 
        setLoadingAuth(false)
      }
      setLoadingAuth(false)
    }
    verifyUser()
  },[])
    
  if(loadingAuth) return <Preload/>

  return (user.userData !=null?  
    <MainStack/> : <AuthRoutes/>
  )}

