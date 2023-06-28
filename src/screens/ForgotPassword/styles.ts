import styled from "styled-components/native/native";


export const TouchableWithoutFeedback = styled.TouchableWithoutFeedback`
`
export const Container = styled.View`
    background-color: ${props => props.theme.backGround}
    flex:1;
    `

export const HeaderArea = styled.View`
    margin-top: 20%;
    margin-left: 3% ;
    flex-direction:row;
    `
export const WrapperIcon = styled.TouchableOpacity`
    max-height: 60%;
    padding:6px
    padding-right:8px
    padding-left:8px
    border-width: 2px;
    border-color: ${props => props.theme.gray300};
    margin-left: 20px;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    `

export const HeaderText = styled.Text`
    font-weight: 700;
    font-size: 35px;
    margin-left: 30px;
    color: ${props => props.theme.onBackGround};
`
export const HeaderTextLittle = styled(HeaderText)`
    margin-top: 100px
    font-weight: 600;
    font-size: 18px;
    margin-left: 8% ;
    margin-right: 8% ;
`

export const SubmitArea = styled.View`
`
export const InputArea = styled.View`
    margin-top:10px
    background-color:${props => props.theme.secondary}
    height:60px;
    border-radius: 20px;
    border-width: 2px;
    border-color: ${props => props.theme.gray300};
    margin-bottom: 10px;
    align-items: center;
    flex-direction: row;
    padding-left: 15px;
    justify-content:space-around;
    margin-right:24px
    margin-left:24px
    `

export const Input = styled.TextInput`
    flex:1;
    font-size:16px;
    color: ${props => props.theme.onBackGround};
    margin-left: 10px;
`
export const ErrorArea = styled.View`
    margin-top:-5px
    margin-right:30px
    `

export const ErrorText = styled.Text`
    color:red
    align-self: flex-end
    font-weight: 600
    opacity:0.8
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
    margin-top: 10px;
`
export const CustomButtonText = styled.Text`
    font-size: 19px;
    font-weight: 800;
    color:white
`

