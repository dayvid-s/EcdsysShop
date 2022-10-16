import React from 'react'
import {
    Container,
    HeaderArea,
    HeaderText, 
    CustomButton,
    CustomButtonText,
    SignMessageButton,
    SignMessageButtonText,
    SignMessageButtonTextBold,
    InputArea
  } from './styles'
import LoginOptions from '../../components/LoginOptions'
import SignInput from '../../components/SignInput'
import EmailIcon from '../../assets/email.svg'
import Lock from '../../assets/lock.svg'
import User from '../../assets/user.svg'

export default () => {

  const handleMessageButtonClick = () => {}
  
  return (
    <Container>
      <HeaderArea>
        <HeaderText> Cadastrar</HeaderText>
      </HeaderArea> 

      <LoginOptions></LoginOptions>    
      
      <InputArea>
        <SignInput placeholder="Juliana" Text='Nome' IconSvg={User} ></SignInput>
        <SignInput placeholder= "tim@apple.com" Text='Email' IconSvg={EmailIcon} ></SignInput>
        <SignInput Text="Senha" placeholder="Escolha uma senha forte" IconSvg={Lock} ></SignInput>
        
        <CustomButton>
          <CustomButtonText>Criar Conta</CustomButtonText>
        </CustomButton>
      </InputArea>

      <SignMessageButton onPress={handleMessageButtonClick}>
        <SignMessageButtonText>Já possui uma conta? </SignMessageButtonText>
        <SignMessageButtonTextBold>Faça login</SignMessageButtonTextBold>
      </SignMessageButton>
    </Container>
  )
}