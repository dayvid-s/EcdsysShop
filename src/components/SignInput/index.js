import React from 'react';
import {InputArea,TextInfo,Container,AreaText,Input  } from './styles'

export default ({Text,IconSvg,placeholder}) =>{
    return(
        <Container>
            <AreaText>
                <TextInfo>{Text}</TextInfo>
            </AreaText>
            <InputArea>
                {IconSvg? 
                <IconSvg opacity="0.4" width="20" height="20" fill="#FFF" />
                : null   }
                <Input placeholder={placeholder} placeholderTextColor={'gray'}  ></Input>
            
            </InputArea>
         </Container>

    )
}