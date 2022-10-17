import React, { useState } from 'react';
import {InputArea,TextInfo,Container,AreaText,Input  } from './styles'

export default ({
    inputRef,
    Text,
    Icon,
    placeholder,
    secureTextEntry,
    onSubmitEditing,
    returnKeyType
    }) =>{
    
    const [inputBorderColor, setInputBorderColor] = useState('#2222')

    const handleOnFocus=()=>{
        setInputBorderColor('#938d')
      }
    const handleOnBlur=()=>{
        setInputBorderColor('#2222')
      }
      
    
    return(
        <Container>
            <AreaText>
                <TextInfo>{Text}</TextInfo>
            </AreaText>
            <InputArea custom={inputBorderColor} >
                {Icon?   
                    <Icon opacity="0.4" width="20" height="20" fill="#FFF" />
                : null   }
                <Input 
                    onFocus={handleOnFocus}
                    onBlur={handleOnBlur}  
                    placeholder={placeholder} 
                    ref={inputRef} 
                    placeholderTextColor={'gray'}  
                    secureTextEntry={secureTextEntry}
                    onSubmitEditing={onSubmitEditing}
                    returnKeyType={returnKeyType}
                />
            </InputArea>
         </Container>

    )
}