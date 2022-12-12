import React from 'react';
import {
  Container,
  HeaderArea,
  GreetingsText,
  DrawerWrapper,
  BottomArea,
  LogoutArea,
  LogoutWrapper,
  LogoutText
} from './styles' 
import {firebase} from '../../services/firebase-config'
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { 
  Ionicons,
} from '@expo/vector-icons'; 
import  AsyncStorage  from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux'
import {changeUserInfo} from '../../redux/features/userSlice'
import { retrieveCart } from '../../redux/features/cartSlice';
import { useSelector} from 'react-redux'

export function CustomDrawer(props) {
  
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user.userData); 
  const handleLogout= ()=> {
    AsyncStorage.clear()
    firebase.auth().signOut()
    dispatch(changeUserInfo(null))
    dispatch(retrieveCart(null))

  }
  return (
    <Container >
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{flex:1,backgroundColor: '#171717'}}>
        <HeaderArea>
          <GreetingsText>Olá, {user.name}</GreetingsText>


        </HeaderArea>
        <DrawerWrapper>
          <DrawerItemList {...props} />
        </DrawerWrapper>

        
      <BottomArea>
        <LogoutArea>
          <LogoutWrapper onPress={handleLogout} >
            <Ionicons name="exit-outline" size={25} color={'#rgb(178,180,183)'} />
            <LogoutText>Sair da conta</LogoutText>
          </LogoutWrapper>
        </LogoutArea>
      </BottomArea>
      </DrawerContentScrollView>
    </Container>
  );
};

// export default CustomDrawer;