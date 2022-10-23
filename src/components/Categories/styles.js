import styled from "styled-components";

export const Container = styled.View`
`
export const Title = styled.Text`
    color: ${props => props.theme.onBackGround}
    margin-left:8%
    font-size:18px
    margin-top:10px
    font-weight:600
    opacity:0.4
    `
export const CategoriesArea =styled.View`
    margin-top: 2%
    /* background-color: ${props => props.theme.secondary} */
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
    padding-right: 10px
    padding-left:13px
    /* margin-right:2px */
   
    `

export const CategoriesText =styled.Text`
    color: ${props => props.theme.onBackGround}
    font-weight:600
    font-size:12px
    opacity:0.5
`
export const CategoriesIconWrapper =styled.View`
    border-color:#224
    border-width:3px
    justify-content: center
    align-items: center    
    padding:30px
    background-color:${props => props.theme.roseBlue}
    max-height:50px
    max-width:50px
    border-radius:50px
    `