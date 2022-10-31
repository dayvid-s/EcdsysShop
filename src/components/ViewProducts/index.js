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

export default ({DayOffer, Text, height, width, }) => {
  const recommendedProducts = Products.filter(checkProducts);
  function checkProducts(product) {
    if(DayOffer ==true){
      if( product.isDayOffer == true)
      
      {
        return product ;
      }

    }else{

      if( product.isRecomended == true)
      
      {
        return product ;
      }
    }
  }


  return (
    <Container>
      <TextInfo>{Text}</TextInfo>
      <ProductArea>
        {             // aqui vai ser uma renderização condicional, mas de uma f
        recommendedProducts.map((item,id) =>{     //forma diferente, pois eu passo como props
          return(                   // o item que vai ser mapeado 
            <WrapperProducts key={id} >
              <LinearGradient style={{borderRadius:12,zIndex: 0}}
                colors={["#circle at 10% 20%, rgb(30, 30, 30) 0%", "rgb(5, 5, 5) 90.2%)"]}
                // colors={["#to right", "#434343 0% ","black 100%"]}
              >
                <Image
                // source={}
                source={item.productImage}
                style={{
                  borderRadius:10,
                  width:width,
                  height:height,
                  resizeMode:'contain',
                  // amanha: entender mais sobre images em react native
                }}
                ></Image>
              </LinearGradient>
              <ProductInfoText></ProductInfoText>
              <ProductInfoText DayOffer={DayOffer} >{item.productName}</ProductInfoText>
              <ProductPriceText DayOffer={DayOffer} >{item.productPrice}</ProductPriceText>
            </WrapperProducts>
        )})}
      </ProductArea>  
    </Container>
)}