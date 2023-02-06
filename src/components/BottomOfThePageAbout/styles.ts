import styled from "styled-components/native"

export const Container = styled.View`
margin-left:5%
    `
export const  DescriptionTitle = styled.Text`
    color: ${props => props.theme.onBackGround}    
    font-size: 20px
    font-family: 'Hard'
    `
    export const  DescriptionText = styled.Text`
    font-family: 'Medium'
    align-self: center
    margin-top:5px
    margin-right:5%
    color: ${props => props.theme.onBackGround}    
    `