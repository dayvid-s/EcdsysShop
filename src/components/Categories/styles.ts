import styled from "styled-components/native";

export const Container = styled.View`
`
export const Title = styled.Text`
    color: #rgb(178,180,183)
    font-size:20px
    margin-top:10px
    font-weight:600
    `
export const CategoriesArea =styled.View`
    margin-top: 2%
    padding:8px
    border-radius:20px
    justify-content: space-between
    flex-direction: row
    align-items: center
    justify-content: center

    `

export const WrapperCategories = styled.TouchableOpacity`
    justify-content:center
    align-items:center
    
    `

    export const CategoriesText =styled.Text`
    color: ${props => props.theme.onBackGround}
    font-weight:600
    font-size:12px
    opacity:${props => props.currentTheme =='light' ? '1' : '0.5'};
`
export const CategoriesIconWrapper =styled.View`
    border-color:#224
    border-width:3px
    border-width:${props => props.currentTheme =='light' ? '0px' : '3px'};
    justify-content: center
    align-items: center    
    padding:30px
    background-color:${props => props.theme.roseBlue}
    max-height:50px
    max-width:50px
    border-radius:50px
    `
export const FlatlistArea = styled.View`
    margin-left: 14px;
    margin-top:8px
`