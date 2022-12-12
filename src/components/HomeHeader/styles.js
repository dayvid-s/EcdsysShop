import styled from "styled-components"
export const IconsArea = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-right : 20px
    margin-left : 5%
    margin-top: 20px
    
    `
export const TotalProductsWrapper = styled.View`
    background-color: ${props => props.theme.roseBlue};
    padding: 13px;

    margin-top: -7px;
    /* margin-left:30px; */
    left:34px;
    position: absolute;
    align-items: center;
    justify-content: center;
    border-radius:30px;
    `
export const TotalProductsText = styled.Text`
    color: ${props => props.theme.onBackGround}
    margin-top: 10px
    position: absolute;
    /* margin-left:50px */
    font-weight: 800
    font-size:14px
`
export const IconsWrapper = styled.TouchableOpacity`
    padding:15px
    /* background-color:${props => props.theme.roseBlue} */ 
     /* just in case white theme. */
    background-color:#111010
    border-radius: 12px
    `