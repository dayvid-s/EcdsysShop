import React, { useEffect, useState } from 'react'
import { Image,ScrollView } from 'react-native'
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
import { addToHistoric } from '../../redux/features/productHistoricSlice'



export default ({typeOfPage, searchWord, text, height, width, productOnScreen, lastProduct }) => {
  const navigation= useNavigation()
  const products = useSelector((state) => state.products);
  const productsFiltered = products.items?.filter(checkProducts);
  const dispatch = useDispatch()
  const historic= useSelector((state) => state.historic)
  const currentTheme = useSelector((state) => state.theme.currentTheme);
  
  
  
  function checkProducts(product) {
    if(typeOfPage== "DayOffer" && product.isDayOffer){
        return product };
    if ( typeOfPage=="Recommended" && product.isRecommended == true){
      return product }
    if ( typeOfPage=="YourSearch" && product.isRecommended == true){
      return product }
    if ( typeOfPage=="SearchProduct" && product.name.includes(searchWord)  ){
      return product }
    
    if ( typeOfPage=="YourInterest" && product.category== lastProduct?.category  ){
      return product }

    if ( typeOfPage=="About" && product.name!= productOnScreen.name 
          && product.category == productOnScreen.category ){ 
      return product }
    }
  

  const viewProduct=(product)=>{
    dispatch(addToHistoric(product))
    navigation.push('About', {
      product: product,
    })

  }
  useEffect(() => {
    dispatch(productsFetch())
  }, [dispatch]);


  return (
    <Container>
      <TextInfo>{ productsFiltered.length>0? text : ''}</TextInfo>
        <ScrollView horizontal={typeOfPage=='YourSearch'? true: false}  >
      <ProductArea quantity={productsFiltered.length} >

        {             
        productsFiltered?.map((product,id) =>{     
          return(                   
            <WrapperProducts typeOfPage={typeOfPage}  key={id} onPress={()=> viewProduct(product)}
            >
              <LinearGradient style={{borderRadius:12,zIndex: 0}}
              colors={currentTheme=='dark'?
              ["#circle at 10% 20%, rgb(35,35,35) 0%", "rgb(20,20, 20) 90.2%)"] :
              ["#circle at 10% 20%, rgb(230,230,230) 0%", "rgb(240,240, 240) 90.2%)"]
            }
              >
                <Image source={{uri:product.mainPhoto}}
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
        </ScrollView>
    </Container>
)}