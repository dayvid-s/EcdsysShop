import React, { useEffect} from 'react'
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
import { useAppSelector } from '../../hooks/useAppSelector'

import { addToHistoric } from '../../redux/features/productHistoricSlice'
import { numberFormat } from '../../utils/numberFormat'

export function ViewProducts ({typeOfPage, searchWord, text, height, width, productOnScreen, lastProduct }) {
  const navigation= useNavigation()
  const products = useAppSelector((state) => state.products)
  
  const productsFiltered = products.items?.filter(checkProducts)
  const dispatch = useDispatch()
  const currentTheme = useAppSelector((state) => state.theme.currentTheme)
  

  
  
  function checkProducts(product) {
    if(typeOfPage== 'DayOffer' && product.isDayOffer){
      return product }
    if ( typeOfPage=='Recommended' && product.isRecommended == true){
      return product }
    if ( typeOfPage=='RandomProducts' && product.isRecommended== false && product.isDayOffer== false
          &&  product.price <= 5000
    ){
      return product }
    if ( typeOfPage=='SearchProduct' && product.name.includes(searchWord)  ){
      return product }
    
    if ( typeOfPage=='YourInterest' && product.category== lastProduct?.category 
    && product.productId != lastProduct?.productId
   
    ){
      return product }

    if ( typeOfPage=='About' && product.name!= productOnScreen.name 
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
  }, [])


  return (
    <Container>
      <TextInfo>{ productsFiltered.length>0? text : ''}</TextInfo>
      <ScrollView horizontal={typeOfPage=== 'RandomProducts'|| typeOfPage=== 'YourInterest' ? true: false}  >
        <ProductArea quantity={productsFiltered.length} >

          {             
            productsFiltered?.map((product,id) =>{     
              return(                   
                <WrapperProducts typeOfPage={typeOfPage}  key={id} onPress={()=> viewProduct(product)}
                >
                  <LinearGradient style={{borderRadius:12}}
                    colors={currentTheme=='dark'?
                      ['#circle at 10% 20%, rgb(35,35,35) 0%', 'rgb(20,20, 20) 90.2%)'] :
                      ['#circle at 10% 20%, rgb(230,230,230) 0%', 'rgb(240,240, 240) 90.2%)']
                    }
                  >
                    <Image source={{uri:product.mainPhoto}}
                      style={{
                        borderRadius:10,
                        width:width,
                        height:height,
                        resizeMode:'contain',
                        // backgroundColor:'rgb(230,230,230)'
                      }}
                    ></Image>
                  </LinearGradient>
                  <ProductInfoText></ProductInfoText>
                  <ProductInfoText typeOfPage={typeOfPage} >{product.name}</ProductInfoText>
                  <ProductPriceText typeOfPage={typeOfPage} >{numberFormat(product.price)}</ProductPriceText>
                </WrapperProducts>
              )})}
        </ProductArea>  
      </ScrollView>
    </Container>
  )}