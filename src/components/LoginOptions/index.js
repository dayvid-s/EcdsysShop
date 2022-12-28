import React from 'react'
import { 
    LoginIconsArea,
    WrapperIcons, 
    OptionText, 
    Container,
    AreaText
} from './styles';
import Facebook from '../../assets/icons/facebook-option-svgrepo-com.svg'
// import Facebook from '../../assets/icons/facebook'
// import Google from '../../assets/icons/google.svg'
import { useTheme } from 'styled-components';
import { useSelector } from 'react-redux';
import { FontAwesome } from '@expo/vector-icons'; 
import Google from '../../assets/icons/google-svgrepo-com (2).svg'

export default ({Text}) =>{
    const theme = useTheme()
    const currentTheme = useSelector((state) => state.theme.currentTheme);
  

  return (
    <Container>
        <AreaText>
            <OptionText>{Text}</OptionText>
        </AreaText>

        <LoginIconsArea>
            <WrapperIcons>
                {/* <FontAwesome name="facebook" size={30} 
                color={currentTheme=='light'? '#000' : '#FFF'} /> */}
                {Facebook? 
                <Facebook width="39" height="28" fill={theme.onBackGround} />
                : null   }
            </WrapperIcons>
            <WrapperIcons>
                
            {Google? 
                <Google width="24" height="24" fill={theme.onBackGround} color={'blue'} />
                : null   }
            </WrapperIcons>
        
        </LoginIconsArea>   
    </Container>
  )
}