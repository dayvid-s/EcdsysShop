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
        <HeaderText>Entrar</HeaderText>
      </HeaderArea> 

      <LoginOptions></LoginOptions>    
      
      <InputArea>
        <SignInput placeholder= "tim@apple.com" Text='Email' IconSvg={EmailIcon} ></SignInput>
        <SignInput Text="Senha" placeholder="Entre com sua senha " IconSvg={Lock} ></SignInput>
        
        <CustomButton>
          <CustomButtonText>Entrar</CustomButtonText>
        </CustomButton>
      </InputArea>

      <SignMessageButton onPress={handleMessageButtonClick}>
        <SignMessageButtonText>Não possui uma conta?  </SignMessageButtonText>
        <SignMessageButtonTextBold>Cadastre-se</SignMessageButtonTextBold>
      </SignMessageButton>
    </Container>
  )
}
