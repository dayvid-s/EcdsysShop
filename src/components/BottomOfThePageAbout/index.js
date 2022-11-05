//TODO: API DO CORREIO/

import React, { useState } from 'react'
import {
  Container,
  DescriptionText,
  DescriptionTitle
} from './styles'

export default ({item})=> {

  return (
    <Container>
      <DescriptionTitle>Descrição do produto
      </DescriptionTitle>
        <DescriptionText>{item.description}</DescriptionText>
    </Container>
  )
}