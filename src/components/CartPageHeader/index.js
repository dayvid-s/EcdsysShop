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


export default () => {
  const theme = useTheme()
  const navigation = useNavigation()
  return (
    <IconsArea >
        <IconsWrapper onPress={() => navigation.openDrawer()}>
          <AntDesign name="left" size={25} color="#FFF" />
        </IconsWrapper>
        
        <HeaderTitle></HeaderTitle>
        <TitleArea>
          <HeaderTitle>{'Meu carrinho'}</HeaderTitle>
          <SmallTitle>{'2 items'}</SmallTitle>
        </TitleArea>
      </IconsArea>
  )
}
