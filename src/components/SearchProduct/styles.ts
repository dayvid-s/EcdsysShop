import styled from "styled-components/native";

export const Container = styled.View`
`
export const Title = styled.Text`
    color: ${props => props.theme.onBackGround}
    margin-left:5%
    font-size:34px
    margin-top: 1%
    font-weight:600
    `
export const SearchInputArea = styled.TouchableOpacity`
    margin-top: 5%
    margin-right: 5%;
    margin-left: 5%;
    background-color: ${props => props.theme.secondary}
    padding:5px
    border-radius:20px
    justify-content: space-between
    flex-direction: row
    align-items: center
 `
export const SearchInputText = styled.Text`
    color: ${props => props.theme.onBackGround}
    font-weight:600
    margin-left:15px
    font-size:18px
    opacity:0.5
    opacity:${props => props.currentTheme == 'dark' ? '0.5' : '1'};
    
    `
export const SearchIconWrapper = styled.View`
    padding:14px
    background-color:${props => props.currentTheme == 'light' ? props.theme.secondary : props.theme.roseBlue};
    border-radius:20px
    `