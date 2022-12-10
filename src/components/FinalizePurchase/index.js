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
import { firebase, firestore } from './../../services/firebase-config';
import { useSelector } from 'react-redux'
import { Alert } from 'react-native'
import {doc,updateDoc, collection, query, where, getDocs, onSnapshot, FirestoreError } from "firebase/firestore";
import { useState } from 'react';


export default ({product})=> {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user.userData); 
  const cart = useSelector((state) => state.cart.cartItems);
  const cartRef = collection(firestore, "cartItems");
  var hasProductInCart 

  const handleAddToCart= (product)=>{
    firebase.firestore().collection('cartItems')  
    .add({
      uid: user.uid,
      product: product,
      productId: product.productId,
      quantity:1,
    })
    dispatch(addToCart(product))
  }
  
  const validateToSendProduct = async (product)=>{
    if(cart.lenght==0){
      handleAddToCart(product)
    }else{
      const q1 = query(cartRef, where("productId", "==", product.productId), where("uid", "==", user.uid));
      const querySnapshot = await getDocs(q1);
      var hasProductInCart= !querySnapshot.empty  // if has the same product at cart, this 
      //var will be true. it's a query at firestorethat returns true, if it's empty.
      
      if(hasProductInCart){
        querySnapshot.forEach( async (doc) => {
          await firestore.collection('cartItems').doc(doc.id)
          .update({
            quantity:doc.data().quantity+1
          })});
      }else{
        handleAddToCart(product)
      }
    }
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
    
      <ButtonSendToCart onPress={()=>{validateToSendProduct(product) }} >
        <ButtonText purple={true} >Adicionar no carrinho</ButtonText>
      </ButtonSendToCart>
  
    
    </ButtonsWrapper>
   
   
    )
}