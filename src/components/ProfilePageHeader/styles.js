import styled from "styled-components"
export const Container = styled.View`
    z-index: 0;
    /* opacity:${props => props.ModalOpacity ? '0.1' : 1}; */
` 
export const IconsArea = styled.View`
    flex-direction: row;
    margin-right : 5%
    margin-left : 5%
    margin-top: 15px
    align-items: space-between
    
    `
export const IconsWrapper = styled.TouchableOpacity`

    padding:12px
    background-color:#111010
    border-radius: 12px
    opacity:0.6
    `
    export const TitleArea = styled.View`
    align-items: center;
    justify-content: center;
    flex:2
    margin-bottom:5px
    `
    export const HeaderTitle = styled.Text`
    font-family: Medium;
    color: ${props => props.theme.onBackGround}    
    align-self:center
    font-size:25px
    `
    export const UserInfoArea = styled.View`
    margin-right:5%
    margin-left:5%
    border-radius:20px
    margin-bottom:20px

    margin-top: 40px;
    flex-direction:row;
    
    `
    export const ImageWrapper = styled.View`
    margin-left: 5%;
    `
    export const UserInfoText = styled.Text`
    /* margin-top:-70px */
    font-family: Medium;
    color: ${props => props.theme.onBackGround}    
    align-self:center
    font-size:20px
    margin-bottom :7%;
    margin-left : 5%;
    margin-right: 40%;
    `