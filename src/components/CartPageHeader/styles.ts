import styled from "styled-components/native"
export const IconsArea = styled.View`
    flex-direction: row;
    margin-right : 20px
    margin-left : 5%
    margin-top: 15px
    
    `
export const IconsWrapper = styled.TouchableOpacity`
    padding:15px
    background-color:${props => props.theme.secondary}
    border-radius: 12px
    `
export const TitleArea = styled.View`
    margin-left: 60px;
    align-items: center;
    justify-content: center;
    `
export const HeaderTitle = styled.Text`
    font-family: "Medium";
    color: ${props => props.theme.onBackGround}    
    align-self:center
    font-size:20px
`
export const SmallTitle = styled.Text`
    font-family: "Easy";
    color: ${props => props.theme.onBackGround}    
    `