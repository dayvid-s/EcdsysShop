import styled from "styled-components";

export const Container = styled.View`
    flex: 1
    align-items: center 
    background-color:#FEFEFE
   background-color: ${props => props.theme.roseBlue}

`

export const InputArea = styled.View`
    flex-direction: row;
    align-items: center;
    margin-left:-70px
    /* align-items: flex-start; */
    /* justify-content:space-around; */
    /* background-color:#fff
    height:60px;
    border-radius: 20px;
    margin-top: 50px;
    flex-direction: row;
    padding-left: 15px;
    margin-right:5%;
    margin-left:5%; */
    `

export const TextInfo = styled.Text `
    left: 65px;
    margin-bottom: 8px
    font-size:18px
    font-family: 'Medium'
    color:#fff
    `

export const Input = styled.TextInput`
    flex:1;
    font-size:16px;
    color: ${props => props.theme.onBackGround};
    margin-left: 10px;
    color: #fff
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
    font-size: 17px;
    font-family: "Medium"
    /* font-weight: 800; */
    color:#fff
    /* flex:1 */
    /* justify-self: center */
    /* margin-left:30% */
    /* flex:1 */

    `
