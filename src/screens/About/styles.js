import styled from "styled-components"

export const Container = styled.View`
    background-color: ${props => props.theme.backGround}
    /* background-color:#3E3E3E */

    flex:1;
    width:100%;
    height:100%;
    position: relative
    /* align-items:center */
    `
    export const ImageWrapper = styled.View`
    /* background-color: ${props => props.theme.onBackGround}; */
    align-items:center;
    /* margin-top:80px; */
    border-radius: 12px;

`
    export const ProductName = styled.Text`
    font-size:35px;
    color: ${props => props.theme.onBackGround}
    margin-left:26px
    font-weight: 600
    max-width:300px
    `
    
    export const ProductDescription = styled.Text`
    font-size:15px;
    /* color: ${props => props.theme.onBackGround} */
    color: gray
    margin-left:26px
    font-weight: 500
    `