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

export default () => {
  return (
    <Container>
      <TextInfo>Produtos recomendados</TextInfo>
      <ProductArea>
        <WrapperProducts>

        <Image
        source={require('../../assets/images/XboxOne.jpg')}
        // source={'../../assets/images/XboxOne.jpg'}
        style={{
          width:120,
          height:120,
          resizeMode:'contain',
              // amanha: entender mais sobre images em react native
          }}
          ></Image>
        
        <ProductInfoText>Xbox 360</ProductInfoText>
        <ProductPriceText>R$99,69</ProductPriceText>
          </WrapperProducts>
        <WrapperProducts>

        
        <Image
        source={require('../../assets/images/XboxOne.jpg')}
        // source={'../../assets/images/XboxOne.jpg'}
        style={{
          width:120,
          height:120,
          resizeMode:'contain',
          // amanha: entender mais sobre images em react native
        }}
        ></Image>
        
        <ProductInfoText>Xbox 360</ProductInfoText>
        <ProductPriceText>R$99,69</ProductPriceText>
          </WrapperProducts>
      </ProductArea>
    </Container>
    )
}