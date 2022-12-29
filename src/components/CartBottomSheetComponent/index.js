import React from 'react'
import {
  Container, 
  InputArea,
  Input,
  CustomButton,
  CustomButtonText,
  TextInfo
  
} from './styles'
import { Alert, Keyboard } from 'react-native'
import { getAuth, updateEmail } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";
import {firestore} from '../../services/firebase-config'
import { useDispatch, useSelector } from 'react-redux';
import { changeUserEmail, changeUserName } from '../../redux/features/userSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, Image } from 'react-native';
import { numberFormat } from './../../utils/numberFormat';



export default function ({product}) {
  {console.log(product)}
  return (

  
  <Container>
    {/* <CustomButton> */}
    <CustomButtonText>Produto Adicionado no carrinho</CustomButtonText>    

    <InputArea>
    <Image style={{width:100, height:100}}  source={{uri:product.mainPhoto}} >

    </Image>
      <CustomButtonText>{product.name}</CustomButtonText>    
      <TextInfo>{ numberFormat(product.price)}</TextInfo>    
    </InputArea>
    {/* </CustomButton> */}
  </Container>
  )
}