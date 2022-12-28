import styled  from 'styled-components';

export const Container = styled.View`
    flex:1
    `
export const HeaderArea = styled.View`
    padding:30px
    background-color:#171717
    background-color:${props=> props.theme.backGround}
    `
    export const ImageArea = styled.TouchableOpacity`
`
export const GreetingsText = styled.Text`
    color:${props=> props.theme.onBackGround}
    font-size:18px
    margin-top:-25px
    font-family: "Medium"
    margin-left:70px
    top:-10px
    `
    export const DrawerWrapper = styled.View`
    flex: 1 
    background-color:#101010
    background-color:${props=> props.theme.backGround}
    padding-Top: 10px
    `
export const BottomArea = styled.View`
    padding:20px
    border-top-width: 1px
    border-top-color: #ccc
    background-color:#101010
    background-color:${props=> props.theme.backGround}
`
export const SwitchArea = styled.View`
    top: -30px;
`
export const SwitchText = styled.Text`
    font-family: "Medium";
    color: ${props=> props.theme.onBackGround}
    top:30px
    right:-5px
    font-size:16px
    opacity:0.7
`
export const LogoutArea = styled.View`
`
export const LogoutWrapper = styled.TouchableOpacity`
    flex-direction: row; 
    align-items: center
    max-width: 50%    
    opacity:0.6
    font-family: 'Medium'
`
export const LogoutText = styled.Text`
    font-size: 15px
    margin-left: 5px
    color:${props=> props.theme.onBackGround}

    font-family: "Medium"
    `


