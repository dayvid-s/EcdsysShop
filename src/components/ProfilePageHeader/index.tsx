import React, { useState } from 'react'
import {
  HeaderTitle,
  IconsArea,
  IconsWrapper,
  TitleArea,
  Container,
  UserInfoArea,
  UserInfoText,
  ImageWrapper,

} from './styles'
import { useTheme } from 'styled-components'
import { useNavigation } from '@react-navigation/native'
import { 
  AntDesign,
  Entypo
} from '@expo/vector-icons';
import { Image} from 'react-native';
import { Modal} from 'react-native-paper';
import { useAppSelector } from '../../hooks/useAppSelector'

import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default () => {
  const [modalVisibility,setModalVisibility] = useState(false)
  const theme = useTheme()
  const navigation = useNavigation()
  const user = useAppSelector((state) => state.user.userData); 

  const showModal = () => setModalVisibility(true);
  const hideModal = () => setModalVisibility(false);  
  const containerStyle = {
    backgroundColor: '#1a1C26',
    marginLeft:'30%',
    marginTop:'-20%',
    marginRight:'5%',
    elevation:0.2

  };
  return (
    <GestureHandlerRootView>
      <Container >
      <IconsArea >
        <IconsWrapper onPress={() => navigation.goBack()}>
          <AntDesign name="left" size={22} color={theme.onBackGround} />
        </IconsWrapper>
        
        <TitleArea>
          <HeaderTitle>Minha Conta</HeaderTitle>
        </TitleArea>

      </IconsArea>

      <UserInfoArea>
        <ImageWrapper>

          <Image source={{uri: user.userAvatar!= null? user.userAvatar 
              :
              "https://www.nicepng.com/png/full/136-1366211_group-of-10-guys-login-user-icon-png.png"
            }} 
            style={{
              width:90,
              height:90,
              borderRadius:100,
            }}
            ></Image>
          </ImageWrapper>
        <UserInfoText>{user.name}</UserInfoText>
      </UserInfoArea>

      </Container>
    </GestureHandlerRootView>
  )
}
