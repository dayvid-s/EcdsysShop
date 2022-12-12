import React, { useEffect } from 'react'
import {
  Container,
  TextInfo,
  ProductInfoText,
  ProductPriceText,
  ProductsWrapper,
  ProductTextWrapper,
  ProductInfoWrapper,
  BottomIconsArea,
  TouchableIconArea,
  RemoveProductText,
  ImageWrapper,
  InfoWrapper,
  ProductRemoveWrapper,
  ProductArea,
} from './styles'
import { useTheme } from 'styled-components'
import { useNavigation } from '@react-navigation/native'
import { 
  AntDesign,
  FontAwesome5
 } from '@expo/vector-icons';
import { Image, Alert } from 'react-native';
import { useSelector, useDispatch} from 'react-redux'
import { retrieveCart, increaseQuantity, getTotals } from '../../redux/features/cartSlice';
import { firebase, firestore } from './../../services/firebase-config';
import {doc,updateDoc, collection, query, where, getDocs, onSnapshot, FirestoreError } from "firebase/firestore";
import { ActivityIndicator } from 'react-native-paper';
import { useState } from 'react';


export default ({product}) => {
  const theme = useTheme()
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart.cartItems); 
  const user = useSelector((state) => state.user.userData);
  const totalQuantity = useSelector(state => state.cart.cartTotalAmount)
  const cartRef = collection(firestore, "cartItems");
  const [loading, setLoading]= useState(false)
    
  
  useEffect(()=>{
    dispatch(getTotals())
  },[])

  const goToAbout =(product)=>{
    navigation.push('About', {
      product: product.product,
    })
  }
  const decreaseQuantity  = async (product)=>{
    setLoading(true)
    if(product.quantity ==1){
      const q1 = query(cartRef, 
        where("productId", "==", product.productId),where("uid", "==", user.uid));
        const querySnapshot = await getDocs(q1);
        querySnapshot.forEach( async (doc) => {
          await firestore.collection('cartItems').doc(doc.id)
          .delete()  
        }) 
        setLoading(false)
      }else{
        setLoading(true)
        
        const q1 = query(cartRef, 
          where("productId", "==", product.productId),where("uid", "==", user.uid));
          const querySnapshot = await getDocs(q1);
          querySnapshot.forEach( async (doc) => {
            await firestore.collection('cartItems').doc(doc.id)
            .update({
              quantity:doc.data().quantity-1
            })});
            setLoading(false)
          }
          
        }
        // dispatch(increaseQuantity)
        const handleIncreaseQuantity = async (product)=>{
          // console.log(product.quantity)
          setLoading(true)
          // dispatch(increaseQuantity(product))
          const q1 = query(cartRef, 
            where("productId", "==", product.productId),where("uid", "==", user.uid));
            const querySnapshot = await getDocs(q1);
            querySnapshot.forEach( async (doc) => {
              await firestore.collection('cartItems').doc(doc.id)
              .update({
                quantity:doc.data().quantity+1
              })});
              setLoading(false)
            }
            
            
    const removeProductFromCart = async (product)=>{
      setLoading(true)
      const q1 = query(cartRef, 
        where("productId", "==", product.productId),where("uid", "==", user.uid));
        const querySnapshot = await getDocs(q1);
        querySnapshot.forEach( async (doc) => {
          await firestore.collection('cartItems').doc(doc.id)
          .delete()  
        })
        setLoading(false)
      }


  return (
   
    <Container>
    {/* {             
      cart?.map((product,id) =>{     
      return(                     */}

        <ProductArea >
          {loading?
            <ActivityIndicator style={{top:20,marginBottom:-80}}
            animating={true} color={"#7159c1"}  size={80}
              ></ActivityIndicator>
            :null   }
          <ProductsWrapper loading={loading} >
              <ImageWrapper onPress={()=>{ goToAbout(product)}}>
                <Image
                source={{uri:product.product?.mainPhoto}}
                style={{
                  borderRadius:10, width:130,
                  height:100, resizeMode:'contain',
                  marginLeft:-20,
                }}
                ></Image>
              </ImageWrapper>
              <ProductInfoWrapper>
              <InfoWrapper onPress={()=>{ goToAbout(product)}}>
              <ProductTextWrapper>
                <ProductInfoText  >{product.product?.name}</ProductInfoText>
              </ProductTextWrapper>
                <ProductPriceText  >R$ {product.product?.price}</ProductPriceText>
              </InfoWrapper>
              <BottomIconsArea>
                <TouchableIconArea onPress={()=>{decreaseQuantity(product)}}>
                  <AntDesign 
                name="minus" size={20} color="#fff" 
                />
                </TouchableIconArea>
                <TextInfo  >    {product.quantity}   </TextInfo>
                <TouchableIconArea onPress={()=>{handleIncreaseQuantity(product)}} >
                  <AntDesign 
                  name="plus" size={20} color="#fff" />
                </TouchableIconArea>
                <ProductRemoveWrapper onPress={()=>{removeProductFromCart(product)}} >
                  <RemoveProductText>Remover</RemoveProductText>
                </ProductRemoveWrapper>
              </BottomIconsArea>
              </ProductInfoWrapper>
          </ProductsWrapper>
        </ProductArea>
    {/* )})}  */}
  </Container>
)}
