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
import { Products } from './../../data/products';
import { Image} from 'react-native';
import { Modal} from 'react-native-paper';

export default () => {
  const [modalVisibility,setModalVisibility] = useState(false)
  const theme = useTheme()
  const navigation = useNavigation()
  const item = Products[0]
  const showModal = () => setModalVisibility(true);
  const hideModal = () => setModalVisibility(false);  
  const containerStyle = {
    backgroundColor: '#1a1C26',
    // paddingLeft: 10,
    marginLeft:'30%',
    marginTop:'-20%',
    marginRight:'5%',
    // zIndex:1,
    elevation:0.2

  };
  return (
    <Container >
    <IconsArea >
        <IconsWrapper onPress={() => navigation.goBack()}>
          <AntDesign name="left" size={22} color="#FFF" />
        </IconsWrapper>
        
        <TitleArea>
          <HeaderTitle>Minha Conta</HeaderTitle>
        </TitleArea>

        <IconsWrapper>
          {/* <Entypo  name="dots-three-vertical" size={22} color="#FFF" /> */}
        </IconsWrapper>
      </IconsArea>

      <UserInfoArea>
        <ImageWrapper>

          <Image source={item.productImage} 
            style={{
              width:90,
              height:90,
              borderRadius:100,
            }}
            ></Image>
          </ImageWrapper>
        <UserInfoText>Carlos oliveira</UserInfoText>
      </UserInfoArea>

      </Container>
  )
}
