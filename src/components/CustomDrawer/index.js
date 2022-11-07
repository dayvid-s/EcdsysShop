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

import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { 
    Ionicons,
  } from '@expo/vector-icons'; 

const CustomDrawer = props => {
  return (
    <Container >
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{flex:1,backgroundColor: '#18191A'}}>
        <HeaderArea>
          <GreetingsText>Olá, Carlos Santana</GreetingsText>


        </HeaderArea>
        <DrawerWrapper>
          <DrawerItemList {...props} />
        </DrawerWrapper>

        
      <BottomArea>
        <LogoutArea onPress={() => {}}>
          <LogoutWrapper>
            <Ionicons name="exit-outline" size={25} color={'#rgb(178,180,183)'} />
            <LogoutText>Sair da conta</LogoutText>
          </LogoutWrapper>
        </LogoutArea>
      </BottomArea>
                  </DrawerContentScrollView>
    </Container>
  );
};

export default CustomDrawer;