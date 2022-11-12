import styled  from 'styled-components';

export const Container = styled.View`
    flex:1
    `
export const HeaderArea = styled.View`
    /* flex:1 */
    padding:50px
    background-color:#171717
`
export const GreetingsText = styled.Text`
    color:#fff
    font-size:18px
    margin-top:-25px
    font-family: "Medium"
`
export const DrawerWrapper = styled.View`
flex: 1 
    background-color:#101010
    paddingTop: 10px
`
export const BottomArea = styled.View`
    padding:20px
    border-top-width: 1px
    border-top-color: #ccc
    background-color:#101010
`
export const LogoutArea = styled.TouchableOpacity`
    padding-top:15px
`
export const LogoutWrapper = styled.TouchableOpacity`
    flex-direction: row; 
    align-items: center
`
export const LogoutText = styled.Text`
    font-size: 15px
    margin-left: 5px
    color:#rgb(178,180,183)
    font-family: "Medium"
    `


