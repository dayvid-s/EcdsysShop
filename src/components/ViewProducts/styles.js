
import styled from 'styled-components';


export const Container = styled.View`
    flex:1
    margin-left: 7%
`
export const ProductArea = styled.View`
    flex-direction: row;
    `
export const WrapperProducts = styled.View`
    `

export const TextInfo = styled.Text`
    color: ${props => props.theme.onBackGround}
    margin-top:5%
    font-size:20px
    font-weight: 400
    color:gray
    
`

export const ProductInfoText = styled.Text`
    color: ${props => props.theme.onBackGround}
    /* margin-top:100% */
    font-size:15px
    font-weight: 400
    `

export const ProductPriceText = styled.Text`
    color: ${props => props.theme.onBackGround}
    font-size:13px
    font-weight: 400
    color:gray    
`