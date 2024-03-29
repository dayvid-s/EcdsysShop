import styled from "styled-components/native";

export const TouchableWithoutFeedback = styled.TouchableWithoutFeedback`
`
export const Container = styled.View`
    background-color: ${props => props.theme.backGround}

    flex:1;
    `

export const HeaderArea = styled.View`
    margin-top: 20%;
    margin-left: 3% ;
    `

export const HeaderText = styled.Text`
    font-weight: 700;
    font-size: 38px;
    margin-left: 20px;
    color: ${props => props.theme.onBackGround};
`

export const LoginIconsArea = styled.View`
    margin-top: 20%;
    margin-left: 10% ;
    `
export const SubmitArea = styled.View`
`
export const ErrorArea = styled.TouchableOpacity`
    margin-bottom:-25px
    margin-right:20px
    `

export const ErrorText = styled.Text`
    color:red 
    align-self: flex-end
    font-weight:600
    font-family: 'Medium'
    opacity:0.8
`


export const CustomButton = styled.TouchableOpacity`
    background-color:#6c1e85;
    padding: 20px;
    border-radius: 20px;
    margin-left: 5%;
    margin-right: 5%;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    margin-top: 25px;
`
export const CustomButtonText = styled.Text`
    font-size: 19px;
    font-weight: 800;
    color:white
`

export const SignMessageButton = styled.TouchableOpacity`
    justify-content: center;
    flex-direction: row;
`

export const SignMessageButtonText = styled.Text`
    color:${props => props.theme.onBackGround};
    font-weight: 400;
`

export const SignMessageButtonTextBold = styled.Text`
    color:${props => props.theme.onBackGround};
    font-weight: 800;

`
