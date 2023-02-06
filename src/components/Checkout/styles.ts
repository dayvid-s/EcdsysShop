import styled from "styled-components/native"

export const Container = styled.View`
    margin-top: 10px
    margin-left:5%
    margin-right:5%
    `
export const  CheckoutWrapper = styled.View`
    border-top-color: ${props => props.theme.gray300};
    border-top-width: 1px;
    padding-top:12px
    padding-bottom:12px
    justify-content: space-between
    flex-direction:row
    `
export const  TextArea = styled.View`
    `
export const ProductInfoText = styled.Text`
    flex:1
    color: ${props => props.theme.onBackGround}
    font-size: 15px
    font-weight: 600
    opacity:${props => props.currentTheme =='light' ? '1' : '0.6'};
    font-family:'Medium'

    `
export const ProductInfoPrice = styled.Text`
    color: ${props => props.theme.onBackGround}
    font-size: 15px
    font-weight: 600
    margin-right:20px
    font-family:'Medium'

    `
export const ProductPriceText = styled.Text`
    color: #505050   
    font-size: 15px
    font-weight: 600
    margin-right:20px
    font-family:'Medium'
    `
export const TotalText = styled(ProductPriceText)`
    color: ${props => props.theme.onBackGround}
    font-size:20px
    font-family:'Hard'
  `  
export const CheckoutButton = styled.TouchableOpacity`
    background-color: ${props => props.theme.roseBlue}
    padding:19px
    border-radius:30px
    justify-content: center;
    align-items: center;
    `  
export const CheckoutButtonText = styled.Text`
    font-size: 18px;
    color:white
    font-family:"Hard"
`  