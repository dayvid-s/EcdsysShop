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
import { productsFetch } from '../../features/productsSlice'
import api from '../../services/api'
import { useSelector} from 'react-redux'
export default ({DayOffer, Text, height, width, }) => {
const navigation= useNavigation()
// useEffect(() => {
  //   async function response() {
//     const response = await api.get('/products')
//     setProducts(response.data)
//     }
//     response()
//   }, 
//   []);
const products = useSelector((state) => state.products);
const productsz = ['.12.12','21'] 
const recommendedProducts = products.items.filter(checkProducts);
console.log(recommendedProducts)
function checkProducts(product) {
  if(DayOffer ==true){
    if( product.isDayOffer == true){
        return product };
      }else{
        if( product.isRecommended == true){
        {console.log(product)}
        return product }}}

  const dispatch = useDispatch()
  const selectItem = (item) => dispatch({
    type: 'ADD_TO_CART', payload:item,
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
      recommendedProducts.map((item,id) =>{     //forma diferente, pois eu passo como props
        return(                   // o item que vai ser mapeado 
          <WrapperProducts key={id} 
          onPress={()=>{  navigation.push('About', {
            item: item,
          });}}
          // onPress={()=>{onSubmitTask(item) }}
          >
            <LinearGradient style={{borderRadius:12,zIndex: 0}}
              colors={["#circle at 10% 20%, rgb(35,35,35) 0%", "rgb(20,20, 20) 90.2%)"]}
            >
              <Image
              source={{uri:item.mainPhoto}}
              style={{
                borderRadius:10,
                width:width,
                height:height,
                resizeMode:'contain',
              }}
              ></Image>
            </LinearGradient>
            <ProductInfoText></ProductInfoText>
            <ProductInfoText DayOffer={DayOffer} >{item.name}</ProductInfoText>
            <ProductPriceText DayOffer={DayOffer} >R${item.price}</ProductPriceText>
          </WrapperProducts>
      )})}
    </ProductArea>  
  </Container>
)}