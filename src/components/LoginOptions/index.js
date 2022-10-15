import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Zocial } from '@expo/vector-icons';
import { LoginIconsArea, WrapperIcons, OptionText, Container,
 AreaText
} from './styles';
export default () =>{
  return (
    <Container>
        <AreaText>
            <OptionText>Cadastre-se com uma das seguintes opções.</OptionText>
        </AreaText>

        <LoginIconsArea>
            <WrapperIcons>
            <Zocial name="facebook" size={24} color="white" />
                </WrapperIcons>
            <WrapperIcons>
                <AntDesign name="google" size={24} color="white" />
            </WrapperIcons>
        
        </LoginIconsArea>   
    </Container>
  )
}