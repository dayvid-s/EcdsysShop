//TODO: Solve keyboard avoiding view
//TODO: on send file, buttom stay with scroll indicator, 'app barber' maybe.
//TODO: animation on out of the page. like nubank
import React, { useRef, useState } from 'react'
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
import EmailIcon from '../../assets/icons/email.svg'
import Lock from '../../assets/icons/lock.svg'
import User from '../../assets/icons/user.svg'
import { useNavigation } from '@react-navigation/native'
import { Keyboard, KeyboardAvoidingView, Platform } from 'react-native'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../services/firebase-config'
export default () => {
  const navigation = useNavigation()
  const emailRef = useRef()
  const passwordRef = useRef()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleGoSignIn = () => {
    navigation.navigate('SignIn')
  }
  const handleSignUp =()=>{
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      navigation.replace("Home")
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    })};

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
            value={name}
            onChangeText={text=>setName(text) }
            placeholder="Seu primeiro nome"
            Text='Nome'
            returnKeyType='next'
            secureTextEntry={false} 
            onSubmitEditing={()=> emailRef.current.focus()}
            IconSvg={User}
            />
          <SignInput
            value={email}
            onChangeText={text=>setEmail(text)}
            inputRef={emailRef}
            Text='Email'
            placeholder= "tim@apple.com"
            IconSvg={EmailIcon}
            returnKeyType='next'
            onSubmitEditing={()=> passwordRef.current.focus()}
            />
          <SignInput
            value={password}
            onChangeText={text=>setPassword(text)}
            inputRef={passwordRef}
            Text="Senha"
            placeholder="Escolha uma senha forte"
            IconSvg={Lock}
            returnKeyType='done'
            secureTextEntry={true}
            passWord={true}
            />
          {/* tava moscando por causa das chavrs */}
          <CustomButton onPress={()=>handleSignUp()}
            >
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
