import React from 'react'
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
  TextWithSearches
} from './styles'
export default ()=> {
  const userSearches= ['eae','seloco', 'se']
  return (
  
  <Container>
    <HeaderArea>
      <AntDesign name="arrowleft" size={24} color="black" />
      <InputArea>
        <FontAwesome name="search" size={24} color="black" />
        <TextInputToSearch></TextInputToSearch>  
      </InputArea>
    </HeaderArea>


    {userSearches.map((item,index) =>{   
      return(                  
        <SearchHistoryArea key={index}>
          <Entypo name="cross" size={24} color="black" />
          <TextWithSearches>
          {item}
          </TextWithSearches>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
      </SearchHistoryArea>
    )})}


  </Container>

    )
}