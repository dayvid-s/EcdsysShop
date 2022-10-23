//TODO: put use memo in colors of icons
import React from 'react'
import Cart from '../../assets/icons/shopping-cart-svgrepo-com.svg'
import Menu from '../../assets/icons/menu-svgrepo-com (1).svg'
import { IconsArea, IconsWrapper } from './styles'
import { useTheme } from 'styled-components'
import { useNavigation } from '@react-navigation/native'

export default () => {
  const theme = useTheme()
  const navigation = useNavigation()
  return (
    <IconsArea >
        {Menu?
        <IconsWrapper onPress={() => navigation.openDrawer()}>
          <Menu opacity={0.6}  width={24} height={24} fill={theme.onBackGround} ></Menu>
        </IconsWrapper>
        : null}

        {Cart?
        <IconsWrapper onPress={() => navigation.push('Cart')} >
          <Cart  opacity={0.6} width={24} height={24} fill={theme.onBackGround} ></Cart>
        </IconsWrapper>
        : null}
        
      </IconsArea>
  )
}
