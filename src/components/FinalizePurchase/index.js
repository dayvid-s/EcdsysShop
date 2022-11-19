//TODO: API DO CORREIO/
import React from 'react'
import {
  ButtonsWrapper,
  Button,
  ButtonText,
  ButtonSendToCart
} from './styles'

import { useNavigation } from '@react-navigation/native'
import { useRoute } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'
import {useDispatch} from 'react-redux'
import { addToCart } from '../../features/cartSlice'
export default ({item})=> {
  const dispatch = useDispatch()
  const handleAddToCart = (product)=>{
    dispatch(addToCart(product))}
  return (
    <ButtonsWrapper>
              
      <Button onPress={()=>{handleAddToCart(item) }}>
        <LinearGradient style={{
          padding:16,
          borderRadius: 8,
          marginLeft: 20,
          marginRight: 20,
          justifyContent: 'center',
          alignItems: 'center', 
          marginTop: 35,
          flexDirection:'row'
      }}
        colors={["#circle at 10% 20%, rgb(61, 0, 131) 0%", "rgb(83, 03, 121) 90.2%)"]}>
          <ButtonText>Comprar agora</ButtonText>
        </LinearGradient>
          </Button>
    
      <ButtonSendToCart>
        <ButtonText purple={true} >Adicionar no carrinho</ButtonText>
      </ButtonSendToCart>
  
    
    </ButtonsWrapper>
   
   
    )
}