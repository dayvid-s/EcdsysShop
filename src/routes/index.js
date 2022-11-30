import React, { useEffect, useState } from 'react'
import MainStack from './AppRoutes/MainStack'
import AuthRoutes from './AuthRoutes'
import Preload from '../screens/Preload'
import  AsyncStorage  from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux'
import { useSelector} from 'react-redux'
import {changeUserAuthentication} from '../redux/features/authSlice'

export default() =>{
    const auth = useSelector((state) => state.auth);
    const [loading, setLoading ]= useState(false)
    const dispatch = useDispatch()
    const [user, setUser] = useState()  // vou criar uma variavel global no redux, com os
            //dados do usuario.
   
    useEffect (() =>{
        setLoading(true)
        const verifyUser = async ()=>{
            const storageUser = await AsyncStorage.getItem('userAuth');
            if(storageUser){
                dispatch(changeUserAuthentication(true))   //its passing a payload that authenticates the user 
                setLoading(false)
            }
            setLoading(false)}
        verifyUser()
    },[])

    if(loading) return <Preload/>
    
    return (auth.isUserAuthenticated?  //here should be user.  
    <MainStack/> : <AuthRoutes/>
        )}

