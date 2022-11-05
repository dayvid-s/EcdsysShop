import styled from "styled-components"

export const ScrollView = styled.ScrollView`
    `
export const Container = styled.View`
    background-color: ${props => props.theme.backGround}
    flex:1;
    width:100%;
    height:100%;
    position: relative
    `
export const ImageWrapper = styled.View`
    align-items:center;
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
    export const ImageList = styled.FlatList`
    `
    export const AnimatedLines = styled.View`
        width: 100%;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin-bottom: 16px;
        margin-top:32px;
        background-color:#1222;

    `