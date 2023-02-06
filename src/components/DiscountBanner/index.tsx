import React from 'react'
import { useAppSelector } from '../../hooks/useAppSelector';
import {
  Container,
  Image
} from './styles'


export default () => {
  const currentTheme = useAppSelector((state) => state.theme.currentTheme);

  return (
    <Container>
      {
        currentTheme == 'dark'?
        <Image resizeMode='contain'source={require('../../assets/images/OffAtEletronics.png')}/> :
        <Image resizeMode='contain'source={require('../../assets/images/bannerAtLightThemea.png')}/>
      }
    </Container>
)}