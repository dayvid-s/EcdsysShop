import React, { useEffect } from 'react'
import {
  Container,
  CheckoutWrapper,
  ProductInfoPrice,
  ProductInfoText,
  TotalText,
  CheckoutButton,
  CheckoutButtonText,
} from './styles'
import { useSelector, useDispatch} from 'react-redux'
import { getTotals } from '../../redux/features/cartSlice';
import { numberFormat } from '../../utils/numberFormat';


export default ()=> {
  const cartAmount = useSelector(state => state.cart)
  const currentTheme = useSelector((state) => state.theme.currentTheme);

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getTotals())
  },[cartAmount])


  return (
    <Container>

        <CheckoutWrapper>
          <ProductInfoText currentTheme={currentTheme} >
          {cartAmount.cartTotalQuantity>1?  
           "("+cartAmount.cartTotalQuantity +")" + " Produtos no total"
            :
            "(1) Produto"
          }
          </ProductInfoText>
          <ProductInfoPrice>{numberFormat(cartAmount.cartTotalAmount)}</ProductInfoPrice>
        </CheckoutWrapper>

    {
      cartAmount.cartTotalAmount>400?
      <CheckoutWrapper>
        <ProductInfoText currentTheme={currentTheme} >Custo de envio</ProductInfoText>
        <ProductInfoPrice>Gratuito</ProductInfoPrice>
      </CheckoutWrapper>
    :
    <CheckoutWrapper>
      <ProductInfoText currentTheme={currentTheme} >Custo de envio</ProductInfoText>
      <ProductInfoPrice>{numberFormat(cartAmount.cartTotalAmount*0.05)}</ProductInfoPrice>
  </CheckoutWrapper>
    }

    {cartAmount.cartTotalAmount>500?
      <CheckoutWrapper>
        <TotalText>Total</TotalText>
        <TotalText>{numberFormat(cartAmount.cartTotalAmount)}</TotalText>
      </CheckoutWrapper>
      :
      <CheckoutWrapper>
        <TotalText>Total</TotalText>
        <TotalText>{numberFormat(cartAmount.cartTotalAmount+ cartAmount.cartTotalAmount*0.05)}</TotalText>
      </CheckoutWrapper>
    }
    <CheckoutButton>
      <CheckoutButtonText>Continuar compra</CheckoutButtonText>
    </CheckoutButton>
    </Container>
  )
}