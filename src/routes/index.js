import React, { useEffect, useState } from 'react'
import MainStack from './AppRoutes/MainStack'
import AuthRoutes from './AuthRoutes'
import Preload from '../screens/Preload'
import  AsyncStorage  from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux'
import { useSelector} from 'react-redux'
import {changeUserInfo} from '../redux/features/userSlice'
import {firebase} from '../services/firebase-config'
export default() =>{
    const user = useSelector((state) => state.user);
    const [loadingAuth, setLoadingAuth ]= useState(false)
    const dispatch = useDispatch()
    
   
    useEffect (() =>{
    setLoadingAuth(true)
    const verifyUser = async ()=>{
        const storageUser = await AsyncStorage.getItem('userData')
        if(storageUser){
            dispatch(changeUserInfo(JSON.parse(storageUser)))   //its passing a payload that authenticates the user 
            setLoadingAuth(false)
        }
        setLoadingAuth(false)}
        verifyUser()
    },[])

    // function onAuthStateChanged(user){
    //     {console.log(user,"user da autenticação")}
    //     dispatch(changeUserInfo(user))
    //     if(loadingAuth) setLoadingAuth(false);
    // }

    // useEffect(()=>{
    //     const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged)
    //     return subscriber;
    // },[])
    
    if(loadingAuth) return <Preload/>

    return (user.userData !=null?  //here should be user.  
    <MainStack/> : <AuthRoutes/>
        )}

