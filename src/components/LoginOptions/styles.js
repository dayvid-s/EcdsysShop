import React from "react";
import styled from "styled-components";

export const Container = styled.View`
    margin-left: 6%;
    margin-right : 12px;
` 

export const LoginIconsArea = styled.View`
    flex-direction: row;
    margin-top: 5%;
    ` 
export const AreaText = styled.View`
    margin-top: 10%;
    ` 
export const OptionText = styled.Text`
    font-weight:500;
    font-size: 15px;
    color: grey
    `
export const WrapperIcons = styled.TouchableOpacity`
    padding: 15px;
    flex: 1
    background-color: ${props => props.theme.secondary};
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    margin-right : 10px
    elevation : 30
    border-width :1px
    border-color : ${props => props.theme.gray300}
    margin-bottom: 40px
    
    `