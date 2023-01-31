//TODO: API DO CORREIO/

import React, { useState } from 'react'
import {
  Container,
  ProductSpecText
} from './styles'

export default ({specification})=> {
  return (
    <Container>
      <ProductSpecText>{specification}</ProductSpecText>
    </Container>
  )
}