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
// import EmailIcon from '../../assets/email-svgrepo-com.svg'
import Chilli from '../../assets/chilli.svg'
export default () => {
  return (
    <Container>
      <HeaderArea>
        <HeaderText> Cadastrar</HeaderText>
      </HeaderArea> 

      <LoginOptions></LoginOptions>    
      
      <InputArea>
        {/* <SignInput IconSvg={EmailIcon} ></SignInput> */}
        {/* <EmailIcon width={200} height={500} fill="red" /> */}
        <SignInput></SignInput>
        <SignInput></SignInput>
        <Chilli width={200} height={200} fill="black" />
        
        <CustomButton>
          <CustomButtonText>Criar Conta</CustomButtonText>
        </CustomButton>
      </InputArea>

      <SignMessageButton>
        <SignMessageButtonText>Já possui uma conta? </SignMessageButtonText>
        <SignMessageButtonTextBold>Faça login</SignMessageButtonTextBold>
      </SignMessageButton>
    </Container>
  )
}
