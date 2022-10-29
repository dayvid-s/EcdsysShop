import React from 'react'
import { Image } from 'react-native'
import {
  Container,
  TextInfo,
  ProductInfoText,
  ProductPriceText,
  ProductArea,
  WrapperProducts,
  BackgroundImage,

} from './styles'
import {Items} from '../../data/products'

export default () => {
  return (
    <Container>
      <TextInfo>Produtos recomendados</TextInfo>
      <ProductArea>
        {Items.map((item,id) =>{
          return(  
            <WrapperProducts key={id} >
              <BackgroundImage>
                <Image
                // source={}
                source={item.productImage}
                style={{
                  borderRadius:10,
                  width:160,
                  height:220,
                  resizeMode:'contain',
                  // amanha: entender mais sobre images em react native
                }}
                ></Image>
              </BackgroundImage>
              <ProductInfoText></ProductInfoText>
              <ProductInfoText>{item.productName}</ProductInfoText>
              <ProductPriceText>{item.productPrice}</ProductPriceText>
            </WrapperProducts>
        )})}
      </ProductArea>  
    </Container>
)}