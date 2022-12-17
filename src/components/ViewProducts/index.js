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
export default ({typeOfPage, searchWord, Text, height, width, }) => {
  const navigation= useNavigation()
  const products = useSelector((state) => state.products);
  const productsFiltered = products.items.filter(checkProducts);

  // console.log(products[2])
  function checkProducts(product) {
    if(typeOfPage== "DayOffer" && product.isDayOffer){
        return product };
    if ( typeOfPage=="Recommended" && product.isRecommended == true){
      return product }
    if ( typeOfPage=="SearchProduct" && product.name.includes(searchWord)  ){
      return product }
    }
   
  
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(productsFetch())
  }, [dispatch]);
// {console.log(productsFiltered.length)}
return (
  <Container>
    <TextInfo>{Text}</TextInfo>
    <ProductArea quantity={productsFiltered.length} >
      {             // aqui vai ser uma renderização condicional, mas de uma f
      productsFiltered?.map((product,id) =>{     //forma diferente, pois eu passo como props
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
            <ProductInfoText typeOfPage={typeOfPage} >{product.name}</ProductInfoText>
            <ProductPriceText typeOfPage={typeOfPage} >R${product.price}</ProductPriceText>
          </WrapperProducts>
      )})}
    </ProductArea>  
  </Container>
)}