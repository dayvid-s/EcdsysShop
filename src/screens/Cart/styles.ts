import styled from "styled-components/native";

export const Container = styled.View`
    background-color: ${props => props.theme.backGround};
    flex:1
`
export const ScrollView = styled.ScrollView`
`
export const EmptyCartArea = styled.View`
    margin-top: 40%;
    align-items: center;
`
export const EmptyCartBigText = styled.Text`
    color: ${props => props.theme.onBackGround};
    font-size:30px
    font-family:'Hard'
    `
export const EmptyCartMediumText = styled.Text`
    color: ${props => props.theme.onBackGround};
    font-size:15px
    font-family:'Medium'
    top:20px

    `