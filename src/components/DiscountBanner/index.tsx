import React from 'react'
import { useSelector } from 'react-redux';
import {
  Container,
  Image
} from './styles'

export default () => {
  const currentTheme = useSelector((state) => state.theme.currentTheme);

  return (
    <Container>
      {
        currentTheme == 'dark'?
        <Image resizeMode='contain'source={require('../../assets/images/OffAtEletronics.png')}/> :
        <Image resizeMode='contain'source={require('../../assets/images/bannerAtLightThemea.png')}/>
      }
    </Container>
)}