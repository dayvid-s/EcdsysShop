import React from 'react'
import {
  Container,
  Image
} from './styles'

export default () => {
  return (
    <Container>
        <Image resizeMode='contain'source={require('../../assets/images/OffAtEletronics.png')}>
        </Image>
    </Container>
)}