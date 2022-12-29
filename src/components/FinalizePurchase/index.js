//TODO: API DO CORREIO/
import React from 'react'
import {
  ButtonsWrapper,
  Button,
  ButtonText,
  ButtonSendToCart,
  BottomSheetArea
} from './styles'

import { useNavigation } from '@react-navigation/native'
import { useRoute } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'
import {useDispatch} from 'react-redux'
import { addToCart } from '../../redux/features/cartSlice'
import { firebase, firestore } from './../../services/firebase-config';
import { useSelector } from 'react-redux'
import { Alert, Keyboard, View } from 'react-native'
import {doc,updateDoc, collection, query, where, getDocs, onSnapshot, FirestoreError } from "firebase/firestore";
import { useState } from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import { useRef } from 'react';
import { Text } from 'react-native';
import CartBottomSheetComponent from '../CartBottomSheetComponent'

export default ({product})=> {
  const bottomSheetRef = useRef();
  const [indexz, setIndexz]= useState('100%')
  const openBottomSheet = () => bottomSheetRef.current?.expand()
  const closeBottomSheet = () => bottomSheetRef.current?.close()
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user.userData); 
  const cart = useSelector((state) => state.cart.cartItems);
  const cartRef = collection(firestore, "cartItems");
  const currentTheme = useSelector((state) => state.theme.currentTheme);
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
    openBottomSheet()
  }
  
  const validateToSendProduct = async (product)=>{
    if(cart.lenght==0){
      handleAddToCart(product)
    }else{
      const q1 = query(cartRef, where("productId", "==", product.productId), where("uid", "==", user.uid));
      const querySnapshot = await getDocs(q1);
      hasProductInCart= !querySnapshot.empty  // if has the same product at cart, this 
      //var will be true. it's a query at firestorethat returns true, if it's empty.
      
      if(hasProductInCart){
        querySnapshot.forEach( async (doc) => {
          await firestore.collection('cartItems').doc(doc.id)
          .update({
            quantity:doc.data().quantity+1
          })});
          openBottomSheet()
        }else{
          handleAddToCart(product)
          openBottomSheet()
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
          <ButtonText currentTheme={currentTheme} >Comprar agora</ButtonText>
        </LinearGradient>
          </Button>
    
      <ButtonSendToCart onPress={()=>{validateToSendProduct(product) }} >
        <ButtonText currentTheme={currentTheme}  purple={true} >Adicionar no carrinho</ButtonText>
      </ButtonSendToCart>
      
      
    
      <BottomSheetArea>
        <BottomSheet
        handleIndicatorStyle={{color:'#000'}}
          handleStyle={{color:'#000'}}
          backgroundStyle={{backgroundColor:'#fff',}}
          enablePanDownToClose={true}
          ref={bottomSheetRef}
          index={-1}
          snapPoints={[1,indexz]}
          onChange={()=>{Keyboard.dismiss()}}
          detached={false}
          >
                        {/* <View style={{ backgroundColor:'#000', zIndex:0.8}} >
              <Text>eae</Text>
            </View> */}

          <CartBottomSheetComponent
              product={product}
              // value={text}
              // setText={setText}
              // changeInfo = {emailOrName}
              setIndex={setIndexz}
              closeBottomSheet={()=>{closeBottomSheet()}}  // function that when is called, set the 
              openModal={()=>{openModal()}}                 //father component, incredible.  
            >                                
          </CartBottomSheetComponent>  
        </BottomSheet>
      </BottomSheetArea>
    </ButtonsWrapper>



    )
}