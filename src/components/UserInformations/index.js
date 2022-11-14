import React from 'react'
import {
  Container,
  DescriptionArea,
  EditButton,
  EditButtonText,
  InfoText,
  NormalText,
  SignOutArea,
  TextAreaAndEdit,
  TitleInfoText,
  TouchableArea,
  UserInfoArea,

} from './styles'
import { useTheme } from 'styled-components'
import { useNavigation } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons';
import { Products } from './../../data/products';
import { Image } from 'react-native';

export default () => {
  const theme = useTheme()
  const navigation = useNavigation()
  const item = Products[0]
  return (
    <Container>
      <UserInfoArea>
        <TitleInfoText>
          Nome
        </TitleInfoText>
        
        <TextAreaAndEdit>
          <InfoText>Carlos Oliveira</InfoText>
          <EditButton>
            <EditButtonText>Editar</EditButtonText>
          </EditButton>
        </TextAreaAndEdit>
        <TitleInfoText>
          Email
        </TitleInfoText>
        <TextAreaAndEdit>
          <InfoText>CarlosOliveira@gmail.com</InfoText>
          <EditButton>
            <EditButtonText>Editar</EditButtonText>
          </EditButton>
        </TextAreaAndEdit>
        
        <TitleInfoText>
          Senha
        </TitleInfoText>
        <TextAreaAndEdit>

          <InfoText>°°°°°°°°°</InfoText>
          <EditButton>
            <EditButtonText>Mudar</EditButtonText>
          </EditButton>
        </TextAreaAndEdit>
      
      </UserInfoArea>

      <DescriptionArea></DescriptionArea>
      <TouchableArea>

      <SignOutArea>
        <NormalText>Sair da conta</NormalText>  
      </SignOutArea>  
      </TouchableArea>
    </Container>
  )
}
