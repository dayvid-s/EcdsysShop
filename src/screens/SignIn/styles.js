import React from "react";
import styled from "styled-components";


export const TouchableWithoutFeedback = styled.TouchableWithoutFeedback`
`
export const Container = styled.View`
    background-color: ${props => props.theme.backGround}

    flex:1;
    `

export const HeaderArea = styled.View`
    margin-top: 20%;
    margin-left: 3% ;
    flex-direction:row;
    `
export const WrapperIcon = styled.TouchableOpacity`
    max-height: 60%;
    padding:6px
    padding-right:8px
    padding-left:8px
    border-width: 2px;
    border-color: ${props => props.theme.gray300};
    margin-left: 20px;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    `

export const HeaderText = styled.Text`
    font-weight: 700;
    font-size: 45px;
    margin-left: 20px;
    color: ${props => props.theme.onBackGround};
`
export const HeaderTextLittle = styled(HeaderText)`
    font-weight: 400;
    font-size: 20px;
    margin-left: 8% ;
`

export const LoginIconsArea = styled.View`
    margin-top: 20%;
    margin-left: 10% ;
    `
export const SubmitArea = styled.View`
`
export const CustomButton = styled.TouchableOpacity`
    background-color:#6c1e85;   /*#7159c1    */
    padding: 20px;
    border-radius: 20px;
    margin-left: 5%;
    margin-right: 5%;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    margin-top: 35px;
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

export const SignMessageButtonTextBold =styled.Text`
    color:${props => props.theme.onBackGround};
    font-weight: 800;

`
