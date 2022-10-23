import React, { useEffect, useState } from 'react';
import {
    InputArea,
    TextInfo,
    Container,
    Input,
    TouchabeOpacity
} from './styles'
import Hide from '../../assets/icons/eyeClosed.svg'
import ShowPassword from '../../assets/icons/eyePassword.svg'

export default ({
    inputRef,
    Text,
    Icon,
    placeholder,
    secureTextEntry,
    onSubmitEditing,
    returnKeyType,
    passWord
    }) =>{
    
    const [inputBorderColor, setInputBorderColor] = useState('#434344')
    const [showPassword, setShowPassword] = useState(false)

    useEffect(()=>{
        if(secureTextEntry== true){
            setShowPassword(true)
        }    else{
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
            <TextInfo>{Text}</TextInfo>
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
                    secureTextEntry={showPassword}
                    onSubmitEditing={onSubmitEditing}
                    returnKeyType={returnKeyType}
                />
                
                {passWord==true?
                    <TouchabeOpacity onPress={handleShowAndHidePassword}>
                        {showPassword==false ?
                            <Hide opacity="0.4" width="24" height="24" fill="#FFF" />
                            :   
                            <ShowPassword opacity="0.4" width="24" height="24" fill="#FFF" />}
                    </TouchabeOpacity>  
                :null
                } 
            </InputArea>
        </Container>

    )
}