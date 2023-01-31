import styled from 'styled-components';


export const Container = styled.View`
    margin-left: 5%;
    `
export const ProductArea = styled.View`
    `
export const ActivityIndicator = styled.ActivityIndicator`
    top:20px
    margin-bottom:-80px
    `
export const ProductsWrapper = styled.View`
    flex-direction: row;
    margin-top:20px;
    margin-right: 5%;
    border-radius: 8px;
    opacity:${props => props.loading ==true ? '0.4' : '10'};

`
export const ImageWrapper = styled.TouchableOpacity`
    border-radius: 15px;
    `

export const Image = styled.Image`
    border-radius:10px
    width:130px
    height:100px
    resize-mode:contain
    margin-left:-20px
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
export const InfoWrapper = styled.TouchableOpacity`
    padding-right: 80px;
    flex:1
`
export const TouchableIconArea = styled.TouchableOpacity`
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

export const ProductInfoText = styled.Text`
color: ${props => props.theme.onBackGround}
font-family:'Medium'
font-size:17px
font-weight: 400

`
    
export const ProductPriceText = styled.Text`
    color: ${props => props.theme.onBackGround}
    opacity:0.5
    font-size:15px
    font-weight:600
    
    `
    export const ProductRemoveWrapper = styled.TouchableOpacity`
        align-items: center;
        justify-content: center;
        margin-left:50px;
        margin-top: 7px;
        `
export const RemoveProductText = styled.Text`
        color: ${props => props.theme.roseBlue}
        font-size:15px
        font-weight: 700
`