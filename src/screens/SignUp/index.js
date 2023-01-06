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
    SubmitArea,
    ErrorArea,
    ErrorText
  } from './styles'
import LoginOptions from '../../components/LoginOptions'
import SignInput from '../../components/SignInput'
import EmailIcon from '../../assets/icons/email.svg'
import Lock from '../../assets/icons/lock.svg'
import User from '../../assets/icons/user.svg'
import { useNavigation } from '@react-navigation/native'
import { Keyboard} from 'react-native'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import AsyncStorage from '@react-native-async-storage/async-storage'
import {firebase} from '../../services/firebase-config'
import { ActivityIndicator } from 'react-native-paper'
import {useDispatch} from 'react-redux'
import {changeUserInfo} from '../../redux/features/userSlice'


export default () => {
  const navigation = useNavigation()
  const emailRef = useRef()
  const passwordRef = useRef()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorEmail, setErrorEmail] = useState(null)
  const [errorName, setErrorName] = useState(null)
  const [errorPassword, setPasswordError] = useState(null)
  const [loadingAuth, setAuthLoading] = useState(false)
  const dispatch = useDispatch()
 


  const validate = () => {
    let error = false
    setErrorEmail(null)
    setPasswordError(null)
    setErrorName(null)
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!re.test(String(email).toLowerCase())){
      setErrorEmail("Preencha seu e-mail corretamente")
      error = true
    }
    if (name == null){
      setErrorName("Preencha o seu nome")
      error = true
    }
    if (name <= 2){
      setErrorName("Preencha o seu nome")
      error = true
    }
    if (password <= 4){
      setPasswordError("Sua senha precisa ter mais de 4 digitos")
      error = true
    }
    return !error
  }
  
  const storageUser = async (data) =>{
    await AsyncStorage.setItem('userData', JSON.stringify(data))}

  const handleGoSignIn = () => {
    navigation.navigate('SignIn')}

  const handleSignUp = async (email, password, name)=>{
    if(validate()){
      setAuthLoading(true)
      await firebase.auth().createUserWithEmailAndPassword(email,password)
      .then((userCredential)=>{
          let data={
            uid:userCredential.user.uid,
            name:name,
            email: email,
            userAvatar: null

          }
          dispatch(changeUserInfo(data))   //saving user data at redux 
          storageUser(data)       
          }).catch((error)=>{
      setAuthLoading(false)
      {console.log(error)}
    })
  }}    



  return (
    <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()} >
      <KeyboardAwareScrollView 
      enableOnAndroid={true} keyboardOpeningTime	={330}
      enableAutomaticScroll	extraHeight={190}>
        <Container >

          <HeaderArea>
            <HeaderText>Cadastrar</HeaderText>
          </HeaderArea> 

          <LoginOptions Text={'Cadastre-se com uma das seguintes opções.'} ></LoginOptions>    
          <SubmitArea>
            <ErrorArea >
              <ErrorText > {errorName} </ErrorText>
            </ErrorArea>
            <SignInput 
              value={name}
              setText={setName}
              setError= {setErrorName}
              placeholder="Seu primeiro nome"
              Text='Nome'
              returnKeyType='next'
              secureTextEntry={false} 
              onSubmitEditing={()=> emailRef.current.focus()}
              IconSvg={User}
              />
            <ErrorArea>
              <ErrorText > {errorEmail} </ErrorText>
            </ErrorArea>
            <SignInput
              value={email}
              setText={setEmail}
              setError= {setErrorEmail}
              inputRef={emailRef}
              Text='Email'
              placeholder= "tim@apple.com"
              IconSvg={EmailIcon}
              returnKeyType='next'
              onSubmitEditing={()=> passwordRef.current.focus()}
              />
            <ErrorArea>
              <ErrorText > {errorPassword} </ErrorText>
            </ErrorArea>
            <SignInput
              
              value={password}
              setText={setPassword}
              setError= {setPasswordError}
              inputRef={passwordRef}
              Text="Senha"
              placeholder="Escolha uma senha forte"
              IconSvg={Lock}
              returnKeyType='done'
              secureTextEntry={true}
              passWord={true}
              />
            <CustomButton onPress={()=>{ handleSignUp(email,password, name)}}>
              {
                loadingAuth?
                  <ActivityIndicator
                  animating={true} color={"#7159c1"} 
                  ></ActivityIndicator>
                  :
                  <CustomButtonText>Criar Conta</CustomButtonText>
              }
            </CustomButton>
          </SubmitArea>

          <SignMessageButton onPress={handleGoSignIn}>
            <SignMessageButtonText>Já possui uma conta? </SignMessageButtonText>
            <SignMessageButtonTextBold>Faça login</SignMessageButtonTextBold>
          </SignMessageButton>
        </Container>
      </KeyboardAwareScrollView>
    </TouchableWithoutFeedback>
  )
}