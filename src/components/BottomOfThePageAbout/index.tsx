//TODO: API DO CORREIO/

import React, { useState } from 'react'
import {
  Container,
  DescriptionText,
  DescriptionTitle
} from './styles'
import { IProduct } from '../CartProductsList'

export default ({ product }: IProduct) => {

  return (
    <Container>
      <DescriptionTitle>Descrição do produto</DescriptionTitle>
      <DescriptionText>{product?.description}</DescriptionText>
    </Container>
  )
}