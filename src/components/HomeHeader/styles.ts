import styled from "styled-components/native/native"
export const IconsArea = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-right : 20px
    margin-left : 5%
    margin-top: 20px
    
    `
export const TotalProductsWrapper = styled.View`
    background-color: ${props => props.theme.roseBlue};
    padding: 13px;

    margin-top: -7px;
    left:34px;
    position: absolute;
    align-items: center;
    justify-content: center;
    border-radius:30px;
    `
export const TotalProductsText = styled.Text`
    color: ${props => props.theme.onBackGround}
    margin-top: 10px
    position: absolute;
    font-weight: 800
    font-size:14px
`
export const IconsWrapper = styled.TouchableOpacity`
    padding:15px
    background-color:${props => props.theme.secondary} 
    border-radius: 12px
    `