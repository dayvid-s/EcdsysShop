import React, { useRef, useState } from 'react'
import { 
  AntDesign, 
  FontAwesome,
  Entypo, 
  MaterialIcons    
} from '@expo/vector-icons'; 

import {
  Container,
  HeaderArea,
  InputArea,
  TextInputToSearch,
  SearchHistoryArea,
  TextWithSearches,
} from './styles'
import { useTheme } from 'styled-components'
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default ()=> {

  const userSearches= [ 'Geladeira consul',' Ventilador 40CM coluna','Geladeira',]
  const theme = useTheme()
  const searchRef = useRef()
  const navigation = useNavigation()
  const [statusBarColor,setStatusBarColor]= useState('#7159c1')
  const goBack=()=>{
      //this is to solve the bug of status bar delay in change color.
    setStatusBarColor('#010101')
    navigation.goBack()
  }
  
  setTimeout(()=>{searchRef.current.focus()},100)
  
  return (
  
  <Container>
    <StatusBar backgroundColor = {statusBarColor}   ></StatusBar>
    <HeaderArea>
      <AntDesign onPress={()=>{goBack()}}
        style={{marginTop:3, opacity:0.8, marginLeft:6,marginRight:6}}
      name="arrowleft" size={30} color="#FFF" />
      <InputArea>
        <FontAwesome style={{opacity:0.7}} name="search" size={24} color="#FFF" />
        <TextInputToSearch
          ref={searchRef}
        ></TextInputToSearch>
          {/*on focus pra here  */}
      </InputArea>
    </HeaderArea>

    {userSearches.map((item,index) =>{   
      return(                  
        <SearchHistoryArea key={index}>
          <Entypo name="cross" size={27} color="gray" />
          <TextWithSearches>
          {item}
          </TextWithSearches>
          <MaterialIcons name="keyboard-arrow-right" size={32} color="gray" />
      </SearchHistoryArea>
    )})}

  </Container>

    )
}