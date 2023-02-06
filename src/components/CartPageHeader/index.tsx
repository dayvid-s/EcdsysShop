import React from 'react'
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
import { useAppSelector } from '../../hooks/useAppSelector'



export default ({loading}) => {
  const theme = useTheme()
  const navigation = useNavigation()
  const cart = useAppSelector((state) => state.cart.cartItems); 
  return (
    <IconsArea >
        <IconsWrapper onPress={() => navigation.goBack()}>
          <AntDesign name="left" size={25} color={theme.onBackGround} />
        </IconsWrapper>
        
        <TitleArea>
          <HeaderTitle>{'Meu carrinho'}</HeaderTitle>
        {
          loading == false &&
          (
            <>

          {cart.length>1    &&
            <SmallTitle>{cart.length} items</SmallTitle>
            }
          {cart.length==1 &&
            <SmallTitle>{cart.length} item</SmallTitle>
          }
      </>
        )}
        </TitleArea>
      
      </IconsArea>
)}
