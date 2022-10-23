import React from 'react'
import { 
    LoginIconsArea,
    WrapperIcons, 
    OptionText, 
    Container,
    AreaText
} from './styles';
import Facebook from '../../assets/icons/facebook'
import Google from '../../assets/icons/google.svg'


export default ({Text}) =>{
  return (
    <Container>
        <AreaText>
            <OptionText>{Text}</OptionText>
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
            </WrapperIcons>
        
        </LoginIconsArea>   
    </Container>
  )
}