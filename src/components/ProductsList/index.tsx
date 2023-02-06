import React, { useEffect, useState } from 'react'
import { Image, ScrollView } from 'react-native'
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
import { useAppSelector } from '../../hooks/useAppSelector'

export default ({typeOfPage, searchWord, text, height, width, productOnScreen }) => {
  const navigation= useNavigation()
  const products = useAppSelector((state) => state.products);
  const productsFiltered = products.items?.filter(checkProducts);

  // console.log(products[2])
  function checkProducts(product) {
    if(typeOfPage== "DayOffer" && product.isDayOffer){
        return product };
    if ( typeOfPage=="Recommended" && product.isRecommended == true){
      return product }
    if ( typeOfPage=="SearchProduct" && product?.name.includes(searchWord)  ){
      return product }
    
    if ( typeOfPage=="About" && product?.name!= productOnScreen.name 
          && product.category == productOnScreen.category ){ 
      return product }
    
    }
   
  
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(productsFetch())
  }, [dispatch]);
return (
  <Container>
    <TextInfo>{ productsFiltered.length>=1? text : ''}</TextInfo>
    <ScrollView horizontal={true} >

    <ProductArea quantity={productsFiltered.length} >
      {             
      productsFiltered?.map((product,id) =>{     
        return(                   
          <WrapperProducts typeOfPage={typeOfPage}  key={id} 
          onPress={()=>{  navigation.push('About', {
            product: product,
          });}}
          >
            <LinearGradient style={{borderRadius:12,zIndex: 0}}
              colors={["#circle at 10% 20%, rgb(35,35,35) 0%", "rgb(20,20, 20) 90.2%)"]}
            >
              <Image
              source={{uri:product?.mainPhoto}}
              style={{
                borderRadius:10,
                width:width,
                height:height,
                resizeMode:'contain',
              }}
              ></Image>
            </LinearGradient>
            <ProductInfoText></ProductInfoText>
            <ProductInfoText typeOfPage={typeOfPage} >{product?.name}</ProductInfoText>
            <ProductPriceText typeOfPage={typeOfPage} >R${product?.price}</ProductPriceText>
          </WrapperProducts>
      )})}
    </ProductArea>  
      </ScrollView>
  </Container>
)}