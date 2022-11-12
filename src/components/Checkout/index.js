import React from 'react'
import {
  Container,
  CheckoutWrapper,
  ProductInfoPrice,
  ProductInfoText,
  TotalText,
  CheckoutButton,
  CheckoutButtonText,
} from './styles'

export default ()=> {

  return (
    <Container>
      <CheckoutWrapper>
        <ProductInfoText>Produto(1)</ProductInfoText>
        <ProductInfoPrice>R$ 2.290</ProductInfoPrice>
      </CheckoutWrapper>
      <CheckoutWrapper>
        <ProductInfoText>Custo de envio</ProductInfoText>
        <ProductInfoPrice>R$ 20.21</ProductInfoPrice>
      </CheckoutWrapper>
      <CheckoutWrapper>
        <TotalText>Total</TotalText>
        <TotalText>R$ 2.290</TotalText>
      </CheckoutWrapper>
    
    <CheckoutButton>
      <CheckoutButtonText>Continuar compra</CheckoutButtonText>
    </CheckoutButton>
    </Container>
  )
}