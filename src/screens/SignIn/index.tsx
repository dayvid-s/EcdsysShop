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
    ForgotPasswordText
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
import { ActivityIndicator } from 'react-native-paper'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {useDispatch} from 'react-redux'
import {changeUserInfo} from '../../redux/features/userSlice'
import {firebase} from '../../services/firebase-config'
import { useTheme } from 'styled-components'


export const SignIn = () => {
  const navigation = useNavigation()
  const passwordRef = useRef()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loadingAuth, setAuthLoading] = useState(false)
  const [errorEmail, setErrorEmail] = useState(null)
  const [errorPassword, setPasswordError] = useState(null)
  const theme = useTheme()
 
 
  const validate = () => {
    let error = false
    setErrorEmail(null)
    setPasswordError(null)
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!re.test(String(email).toLowerCase())){
      setErrorEmail("Preencha seu e-mail corretamente")
      error = true
    }
    if (password === ''){
      setPasswordError("Preencha sua senha")
      error = true
    }
    return !error    // just pass when don't have error.
  }
  const dispatch = useDispatch()

  const storageUser = async (data) =>{
    await AsyncStorage.setItem('userData', JSON.stringify(data))
  }



  const handleGoSignUp = () => {
    navigation.navigate('SignUp')
  }
  const handleSignIn = () => {
    if(validate()){
      setAuthLoading(true)
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        let uid = userCredential.user.uid
        firebase.firestore().collection('users')
        .doc(uid).get()
        .then((snapshot) =>{        
          if(snapshot.exists){
            let data = {
              uid:uid,
              name: snapshot.data().name,
              email:snapshot.data().email,
              userAvatar:snapshot.data().picture? snapshot.data().picture  : null
            }
              storageUser(data)
              dispatch(changeUserInfo(data))  
              setAuthLoading(false)
            }else{ 
            setErrorEmail("Email ou senha incorretos.")
            setAuthLoading(false)
          }
        })
      })
      .catch((error) => {
        setAuthLoading(false)
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorEmail("Email ou senha incorretos.")
        console.log(errorMessage)
    })};  
  }


  return (
    <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()} >
      <KeyboardAwareScrollView 
      enableOnAndroid={true}
      keyboardOpeningTime	={330}
      enableAutomaticScroll	
      extraHeight={190}  >
        <Container>
          <HeaderArea>
            <WrapperIcon onPress={()=>{navigation.navigate('SignUp')}} >
              <IconBack  IconBack width={20} heigth={20} fill={theme.onBackGround} ></IconBack>
            </WrapperIcon>
            <HeaderText>Entrar</HeaderText>
          </HeaderArea> 
            <HeaderTextLittle>Que bom ter você de volta!</HeaderTextLittle>

          <LoginOptions  Text={'Faça login com uma das seguintes opções'}></LoginOptions>    

          <SubmitArea>
            <ErrorArea >
              <ErrorText > {errorEmail} </ErrorText>
            </ErrorArea>
            <SignInput
              value={email}
              setText={setEmail}
              setError= {setErrorEmail}
              placeholder="tim@apple.com"
              Text='Email'
              Icon={EmailIcon}
              returnKeyType='next'
              secureTextEntry={false} 
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
              placeholder="Entre com sua senha" 
              Icon={Lock}
              returnKeyType='done'
              secureTextEntry={true} 
              passWord={true}
              />
            <ForgotPasswordArea onPress={()=>{navigation.navigate("ForgotPassword")}}>
              <ForgotPasswordText> Esqueceu a senha? </ForgotPasswordText>
            </ForgotPasswordArea>

            <CustomButton onPress={()=> handleSignIn()}>
            {
                loadingAuth?
                  <ActivityIndicator
                  animating={true} color={"#7159c1"} 
                  ></ActivityIndicator>
                  :
                  <CustomButtonText>Entrar</CustomButtonText>
              }
            </CustomButton>
          </SubmitArea>

          <SignMessageButton onPress={handleGoSignUp}>
            <SignMessageButtonText>Não possui uma conta?  </SignMessageButtonText>
            <SignMessageButtonTextBold>Cadastre-se</SignMessageButtonTextBold>
          </SignMessageButton>
        </Container>
      </KeyboardAwareScrollView>
    </TouchableWithoutFeedback>

  )
}
