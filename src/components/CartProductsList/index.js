import React from 'react'
import Cart from '../../assets/icons/shopping-cart-svgrepo-com.svg'
import Menu from '../../assets/icons/menu-svgrepo-com (1).svg'
import {
  Container,
  TextInfo,
  ProductInfoText,
  ProductPriceText,
  ProductArea,
  WrapperProducts,
  ProductInformationWrapper,
  ProductQuantityWrapper
} from './styles'
import { useTheme } from 'styled-components'
import { useNavigation } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons';
import { Image } from 'react-native';



export default () => {
  const Products = [
    
      {
        id: 1,
        category: 'product',
        productName: 'MacBook Pro',
        productPrice: '21.779,10',
        description:
          'Criado para todos os tipos de criativos, incluindo desenvolvedores, fotógrafos, cineastas, artistas 3D, produtores musicais e muito mais, o MacBook Pro de 14,2" da Apple com M1 Pro Chip é a estação de trabalho móvel profissional definitiva para o usuário final.O sistema possui o chip Apple M1 Pro 8-Core, que fornece a potência e o desempenho necessários para lidar com seus fluxos de trabalho profissionais.',
        isOff: true,
        offPercentage: 10,
        productImage:  require('../../assets/images/boat2.png'),
        isAvailable: true,
        // productImageList: [
          // require('../assets/images/Mi1.png'),
          // require('../assets/images/Mi2.png'),
          // require('../assets/images/Mi3.png'),
        // ],
      },{ id: 1,
        category: 'product',
        productName: 'MacBook Pro',
        productPrice: '21.779,10',
        description:
          'Criado para todos os tipos de criativos, incluindo desenvolvedores, fotógrafos, cineastas, artistas 3D, produtores musicais e muito mais, o MacBook Pro de 14,2" da Apple com M1 Pro Chip é a estação de trabalho móvel profissional definitiva para o usuário final.O sistema possui o chip Apple M1 Pro 8-Core, que fornece a potência e o desempenho necessários para lidar com seus fluxos de trabalho profissionais.',
        isOff: true,
        offPercentage: 10,
        productImage:  require('../../assets/images/boat2.png'),
        isAvailable: true,
        // productImageList: [
          // require('../assets/images/Mi1.png'),
          // require('../assets/images/Mi2.png'),
          // require('../assets/images/Mi3.png'),
        // ],require('../assets/images/Mi3.png'),
      }]
  const theme = useTheme()
  const navigation = useNavigation()
  return (
   
    <ProductArea>
    {             // aqui vai ser uma renderização condicional, mas de uma f
    Products.map((item,id) =>{     //forma diferente, pois eu passo como props
      return(                   // o item que vai ser mapeado 
        <WrapperProducts key={id} 
        >
            <Image
            // source={}
            source={item.productImage}
            style={{
              borderRadius:10,
              width:130,
              height:100,
              resizeMode:'contain',
              marginLeft:-20,
            }}
            ></Image>
            <ProductQuantityWrapper>
            <ProductInformationWrapper>
              <ProductInfoText  >{item.productName}</ProductInfoText>
              <AntDesign  name="heart" size={25} color="gray" />
              <AntDesign style ={{marginLeft:20}} name="close" size={25} color="#e21" />
            </ProductInformationWrapper>
            <ProductInformationWrapper>
              <TextInfo  >-   1   +</TextInfo>
              <ProductPriceText  >R$ {item.productPrice}</ProductPriceText>
            </ProductInformationWrapper>
            </ProductQuantityWrapper>
        </WrapperProducts>
    )})}
  </ProductArea>
  )
}
