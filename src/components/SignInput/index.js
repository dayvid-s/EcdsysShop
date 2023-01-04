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
import { useSelector } from 'react-redux';
import { useTheme } from 'styled-components';
import { Entypo } from '@expo/vector-icons'; 
import { KeyboardAvoidingView } from 'react-native';



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
    setText,
    setError,
    }) =>{
    // const app = initializeApp(firebaseConfig);
    const [inputBorderColor, setInputBorderColor] = useState('#434344')
    const [showPassword, setShowPassword] = useState(false)
    const currentTheme = useSelector((state) => state.theme.currentTheme);
    const theme = useTheme()



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