import React, { useEffect, useState } from 'react';
import {
    InputArea,
    TextInfo,
    Container,
    Input,
    TouchableOpacity
} from './styles'
import Hide from '../../assets/icons/eyeClosed.svg'
import ShowPassword from '../../assets/icons/eyePassword.svg'
// import {
//     getAuth, 
//     createUserWithEmailAndPassword,
//     signInWithEmailAndPassword
// } from 'firebase/auth'
// import { initializeApp } from 'firebase/app';
// import { firebaseConfig } from './../../services/firebase-config';

export default ({
    inputRef,
    Text,
    Icon,
    placeholder,
    secureTextEntry,
    onSubmitEditing,
    returnKeyType,
    passWord,
    value,
    onChangeText
    }) =>{
    // const app = initializeApp(firebaseConfig);
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
                    onChangeText={onChangeText}
                    value={value}
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
                    <TouchableOpacity onPress={handleShowAndHidePassword}>
                        {showPassword==false ?
                            <Hide opacity="0.4" width="24" height="24" fill="#FFF" />
                            :   
                            <ShowPassword opacity="0.4" width="24" height="24" fill="#FFF" />}
                    </TouchableOpacity>  
                :null
                } 
            </InputArea>
        </Container>

    )
}