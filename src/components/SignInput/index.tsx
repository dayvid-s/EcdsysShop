import React, {  useEffect, useState } from 'react'
import {
  InputArea,
  TextInfo,
  Container,
  Input,
  TouchableOpacity
} from './styles'
import Hide from '../../assets/icons/eyeClosed.svg'
import ShowPassword from '../../assets/icons/eyePassword.svg'
import { useTheme } from 'styled-components'
import { useAppSelector } from './../../hooks/useAppSelector'
import { TextInputProps } from 'react-native'
// import { TextInput } from 'react-native'
import { SvgProps } from 'react-native-svg'

interface ISignInputProps extends TextInputProps {
  inputRef: React.MutableRefObject<undefined>
  Text : string
  Icon: React.FC<SvgProps>
  passWord?: boolean
  setText:  React.Dispatch<React.SetStateAction<string>>
  setError: React.Dispatch<React.SetStateAction<string | null>>
}


export function SignInput ({
  inputRef,
  Text,
  Icon,
  placeholder,
  secureTextEntry,
  onSubmitEditing,
  returnKeyType,
  passWord,
  value,
  setText,
  setError,
} : ISignInputProps) {
  const [inputBorderColor, setInputBorderColor] = useState('#434344')
  const [showPassword, setShowPassword] = useState(false)
  const currentTheme = useAppSelector((state) => state.theme.currentTheme)
  const theme = useTheme()



  useEffect(()=>{
    if(secureTextEntry== true){
      setShowPassword(true)
    }else{
      setShowPassword(false)
    }
  },[])

  const handleOnFocus=()=>{
    setInputBorderColor('#5c1e85')}

  const handleOnBlur=()=>{
    setInputBorderColor('#434344')}

  const handleShowAndHidePassword=()=>{
    setShowPassword(!showPassword)}

  return(
    <Container>
      {/* <TextInput  ></TextInput> */}
      <TextInfo>{Text}</TextInfo>
      <InputArea custom={inputBorderColor} >
        {Icon?   
          <Icon opacity="0.4" width="20" height="20" fill="#FFF" />
          : null   }
        <Input 
          onChangeText={text => {
            setText(text)
            setError(null)
            //     // this is calling two functions at the change text of textInput.
            //     // its like passing props for the father... but we are just changing 
            //     // the state of the father component.
          }}
                
          value={value}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}  
          placeholder={placeholder} 
          ref={inputRef} 
          placeholderTextColor={currentTheme=='dark'? 'gray': '#000'}  
          secureTextEntry={showPassword}
          onSubmitEditing={onSubmitEditing}
          returnKeyType={returnKeyType}
          
        />
                
        {passWord==true?
          <TouchableOpacity onPress={handleShowAndHidePassword}>
            {showPassword==false ?
              <Hide opacity="0.4" width="28" height="28" fill={theme.onBackGround} />
              :   
              <ShowPassword opacity="0.4" width="33" height="33" fill={theme.onBackGround} />
            }
          </TouchableOpacity>  
          :null
        } 
      </InputArea>
    </Container>

  )
}