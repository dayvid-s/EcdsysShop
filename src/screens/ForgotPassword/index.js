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
    HeaderTextLittle,
    ErrorArea,
    ErrorText,
    ForgotPasswordArea,
    ForgotPasswordText,
    InputArea,
    Input
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
import { auth, firestore } from '../../services/firebase-config'
import { ActivityIndicator } from 'react-native-paper'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {useDispatch} from 'react-redux'
import {changeUserInfo} from '../../redux/features/userSlice'
import {firebase} from '../../services/firebase-config'

export default () => {
  const navigation = useNavigation()
  const [email, setEmail] = useState('')
  const [loadingAuth, setAuthLoading] = useState(false)
  const [errorEmail, setErrorEmail] = useState(null)

    
  const validate = () => {
    let error = false
    setErrorEmail(null)
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!re.test(String(email).toLowerCase())){
      setErrorEmail("Preencha seu e-mail corretamente")
      error = true
    }
    return !error
  }


  const handleForgotPassword = () => {
    if(validate()){
      setAuthLoading(true)
      firebase.auth().sendPasswordResetEmail(email)
      .then(()=>{
        alert("Email com redefinição de senha enviado!")
        setAuthLoading(false)
      })
      .catch((error) => {
        setAuthLoading(false)
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorEmail("Não foi possivel encontrar usuario ")
        console.log(errorMessage)
    })};  
  }




  return (
    <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()} >
      <Container>
        <HeaderArea>
          <WrapperIcon onPress={()=>{navigation.goBack()}} >
            <IconBack IconBack width={20} heigth={20} fill='#FFF' ></IconBack>
          </WrapperIcon>
        </HeaderArea> 
          <HeaderText>Esqueci a senha</HeaderText>
          <HeaderTextLittle>Para sua segurança enviaremos um link via email para concluir a sua redefinição de senha.</HeaderTextLittle>
        <SubmitArea>
          <InputArea  >
                  <Input
                      onChangeText={text => {
                          setEmail(text)
                          setErrorEmail(null)
                      }}
                      value={email}
                      placeholder={"Digite seu email"} 
                      placeholderTextColor={'gray'}  
                      
                  />
          </InputArea>
          <ErrorArea>
            <ErrorText>{errorEmail}</ErrorText>
          </ErrorArea>
            
          <CustomButton onPress={()=> handleForgotPassword()}>
          {
              loadingAuth?
                <ActivityIndicator
                animating={true} color={"#7159c1"} 
                ></ActivityIndicator>
                :
                <CustomButtonText>Enviar</CustomButtonText>
            }
          </CustomButton>
        </SubmitArea>

      </Container>
    </TouchableWithoutFeedback>
  )
}
