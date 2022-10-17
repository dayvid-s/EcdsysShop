//TODO: Solve keyboard avoiding view


import React, { useRef } from 'react'
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
import EmailIcon from '../../assets/email.svg'
import Lock from '../../assets/lock.svg'
import IconBack from '../../assets/IconBack.svg'
import { useNavigation } from '@react-navigation/native'
import { Keyboard } from 'react-native'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export default () => {
  const navigation = useNavigation()
  const passwordRef = useRef()
  
  const handleGoSignUp = () => {
    navigation.navigate('SignUp')
  }
  const handleGoHome = () => {
    navigation.navigate('Home')
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
            placeholder="tim@apple.com"
            Text='Email'
            Icon={EmailIcon}
            returnKeyType='next'
            secureTextEntry={false} 
            onSubmitEditing={()=> passwordRef.current.focus()}
            />
          <SignInput 
            inputRef={passwordRef}
            Text="Senha"
            placeholder="Entre com sua senha" 
            Icon={Lock}
            returnKeyType='done'
            secureTextEntry={true} 
            // onSubmitEditing={handleGoHome}
            passWord={true}
            />

          <CustomButton onPress={handleGoHome}>
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
