import React, { useCallback, useMemo, useRef, useState } from 'react';

import {
  BottomSheetArea,
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
import { useSelector} from 'react-redux'
import BottomSheet from '@gorhom/bottom-sheet';
import BottomSheetz from '../../components/BottomSheetz'
export default () => {
  const [emailOrName, setEmailOrName]= useState()
  const [text, setText]= useState()

  const theme = useTheme()
  const navigation = useNavigation()
  const user = useSelector((state) => state.user.userData); 
  const bottomSheetRef = useRef();
  const snapPoints = useMemo(() => ['25%', '50%'], []);
  const handleSheetChanges = useCallback((index) => {
  }, []);
  const openBottomSheet =()=>{
    bottomSheetRef.current?.expand()
  }

  return (
    <Container>
      <UserInfoArea>
       
        <TitleInfoText>
          Nome
        </TitleInfoText>
        <TextAreaAndEdit>
          <InfoText>{user.name}</InfoText>
          <EditButton onPress={()=>{openBottomSheet(), setEmailOrName('nome')}}   >
            <EditButtonText>Editar</EditButtonText>
          </EditButton>
        </TextAreaAndEdit>


        <TitleInfoText>
          Email
        </TitleInfoText>
        <TextAreaAndEdit >
          <InfoText>{user.email}</InfoText>
          <EditButton onPress={()=>{openBottomSheet(), setEmailOrName('email')}}  >
            <EditButtonText>Editar</EditButtonText>
          </EditButton>
        </TextAreaAndEdit>
        
        <TitleInfoText>
          Senha
        </TitleInfoText>
        <TextAreaAndEdit>
          <InfoText>°°°°°°°°°</InfoText>
          <EditButton >
            <EditButtonText>Mudar</EditButtonText>
          </EditButton>
        </TextAreaAndEdit>
      
      </UserInfoArea>

      <TouchableArea>

      <SignOutArea>
        <NormalText>Sair da conta</NormalText>  
      </SignOutArea>  
      </TouchableArea>
      <BottomSheetArea>
        <BottomSheet
        backgroundStyle={{backgroundColor:'#d1d1d1'}}
        enablePanDownToClose={true}
        ref={bottomSheetRef}
        index={1}
        snapPoints={[1,'80%']}
        onChange={handleSheetChanges}
        keyboardBehavior={'fillParent'}
        >
          <BottomSheetz
            value={text}
            setText={setText}
            changeInfo = {emailOrName}
            >
          </BottomSheetz>
        </BottomSheet>
      </BottomSheetArea>
    </Container>
  )
}
