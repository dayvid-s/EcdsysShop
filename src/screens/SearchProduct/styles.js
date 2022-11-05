import styled from "styled-components";

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
export const InputArea = styled.View`
    flex-direction: row
    /* margin-top:20px */
    padding:7px
    /* padding-right:73% */
    background-color:#121212
    border-radius:10px
    border-width:2px
    border-color:gray
    `
export const TextInputToSearch = styled.TextInput`
padding:2px
padding-right:73%
    
`

export const SearchHistoryArea = styled.TouchableOpacity`
    flex-direction: row;
    border-color: gray;
    border-width: 1px;
    padding:8px
`
export const TextWithSearches = styled.Text`
    color: gray;
    margin-top:4px;
    font-size: 18px
    flex:1
    margin-left:20px
`
