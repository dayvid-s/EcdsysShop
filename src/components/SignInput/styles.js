import styled from "styled-components";

export const InputArea = styled.View`
    background-color:${props => props.theme.secondary}
    height:60px;
    border-radius: 20px;
    margin-left: 5%;
    margin-right: 5%;
    justify-content: center;
    align-items: center;
    border-width: 1px;
    border-color: ${props => props.theme.gray300};
    margin-bottom: 25px;
`