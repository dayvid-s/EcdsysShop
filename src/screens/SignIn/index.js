import React, { useRef } from 'react'
import {
    Container,
    HeaderArea,
    HeaderText, 
    CustomButton,
    CustomButtonText,
    SignMessageButton,
    SignMessageButtonText,
    SignMessageButtonTextBold,
    InputArea,
    HeaderTextLittle
  } from './styles'
import LoginOptions from '../../components/LoginOptions'
import SignInput from '../../components/SignInput'
import EmailIcon from '../../assets/email.svg'
import Lock from '../../assets/lock.svg'
import { useNavigation } from '@react-navigation/native'

export default () => {

  const navigation = useNavigation()
  const passwordRef = useRef()

  
  const handleGoSignUp = () => {
    navigation.navigate('SignUp')
  }
  
  return (
    <Container>
      <HeaderArea>
        <HeaderText>Entrar</HeaderText>
        <HeaderTextLittle>Que bom ter você de volta!</HeaderTextLittle>
      </HeaderArea> 

      <LoginOptions  Text={'Faça login com uma das seguintes opções'}></LoginOptions>    
      
      <InputArea>
        <SignInput
          // inputRef={passwordRef}
          placeholder="tim@apple.com"
          Text='Email'
          Icon={EmailIcon}
          returnKeyType='next'
          onSubmitEditing={()=> passwordRef.current.focus()}
          />
        <SignInput 
          inputRef={passwordRef}
          Text="Senha"
          placeholder="Entre com sua senha" 
          Icon={Lock}
          returnKeyType='done'
          secureTextEntry={true} 
          />
        
        <CustomButton>
          <CustomButtonText>Entrar</CustomButtonText>
        </CustomButton>
      </InputArea>

      <SignMessageButton onPress={handleGoSignUp}>
        <SignMessageButtonText>Não possui uma conta?  </SignMessageButtonText>
        <SignMessageButtonTextBold>Cadastre-se</SignMessageButtonTextBold>
      </SignMessageButton>
    </Container>
  )
}
