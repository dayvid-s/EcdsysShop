import React from 'react'
import {Container,HeaderArea,HeaderText, LoginIconsArea } from './styles'
// import Icon from '@expo/vector-icons/Ionicons';
// import  AntDesign  from '@expo/vector-icons/AntDesign';
import { AntDesign } from '@expo/vector-icons';
import LoginOptions from '../../components/LoginOptions'


export default () => {
  return (
    <Container>
      <HeaderArea>
        <HeaderText> Cadastrar</HeaderText>
      </HeaderArea>
      
      <LoginOptions></LoginOptions>    
    </Container>
  )
}
