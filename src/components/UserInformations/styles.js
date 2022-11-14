import styled from "styled-components"
export const Container = styled.View`
   ` 
export const UserInfoArea = styled.View`
   background-color:#1C1C26
   /* background-color:${props => props.theme.roseBlue} */
   padding:30px
   margin-left:5%
   margin-right:5%
   padding-bottom:4%;
   margin-bottom:20px
   border-radius:20px
   /* align-items:space-between */
   
   `
export const TitleInfoText = styled.Text`
   color:${props => props.theme.onBackGround}
   font-Size:15px
   font-family:'Hard'
   opacity:0.3
   ` 
export const TextAreaAndEdit = styled.View`
   flex-direction: row;
   align-items: center;
   justify-content: center;
   ` 
export const InfoText = styled.Text`
   color:${props => props.theme.onBackGround}
   font-Size:15px
   font-family:'Hard'
   margin-top:2%
   margin-bottom:5%
   flex:1
   ` 
export const EditButton = styled.TouchableOpacity`
   align-items: center;
   justify-content: center;
   padding:10px
   padding-left:15px
   padding-right:15px
   border-radius:10px
   background-color:#373644
   margin-top:-30px
   ` 
export const EditButtonText = styled.Text`
   color:${props => props.theme.onBackGround}
   font-size:15px
   ` 
export const NormalText = styled.Text`
   color:${props => props.theme.onBackGround}
   font-Size:20px
   font-family:'Hard'
   ` 
export const DescriptionArea =styled(UserInfoArea)`
   padding-bottom: 30%;
`

export const TouchableArea =styled.TouchableOpacity`
`

export const SignOutArea =styled(UserInfoArea)`
   padding-top: 5%;
   padding-bottom: 5%;
   align-items: center
   justify-content: center
`