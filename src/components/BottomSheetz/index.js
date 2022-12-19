import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { 
  InputArea,
  Input,
  CustomButton,
  CustomButtonText

} from './styles'
export default function index({value, setText, changeInfo}) {
  {console.log(changeInfo)}
  const changeUserInfo = ()=>{
    if(changeInfo=='name'){

    }
    else{}
  }

  return (
    <View style={{flex: 1,alignItems: 'center', backgroundColor:'#7159c1'}}>
      <InputArea >
        
        <Input 
        // marginTop:50, backgroundColor:'#fff', borderRadius:20
        // style={{padding:20, paddingHorizontal:150,
        // }}
        onChangeText={text => {
          setText(text)
        }}
        
        value={value}
        placeholder={changeInfo== 'email'? 'Digite um email válido ':'Escreva seu nome'}
        ></Input>
        </InputArea>

      <CustomButton>
        <CustomButtonText>{changeInfo== 'email'? 'Atualizar email ':'Atualizar nome'}</CustomButtonText>
      </CustomButton>
    </View>
  
    )
}