import React from 'react'
import {
  Container, 
  InputArea,
  Input,
  CustomButton,
  CustomButtonText
  
} from './styles'
import { Alert, Keyboard } from 'react-native'
import { getAuth, updateEmail } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";
import {firestore} from '../../services/firebase-config'
import { useDispatch, useSelector } from 'react-redux';
import { changeUserEmail, changeUserName } from '../../redux/features/userSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';




export default function ({value, setText, changeInfo, closeBottomSheet, openModal}) {
  const auth = getAuth();
  const user = useSelector((state) => state.user.userData); 
  const dispatch = useDispatch()

  const washingtonRef = doc(firestore,'users', user.uid);
  const validate = () => {
    let error= false
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!re.test(String(value).toLowerCase()) & changeInfo=='email' ){
        Alert.alert("Preencha seu e-mail corretamente")
      error = true
    }
    if (value == '' & changeInfo=='name' ){
      Alert.alert("Escreva um nome válido")
      error = true
    }
    if (value == undefined & changeInfo=='name' ){
      Alert.alert("Escreva um nome válido")
      error = true
    }
    return !error
  }

  const changeUserInfo = async ()=>{
    if(validate()){
      
      if(changeInfo=='email'){
        updateEmail(auth.currentUser, value)
        .then(() => {
          updateDoc(washingtonRef, {
            email: value
          });
        })
          setText('')
          dispatch(changeUserEmail(value))
          closeBottomSheet()
          openModal()
        
      } 
      else{
        updateDoc(washingtonRef, {
          name: value
        });
        dispatch(changeUserName(value))
        closeBottomSheet()
        openModal()
        await AsyncStorage.mergeItem('userData', JSON.stringify({name: value}))

      }
      setText('')
      Keyboard.dismiss()
    }
  }
    
  return (
    <Container>
      <InputArea >
        
        <Input 
        onChangeText={text => {setText(text)}}
        value={value}
        placeholder={changeInfo== 'email'? 'Digite um email válido ':'Escreva seu nome'}>
        </Input>
      </InputArea>

      <CustomButton onPress={()=>{changeUserInfo()}} >
        <CustomButtonText>{changeInfo== 'email'? 'Atualizar email ':'Atualizar nome'}</CustomButtonText>
      </CustomButton>
    </Container>
    )
}