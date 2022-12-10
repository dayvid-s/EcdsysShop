import React, { useEffect, useState } from 'react'
import { Image } from 'react-native'
import {
  Container,
  TextInfo,
  ProductInfoText,
  ProductPriceText,
  ProductArea,
  WrapperProducts,
} from './styles'
import {LinearGradient} from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native'
import {useDispatch} from 'react-redux'
import { productsFetch } from '../../redux/features/productsSlice'
import { useSelector} from 'react-redux'
export default ({DayOffer, Text, height, width, }) => {

  const navigation= useNavigation()
  const products = useSelector((state) => state.products);
  const recommendedProducts = products.items.filter(checkProducts);

  function checkProducts(product) {
    if(DayOffer ==true){
    if( product.isDayOffer == true){
        return product };
      }else{
        if( product.isRecommended == true){
        return product }}}

  const dispatch = useDispatch()
  const selectItem = (product) => dispatch({
    type: 'ADD_TO_CART', payload:product,
  })
    
  useEffect(() => {
    dispatch(productsFetch())
    // para preservar mémoria
  }, [dispatch]);

return (
  <Container>
    <TextInfo>{Text}</TextInfo>
    <ProductArea>
      {             // aqui vai ser uma renderização condicional, mas de uma f
      recommendedProducts?.map((product,id) =>{     //forma diferente, pois eu passo como props
        return(                   // o product que vai ser mapeado 
          <WrapperProducts key={id} 
          onPress={()=>{  navigation.push('About', {
            product: product,
          });}}
          >
            <LinearGradient style={{borderRadius:12,zIndex: 0}}
              colors={["#circle at 10% 20%, rgb(35,35,35) 0%", "rgb(20,20, 20) 90.2%)"]}
            >
              <Image
              source={{uri:product.mainPhoto}}
              style={{
                borderRadius:10,
                width:width,
                height:height,
                resizeMode:'contain',
              }}
              ></Image>
            </LinearGradient>
            <ProductInfoText></ProductInfoText>
            <ProductInfoText DayOffer={DayOffer} >{product.name}</ProductInfoText>
            <ProductPriceText DayOffer={DayOffer} >R${product.price}</ProductPriceText>
          </WrapperProducts>
      )})}
    </ProductArea>  
  </Container>
)}