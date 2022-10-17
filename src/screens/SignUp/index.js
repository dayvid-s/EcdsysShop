//TODO: Solve keyboard avoiding view

import React, { useRef } from 'react'
import {
    TouchableWithoutFeedback,
    Container,
    HeaderArea,
    HeaderText, 
    CustomButton,
    CustomButtonText,
    SignMessageButton,
    SignMessageButtonText,
    SignMessageButtonTextBold,
    SubmitArea
  } from './styles'
import LoginOptions from '../../components/LoginOptions'
import SignInput from '../../components/SignInput'
import EmailIcon from '../../assets/email.svg'
import Lock from '../../assets/lock.svg'
import User from '../../assets/user.svg'
import { useNavigation } from '@react-navigation/native'
import { Keyboard, KeyboardAvoidingView, Platform } from 'react-native'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export default () => {
  const navigation = useNavigation()
  const emailRef = useRef()
  const passwordRef = useRef()
 
  const handleGoSignIn = () => {
    navigation.navigate('SignIn')
  }
  
  return (
    <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()} >
      <Container >
      <KeyboardAwareScrollView >
        <HeaderArea>
          <HeaderText> Cadastrar</HeaderText>
        </HeaderArea> 

        <LoginOptions Text={'Cadastre-se com uma das seguintes opções.'} ></LoginOptions>    
        <SubmitArea>
          <SignInput 
            placeholder="Seu primeiro nome"
            Text='Nome'
            returnKeyType='next'
            secureTextEntry={false} 
            onSubmitEditing={()=> emailRef.current.focus()}
            IconSvg={User}
            />
          <SignInput
            inputRef={emailRef}
            Text='Email'
            placeholder= "tim@apple.com"
            IconSvg={EmailIcon}
            returnKeyType='next'
            onSubmitEditing={()=> passwordRef.current.focus()}
            />
          <SignInput
            inputRef={passwordRef}
            Text="Senha"
            placeholder="Escolha uma senha forte"
            IconSvg={Lock}
            returnKeyType='done'
            secureTextEntry={true}
            passWord={true}
            />
          
          <CustomButton>
            <CustomButtonText>Criar Conta</CustomButtonText>
          </CustomButton>
        </SubmitArea>

        <SignMessageButton onPress={handleGoSignIn}>
          <SignMessageButtonText>Já possui uma conta? </SignMessageButtonText>
          <SignMessageButtonTextBold>Faça login</SignMessageButtonTextBold>
        </SignMessageButton>
        </KeyboardAwareScrollView>
      </Container>
    </TouchableWithoutFeedback>
  )
}
