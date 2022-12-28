//TODO: API DO CORREIO/

import React, { useState } from 'react'
import {
  Container,
  DescriptionText,
  DescriptionTitle
} from './styles'

export default ({product})=> {

  return (
    <Container>
      <DescriptionTitle>Descrição do produto</DescriptionTitle>
        <DescriptionText>{product?.description}</DescriptionText>
    </Container>
  )
}