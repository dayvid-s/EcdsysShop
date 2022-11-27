//TODO: Solve keyboard avoiding view
//TODO: put icons with all kind of color.
//TODO: see if toogle keyboard its right, or its another way


import React, { useRef, useState } from 'react'
import {
    TouchableWithoutFeedback,
    Container,
    HeaderArea,
    WrapperIcon,
    HeaderText, 
    CustomButton,
    CustomButtonText,
    SignMessageButton,
    SignMessageButtonText,
    SignMessageButtonTextBold,
    SubmitArea,
    HeaderTextLittle
  } from './styles'
import LoginOptions from '../../components/LoginOptions'
import SignInput from '../../components/SignInput'
import EmailIcon from '../../assets/icons/email.svg'
import Lock from '../../assets/icons/lock.svg'
import IconBack from '../../assets/icons/IconBack.svg'
import { useNavigation } from '@react-navigation/native'
import { Keyboard } from 'react-native'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {signInWithEmailAndPassword} from "firebase/auth";
import { auth } from '../../services/firebase-config'

export default () => {
  const navigation = useNavigation()
  const passwordRef = useRef()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleGoSignUp = () => {
    navigation.navigate('SignUp')
  }
  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("user login sucessfully")
      navigation.replace("Home")
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });  
  }
  return (
    <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()} >
      <Container>
      <KeyboardAwareScrollView  extraScrollHeight={150}  >
        <HeaderArea>
          <WrapperIcon onPress={()=>{navigation.navigate('SignUp')}} >
            <IconBack IconBack width={20} heigth={20} fill='#FFF' ></IconBack>
          </WrapperIcon>
          <HeaderText>Entrar</HeaderText>
        </HeaderArea> 
          <HeaderTextLittle>Que bom ter você de volta!</HeaderTextLittle>

        <LoginOptions  Text={'Faça login com uma das seguintes opções'}></LoginOptions>    

        <SubmitArea>
          <SignInput
            value={email}
            onChangeText={text=>setEmail(text)}
            placeholder="tim@apple.com"
            Text='Email'
            Icon={EmailIcon}
            returnKeyType='next'
            secureTextEntry={false} 
            onSubmitEditing={()=> passwordRef.current.focus()}
            />
          <SignInput
            value={password}
            onChangeText={text=>setPassword(text)}
            inputRef={passwordRef}
            Text="Senha"
            placeholder="Entre com sua senha" 
            Icon={Lock}
            returnKeyType='done'
            secureTextEntry={true} 
            // onSubmitEditing={handleSignIn}
            passWord={true}
            />

          <CustomButton onPress={()=> handleSignIn()}>
            <CustomButtonText>Entrar</CustomButtonText>
          </CustomButton>
        </SubmitArea>

        <SignMessageButton onPress={handleGoSignUp}>
          <SignMessageButtonText>Não possui uma conta?  </SignMessageButtonText>
          <SignMessageButtonTextBold>Cadastre-se</SignMessageButtonTextBold>
        </SignMessageButton>
    </KeyboardAwareScrollView>
      </Container>
    </TouchableWithoutFeedback>

  )
}
