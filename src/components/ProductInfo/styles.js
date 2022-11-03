import styled from "styled-components"

export const Container = styled.View`
margin-left:7%
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
    margin-left:6px
    font-weight: 500
    margin-top:1px
    `
    export const ProductPriceArea = styled.View`
    flex-direction: row;
    align-items: center;
    margin-top:16px
    `
    export const ProductPriceText = styled.Text`
    font-size:33px;
    color: ${props => props.theme.onBackGround}
    font-weight: 600
    `
    export const ShippingValueText = styled.Text`
    font-size:15px;
    color: ${props => props.theme.gray300}
    font-weight: 600
    /* opacity:0.6 */
    margin-top: 15px
    margin-left: 5px
    `