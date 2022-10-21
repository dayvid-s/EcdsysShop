//TODO: put use memo in colors of icons
import React from 'react'
import Cart from '../../assets/shopping-cart-svgrepo-com.svg'
import Menu from '../../assets/menu-svgrepo-com (1).svg'
import { IconsArea, IconsWrapper } from './styles'
export default () => {
  return (

      <IconsArea >
        {Menu?
        <IconsWrapper>
          <Menu  width={24} height={24} fill="#FFF" ></Menu>
        </IconsWrapper>
        : null}

        {Cart?
        <IconsWrapper>
          <Cart  width={24} height={24} fill="#FFF" ></Cart>
        </IconsWrapper>
        : null}
        
      </IconsArea>
  )
}
