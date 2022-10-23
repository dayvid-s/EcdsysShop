import styled from "styled-components";

export const Container = styled.View`
    margin-left:5%
    margin-right:5%
`

export const InputArea = styled.View`
    background-color:${props => props.theme.secondary}
    height:60px;
    border-radius: 20px;
    border-width: 1px;
    border-color: ${props => props.theme.gray300};
    margin-bottom: 10px;
    align-items: center;
    flex-direction: row;
    padding-left: 15px;
    justify-content:space-around;
    border-color: ${(props) => props.custom}
`

export const TextInfo = styled.Text `
    margin-left: 15px;
    margin-bottom: 8px
    font-size:18px
    /* opacity:0.5 */
    color: ${props => props.theme.onBackGround};
    /* font-family: 'Ultra' */
    `

export const Input = styled.TextInput`
    flex:1;
    font-size:16px;
    color: ${props => props.theme.onBackGround};
    margin-left: 10px;
    /* max-width: 80%; */
`
export const TouchabeOpacity = styled.TouchableOpacity `
    margin-right:10px

`