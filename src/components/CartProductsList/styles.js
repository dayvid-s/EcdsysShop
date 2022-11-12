import LinearGradient from 'react-native-linear-gradient'
import styled from 'styled-components';


export const Container = styled.View`
    margin-left: 5%;
    `
export const ProductsWrapper = styled.TouchableOpacity`
    flex-direction: row;
    margin-top:20px;
    margin-right: 5%;
    border-radius: 8px;
    `

export const ProductTextWrapper = styled.View`
    flex-direction: row;
    `
export const BottomIconsArea = styled.View`
    flex-direction: row;
    align-items:center
    
    `
export const ProductInfoWrapper = styled.View`
    align-items: flex-start
    padding-right:40%
    
    `
export const TouchableIconArea = styled.View`
    margin-top:8px
    padding:5px
    border-radius:32px
    align-items:center
    justify-content:center  
    background-color:${props => props.theme.roseBlue}
    `

export const TextInfo = styled.Text`
    color: ${props => props.theme.onBackGround}
    font-size:18px
    font-weight: 500
    color:#rgb(178,180,183)
`
export const RemoveProductText = styled.Text`
    color: ${props => props.theme.roseBlue}
    font-size:15px
    margin-left: 30%
    font-weight: 700
`

export const ProductInfoText = styled.Text`
    color: ${props => props.theme.onBackGround}
    font-family:'Medium'
    font-size:17px
    font-weight: 400
    
    `
    
    export const ProductPriceText = styled.Text`
    flex:1
    color: ${props => props.theme.onBackGround}
    opacity:0.5
    font-size:15px
    font-weight:600
    
`