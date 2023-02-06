import styled from "styled-components/native";

export const Container = styled.View`
    margin-top:20px
    margin-bottom:20px
    margin-left:5%
    flex-direction: row
    align-items: center
`
export const FirstIcon = styled.View`
    flex:1    
    opacity:0.6
    padding-right:10px
    `
    
export const IconsWrapper = styled.TouchableOpacity`
    opacity:0.6
    margin-right:20px
    `

export const TotalProductsWrapper = styled.View`
    /* background-color: ${props => props.theme.roseBlue}; */
    padding: 13px;

    margin-top: -16px;
    /* margin-left:30px; */
    right:-4px;
    position: absolute;
    align-items: center;
    justify-content: center;
    border-radius:30px;
    `
export const TotalProductsText = styled.Text`
    color: ${props => props.theme.onBackGround}
    margin-top: 10px
    position: absolute;
    /* margin-left:50px */
    font-weight: 800
    font-size:14px
`