import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1
    align-items: center 
    background-color:#7159c1
`

export const InputArea = styled.View`

    background-color:#fff
    height:60px;
    border-radius: 20px;
    margin-top: 50px;
    align-items: center;
    flex-direction: row;
    padding-left: 15px;
    justify-content:space-around;
    margin-right:5%;
    margin-left:5%;
    `

export const TextInfo = styled.Text`
    margin-left: 15px;
    margin-bottom: 8px
    font-size:18px
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
    justify-self: center
    margin-left:30%
`
