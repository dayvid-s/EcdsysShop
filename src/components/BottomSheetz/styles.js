import styled from "styled-components";

export const Container = styled.View`
    margin-left:5%
    margin-right:5%
`

export const InputArea = styled.View`

    background-color:#fff
    height:60px;
    border-radius: 20px;
    /* border-width: 2px;
    border-color: ${props => props.theme.gray300}; */
    margin-top: 50px;
    align-items: center;
    flex-direction: row;
    padding-left: 15px;
    justify-content:space-around;
    /* border-color: ${(props) => props.custom} */
    /* margin-top: 13550px; */
    margin-right:5%;
    margin-left:5%;
    /* max-width: 30%; */
    /* right:30px */

    `

export const TextInfo = styled.Text `
    margin-left: 15px;
    margin-bottom: 8px
    font-size:18px
    /* opacity:0.5 */
    color: ${props => props.theme.onBackGround};
    `

export const Input = styled.TextInput`
    flex:1;
    font-size:16px;
    color: ${props => props.theme.onBackGround};
    margin-left: 10px;
    color: #000
`
export const CustomButton = styled.TouchableOpacity`
    
    background-color:#6c1e85;   /*#7159c1    */
    padding: 20px;
    /* padding-left: 100px; */
    /* padding-right: 100px; */
    border-radius: 20px;
    margin-left: 5%;
    margin-right: 5%;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    margin-top: 15px;
    flex-direction: row;
`
export const CustomButtonText = styled.Text`
    font-size: 19px;
    font-weight: 800;
    color:white
    flex:1
    /* align-self: center */
    justify-self: center
    margin-left:30%
    /* opacity */
`
