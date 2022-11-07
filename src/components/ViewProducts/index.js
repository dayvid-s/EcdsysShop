import React from 'react'
import { Image } from 'react-native'
import {
  Container,
  TextInfo,
  ProductInfoText,
  ProductPriceText,
  ProductArea,
  WrapperProducts,
} from './styles'
import {Products} from '../../data/products'
import {LinearGradient} from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native'

export default ({DayOffer, Text, height, width, }) => {
  const navigation= useNavigation()
  const recommendedProducts = Products.filter(checkProducts);
  
  function checkProducts(product) {
    if(DayOffer ==true){
      if( product.isDayOffer == true){
        return product };
    }else{
      if( product.isRecomended == true){
        return product }}}


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
            >
              <LinearGradient style={{borderRadius:12,zIndex: 0}}
                colors={["#circle at 10% 20%, rgb(24,25,26) 0%", "rgb(20,20, 20) 90.2%)"]}
              >
                <Image
                // source={}
                source={item.productImage}
                style={{
                  borderRadius:10,
                  width:width,
                  height:height,
                  resizeMode:'contain',
                }}
                ></Image>
              </LinearGradient>
              <ProductInfoText></ProductInfoText>
              <ProductInfoText DayOffer={DayOffer} >{item.productName}</ProductInfoText>
              <ProductPriceText DayOffer={DayOffer} >R$ {item.productPrice}</ProductPriceText>
            </WrapperProducts>
        )})}
      </ProductArea>  
    </Container>
)}