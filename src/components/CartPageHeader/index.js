import React from 'react'
import Cart from '../../assets/icons/shopping-cart-svgrepo-com.svg'
import Menu from '../../assets/icons/menu-svgrepo-com (1).svg'
import {
  HeaderTitle,
  IconsArea,
  IconsWrapper,
  SmallTitle,
  TitleArea
} from './styles'
import { useTheme } from 'styled-components'
import { useNavigation } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons';
import { useSelector} from 'react-redux'


export default () => {
  const theme = useTheme()
  const navigation = useNavigation()
  const cart = useSelector((state) => state.cart.cartItems); 
  return (
    <IconsArea >
        <IconsWrapper onPress={() => navigation.goBack()}>
          <AntDesign name="left" size={25} color="#FFF" />
        </IconsWrapper>
        
        <HeaderTitle></HeaderTitle>
        <TitleArea>
          <HeaderTitle>{'Meu carrinho'}</HeaderTitle>
          {cart.length>1 ?
            <SmallTitle>{cart.length} items</SmallTitle>
            :
            <SmallTitle>{cart.length} item</SmallTitle>
          }
        </TitleArea>
      </IconsArea>
  )
}
