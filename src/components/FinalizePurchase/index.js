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
import { addToCart } from '../../redux/features/cartSlice'
import { firebase } from './../../services/firebase-config';
import { useSelector } from 'react-redux'
import { Alert } from 'react-native'

export default ({item})=> {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user.userData); 
  const cart = useSelector((state) => state.cart.cartItems);

  // const handleAddToCart = (product)=>{
    //   }
    const handleAddToCart = (product)=>{
      // Alert.alert(product.id)
      cart.forEach(element => {
        if(element.product.id == product.id){
          // console.log(product.id,'é igual', element.product.id)
          //significa que já tem o produto no carrinho
          
          
          
        }else{
          // console.log(product.id,'é diferente de ', element.product.id)
          // significa que não tem o produto no carrinho.
          let uid = user.uid
            firebase.firestore().collection('cartItems')  
            .add({
              uid: uid,
              product: product,
              quantity:1
            })
              dispatch(addToCart(product))
      }
    });
    Alert.alert(product.id)  
    // if(product.id)
  }

  return (
    <ButtonsWrapper>
              
      <Button >
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
    
      <ButtonSendToCart onPress={()=>{handleAddToCart(item) }} >
        <ButtonText purple={true} >Adicionar no carrinho</ButtonText>
      </ButtonSendToCart>
  
    
    </ButtonsWrapper>
   
   
    )
}