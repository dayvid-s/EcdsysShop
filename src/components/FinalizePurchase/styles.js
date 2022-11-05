import styled from "styled-components"

export const ButtonsWrapper = styled.View`
    `
    export const Button = styled.TouchableOpacity`
    `
    export const ButtonText = styled.Text`
    color: ${props => props.purple ? "#5159c1" : "white"};
    font-weight: 600
    font-size:20px
    opacity:0.8
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