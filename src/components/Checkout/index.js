import React, { useEffect } from 'react'
import {
  Container,
  CheckoutWrapper,
  ProductInfoPrice,
  ProductInfoText,
  TotalText,
  CheckoutButton,
  CheckoutButtonText,
  TextArea,
} from './styles'
import { useSelector, useDispatch} from 'react-redux'
import { getTotals } from '../../redux/features/cartSlice';
import { View } from 'react-native';

export default ()=> {
  const cartAmount = useSelector(state => state.cart)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getTotals())
  },[cartAmount])

  return (
    <Container>

      {cartAmount.cartTotalQuantity >1?
        <CheckoutWrapper>
          <ProductInfoText>({cartAmount.cartTotalQuantity}) Produtos no total</ProductInfoText>
          <ProductInfoPrice>R$ {cartAmount.cartTotalAmount}</ProductInfoPrice>
        </CheckoutWrapper>
      :
        <CheckoutWrapper>
          <ProductInfoText>(1) Produto</ProductInfoText>
          <ProductInfoPrice>R$ {cartAmount.cartTotalAmount}</ProductInfoPrice>
        </CheckoutWrapper>
      }
    {
      cartAmount.cartTotalQuantity>2?
      <CheckoutWrapper>
        <ProductInfoText>Custo de envio</ProductInfoText>
        <ProductInfoPrice>Gratuito</ProductInfoPrice>
      </CheckoutWrapper>
    :
    <CheckoutWrapper>
      <ProductInfoText>Custo de envio</ProductInfoText>
      <ProductInfoPrice>R$ {(((cartAmount.cartTotalAmount)/200)*1000).toFixed(2)}</ProductInfoPrice>
  </CheckoutWrapper>
    }

    {cartAmount.cartTotalQuantity>2?
      <CheckoutWrapper>
        <TotalText>Total</TotalText>
        <TotalText>R$ {(cartAmount.cartTotalAmount)}</TotalText>
      </CheckoutWrapper>
      :
      <CheckoutWrapper>
        <TotalText>Total</TotalText>
        <TotalText>R$ {(((cartAmount.cartTotalAmount+ cartAmount.cartTotalAmount/200))*1000).toFixed(2)}</TotalText>
      </CheckoutWrapper>
    }
    <CheckoutButton>
      <CheckoutButtonText>Continuar compra</CheckoutButtonText>
    </CheckoutButton>
    </Container>
  )
}