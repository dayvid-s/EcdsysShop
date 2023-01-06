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
  Image,
  InfoWrapper,
  ProductRemoveWrapper,
  ProductArea,
  ActivityIndicator
} from './styles'
import { useNavigation } from '@react-navigation/native'
import { 
  AntDesign,
} from '@expo/vector-icons'


import { useSelector, useDispatch} from 'react-redux'
import { getTotals } from '../../redux/features/cartSlice';
import { firestore } from './../../services/firebase-config';
import {collection, query, where, getDocs} from "firebase/firestore";
import { useState } from 'react';
import { numberFormat } from '../../utils/numberFormat';

export default ({product}) => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart.cartItems); 
  const user = useSelector((state) => state.user.userData);
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
        const handleIncreaseQuantity = async (product)=>{
          setLoading(true)
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
        <ProductArea >
          {loading?
            <ActivityIndicator 
                animating={true} color={"#7159c1"}  size={80}>
            </ActivityIndicator>
            :null   }
          <ProductsWrapper loading={loading} >
              <ImageWrapper onPress={()=>{ goToAbout(product)}}>
                <Image
                source={{uri:product.product?.mainPhoto}}
                ></Image>
              </ImageWrapper>


              <ProductInfoWrapper>
                <InfoWrapper onPress={()=>{ goToAbout(product)}}>
                <ProductTextWrapper>
                  <ProductInfoText  >{product.product?.name}</ProductInfoText>
                </ProductTextWrapper>
                  <ProductPriceText  >{numberFormat(product.product?.price)}</ProductPriceText>
                </InfoWrapper>
                <BottomIconsArea>

                  
                  <TouchableIconArea onPress={()=>{decreaseQuantity(product)}}>
                    <AntDesign name="minus" size={20} color="#fff" />
                  </TouchableIconArea>
                  <TextInfo  >    {product.quantity}   </TextInfo>
                  <TouchableIconArea onPress={()=>{handleIncreaseQuantity(product)}} >
                    <AntDesign  name="plus" size={20} color="#fff" />
                  </TouchableIconArea>


                  <ProductRemoveWrapper onPress={()=>{removeProductFromCart(product)}} >
                    <RemoveProductText>Remover</RemoveProductText>
                  </ProductRemoveWrapper>
                </BottomIconsArea>
              </ProductInfoWrapper>
          </ProductsWrapper>
        </ProductArea>
  </Container>
)}
