import styled from "styled-components"

export const Container = styled.View`
margin-left:5%
    `
export const ProductName = styled.Text`
    font-size:30px;
    color: ${props => props.theme.onBackGround}
    margin-top:6px
    font-weight: 600
    opacity:0.6
    `
    export const ProductRatingArea = styled.View`
    flex-direction: row;
    `
    export const StarWrapper = styled.View`
    `
    export const TotalUserRatings = styled.Text`
    font-size:15px;
    color: ${props => props.theme.roseBlue}
    margin-left:5px
    font-weight: 500
    margin-top:1px
    `
    export const ProductPriceArea = styled.View`
    flex-direction: row;
    align-items: center;
    `
    export const OldProductValue = styled.Text`
    font-size:22px;
    color: ${props => props.theme.onBackGround}
    text-decoration-line: line-through
    opacity:0.2
    margin-left:5px
    margin-top:15px
    margin-bottom:-4px
    `
    export const ProductPriceText = styled.Text`
    font-size:34px;
    color: ${props => props.theme.onBackGround}
    font-weight: 600
    `
    export const ShippingValueText = styled.Text`
    font-size:15px;
    color: ${props => props.theme.gray300}
    font-weight: 600
    margin-top: 12px
    margin-left: 5px
    color: ${props => props.theme.roseBlue}
    opacity:0.7
    `
    export const ProductSpecText = styled.Text`
    color: #FFF
    font-weight: 700    
    margin-top:6px
    margin-bottom:6px
    margin-left:3px
    `
    export const ProductSpecsArea = styled.View`
    flex-direction: row;
    align-items: center;
    `
    export const  ProductSpecsWrapper = styled.TouchableOpacity`
    padding:8px
    padding-right:10px
    padding-left:10px 
    background-color:#2C2B2B
    flex-direction: row;
    margin-right:10px
    border-radius:7px
    align-items: center
    justify-content: center
    border-width:2px
    border-color: ${props => props.state ? "#5159c1" : '#rgb(20, 20, 20)'};
    `