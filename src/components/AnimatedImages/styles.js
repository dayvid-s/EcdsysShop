import styled from "styled-components"

export const ImageWrapper = styled.View`
    align-items:center;
    border-radius: 12px;
    margin-top: -20px;
`

export const ImageList = styled.FlatList``

export const AnimatedLines = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: 6px;
    margin-top:12px;
    background-color:${props => props.theme.backGround}
    `