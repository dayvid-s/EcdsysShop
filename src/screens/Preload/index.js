//TODO: animated, like nubank preload.


import { View, Text, Button } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

export default ({})=> {
    const navigation = useNavigation()
    


    const advance =()=>{
        navigation.navigate('SignIn')
    }
    return (
        <View style={{flex:1 , alignSelf:'center', backgroundColor:'green'}}>
            <Text>Preload</Text>
        </View>
    )}
