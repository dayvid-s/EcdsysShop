import LinearGradient from 'react-native-linear-gradient'
import styled from 'styled-components';


export const Container = styled.View`
    flex:1
    margin-left: 5%
    margin-right: 5%
`
export const ProductArea = styled.View`
    margin-left: 5%;
    `
export const WrapperProducts = styled.TouchableOpacity`
    margin-top:20px;
    flex-direction: row;
    background-color: ${props => props.theme.roseBlue}
    margin-right: 5%;
    border-radius: 8px;
    `

export const ProductInformationWrapper = styled.View`
    flex-direction: row;
    justify-content:center;
    align-items: center;
    `
export const ProductQuantityWrapper = styled.View`
    flex-direction
    
`

export const TextInfo = styled.Text`
    color: ${props => props.theme.onBackGround}
    font-size:18px
    font-weight: 500
    color:#rgb(178,180,183)
`

export const ProductInfoText = styled.Text`
    color: ${props => props.theme.onBackGround}
    font-family:'Medium'
    font-size:17px
    font-weight: 400
    /* margin-left:10px; */
    /* opacity:0.8 */
    font-weight: 400
    
    `
    
    export const ProductPriceText = styled.Text`
    flex:1
    color: ${props => props.theme.onBackGround}
    font-size:15px
    font-weight:600
    
`