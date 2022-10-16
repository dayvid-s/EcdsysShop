import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Zocial } from '@expo/vector-icons';
import { LoginIconsArea, WrapperIcons, OptionText, Container,
 AreaText
} from './styles';
import Facebook from '../../assets/facebook'
import Google from '../../assets/google.svg'


export default () =>{
  return (
    <Container>
        <AreaText>
            <OptionText>Cadastre-se com uma das seguintes opções.</OptionText>
        </AreaText>

        <LoginIconsArea>
            <WrapperIcons>
                
                {Facebook? 
                <Facebook width="24" height="24" fill="#FFF" />
                : null   }
            </WrapperIcons>
            <WrapperIcons>
                
            {Google? 
                <Google width="24" height="24" fill="#FFF" />
                : null   }
                {/* <AntDesign name="google" size={24} color="white" /> */}
            </WrapperIcons>
        
        </LoginIconsArea>   
    </Container>
  )
}