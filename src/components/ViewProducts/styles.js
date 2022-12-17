import LinearGradient from 'react-native-linear-gradient'
import styled from 'styled-components';


export const Container = styled.View`
    flex:1
    margin-left: 5%
    margin-right: 5%
`
export const ProductArea = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    justify-content:${props => props.quantity >2?  "space-around" : "space-between" };
    `
export const WrapperProducts = styled.TouchableOpacity`
    margin-top:10px;

    `

export const TextInfo = styled.Text`
    color: ${props => props.theme.onBackGround}
    margin-top:2%
    font-size:18px
    font-weight: 500
    color:#rgb(178,180,183)
`

export const ProductInfoText = styled.Text`
    color: ${props => props.theme.onBackGround}
    font-size:${props => props.typeOfPage == 'DayOffer'? '20px' : '15px'};
    font-weight: 400
    margin-left:${props => props.typeOfPage == 'DayOffer'? '25px' : 0};
    `
    
    export const ProductPriceText = styled.Text`
    margin-top:4px
    color: ${props => props.theme.onBackGround}
    font-size:${props => props.typeOfPage == 'DayOffer'? '13px' : '13px'};
    font-weight: 400
    color:gray    
    margin-left:${props => props.typeOfPage == 'DayOffer'? '25px' : 0};

`