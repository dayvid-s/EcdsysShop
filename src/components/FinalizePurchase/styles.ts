import styled from "styled-components/native"
import { LinearGradient } from 'expo-linear-gradient';


export const ButtonArea = styled.TouchableOpacity`
`
export const GradientButton = styled(LinearGradient)`
    padding:16px
    border-radius: 8px
    margin-left: 20px
    margin-right: 20px
    justify-content: center
    align-items: center 
    margin-top: 35px
    flex-direction:row
`

export const ButtonText = styled.Text`
    color: ${props => props.purple ? "#5159c1" : "white"};
    font-family: 'Medium'
    font-size:20px
    
`
export const ButtonSendToCart = styled.TouchableOpacity`
    flex-direction: row; 
    padding: 16px; 
    border-radius: 8px;
    margin-left: 5%;
    margin-right: 20px;
    justify-content: center;
    align-items: center;  
    margin-bottom: 20px;
    margin-top: 10px; 
    border-width: 2px;
    border-color: #6159c1;
    `
export const ModalArea = styled.View`
    flex-direction: row;
    align-items: center;
    top: -30px
`
export const Image = styled.Image`
    width:100px
    height:100px
`

export const ModalTextArea = styled.View`
    top: 35px
`

export const ModalTextInfo = styled.Text`
   top: -30px
   font-family: "Medium";
   color:#FFF
   font-size:18px
`
export const ModalText = styled(ModalTextInfo)`
   max-width:180px
`
export const ButtonsWrapper = styled.View`
   `