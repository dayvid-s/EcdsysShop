import styled from "styled-components/native/native";
import {
    AntDesign,
} from '@expo/vector-icons';

export const Container = styled.View`
    background-color:${props => props.theme.backGround}
    flex:1
`
export const HeaderArea = styled.View`
    background-color: ${props => props.theme.roseBlue}
    flex-direction: row
    padding:10px
    padding-bottom:10px
    align-items: center
    
    `
export const GoBackIcon = styled(AntDesign)`
    margin-top:3px
    opacity:0.8 
    margin-left:6px
    margin-right:6px
`
export const InputArea = styled.View`
    flex-direction: row
    padding:9px
    background-color:${props => props.theme.backGround}
    border-radius:10px
    border-width:2px
    border-color: ${props => props.theme.roseBlue}
    max-width:85%
    `
export const TextInputToSearch = styled.TextInput`
    flex:1
    color: ${props => props.theme.onBackGround}
    /* color: #fff */
    margin-left:10px    
    `

export const SearchHistoryArea = styled.TouchableOpacity`
    flex-direction: row;
    border-bottom-color: gray;
    border-bottom-width: 1.5px;
    padding:8px
    opacity:0.7
`
export const TextWithSearches = styled.Text`
    color: ${props => props.theme.onBackGround}
    margin-top:4px;
    font-size: 18px
    flex:1
    margin-left:20px
`
