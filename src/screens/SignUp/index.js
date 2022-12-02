//TODO: Solve keyboard avoiding view
//TODO: on send file, buttom stay with scroll indicator, 'app barber' maybe.
//TODO: animation on out of the page. like nubank
//TODO: put some comments explaining firebase, cuz stood a little bit complex

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
import AsyncStorage from '@react-native-async-storage/async-storage'
import {firebase} from '../../services/firebase-config'
import { ActivityIndicator } from 'react-native-paper'
import {useDispatch} from 'react-redux'
import {changeUserInfo} from '../../redux/features/userSlice'
import { useSelector } from 'react-redux'

export default () => {
  const navigation = useNavigation()
  const emailRef = useRef()
  const passwordRef = useRef()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loadingAuth, setAuthLoading] = useState(false)
  const dispatch = useDispatch()
  
  const storageUser = async (data) =>{
    await AsyncStorage.setItem('userData', JSON.stringify(data))}

  const handleGoSignIn = () => {
    navigation.navigate('SignIn')}

  const handleSignUp = async (email, password, name)=>{
    setAuthLoading(true)
    await firebase.auth().createUserWithEmailAndPassword(email,password)
    .then(()=>{
      firebase.auth().currentUser.sendEmailVerification({
        handleCodeInApp: true,
        url:'https://ecdysshop.firebaseapp.com',
      }).then(()=>{
        let uid = firebase.auth().currentUser.uid
        firebase.firestore().collection('users')  //creating a collection at firestore
        .doc(uid)  //its getting the uid of user to match with firestore
        .set({           
          name: name,
          email: email
        })
        .then(()=>{
          let data={
            uid:uid,
            name:name,
            email: email
          }
          dispatch(changeUserInfo(data))   //saving user data at redux for be global
          storageUser(data)               
          })

      }).catch((error)=>{
        setAuthLoading(false)
        alert(error.message)
      })
    })
    .catch((error=>{
      setAuthLoading(false)
      alert(error.message)
    }))}

  return (
    <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()} >
      <Container >
      {/* <KeyboardAwareScrollView > */}
        <HeaderArea>
          <HeaderText>Cadastrar</HeaderText>
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
        {/* </KeyboardAwareScrollView> */}
      </Container>
    </TouchableWithoutFeedback>
  )
}
