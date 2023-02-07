import React from 'react'
import { 
  LoginIconsArea,
  WrapperIcons, 
  OptionText, 
  Container,
  AreaText
} from './styles'
import Facebook from '../../assets/icons/facebook-option-svgrepo-com.svg'
import { useTheme } from 'styled-components'
import Google from '../../assets/icons/google-svgrepo-com (2).svg'

interface ILoginOptions{
    Text: string
}


export function LoginOptions ({Text}: ILoginOptions) {
  const theme = useTheme()

  return (
    <Container>
      <AreaText>
        <OptionText>{Text}</OptionText>
      </AreaText>

      <LoginIconsArea>
        <WrapperIcons>
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