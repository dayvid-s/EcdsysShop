import React from 'react'
import { 
  Container, 
  FirstIcon,
  IconsWrapper,
  TotalProductsText,
  TotalProductsWrapper,
 } from './styles';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components'
import { useAppSelector } from '../../hooks/useAppSelector'

import { AntDesign } from '@expo/vector-icons';
import Cart from '../../assets/icons/shopping-cart-svgrepo-com.svg'

export default () => {
  const navigation = useNavigation()
  const theme = useTheme()
  const cartAmount = useAppSelector((state) => state.cart);
  return (
    <Container>
      <FirstIcon>

      <AntDesign style={{maxWidth:30}} onPress={()=> {navigation.goBack()}}
        name="left" size={24} color={theme.onBackGround} />
      </FirstIcon>
      
      {Cart?
        <IconsWrapper onPress={() => navigation.push('Cart')} >
          <Cart width={24} height={24} fill={theme.onBackGround} ></Cart>
         {cartAmount.cartTotalQuantity>0?
          <TotalProductsWrapper>
            <TotalProductsText>{cartAmount.cartTotalQuantity}</TotalProductsText>
          </TotalProductsWrapper>
          :null
         }
        </IconsWrapper>
        : null}

        <IconsWrapper >
          <AntDesign name="hearto" size={24} color={theme.onBackGround} />
        </IconsWrapper>
    </Container>
    )
}