import React, { useCallback, useMemo, useRef, useState } from 'react';

import {
  BottomSheetArea,
  Container,
  DescriptionArea,
  EditButton,
  EditButtonText,
  InfoText,
  ModalText,
  NormalText,
  SignOutArea,
  TextAreaAndEdit,
  TitleInfoText,
  TouchableArea,
  UserInfoArea,
} from './styles'
import { useTheme } from 'styled-components'
import { useNavigation } from '@react-navigation/native'
import { useAppSelector } from '../../hooks/useAppSelector'

import BottomSheet from '@gorhom/bottom-sheet';
import BottomSheetComponent from '../../components/BottomSheetComponent'
import { Keyboard, } from 'react-native';
import { Modal, Portal} from 'react-native-paper';


export default () => {
  const [visible, setVisible] = useState(false);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20};
  const [emailOrName, setEmailOrName]= useState()
  const [text, setText]= useState()
  const [indexz, setIndexz]= useState('100%')
  const theme = useTheme()
  const navigation = useNavigation()
  const user = useAppSelector((state) => state.user.userData); 
  const bottomSheetRef = useRef();
  const openBottomSheet = () => bottomSheetRef.current?.expand()
  const closeBottomSheet = () => bottomSheetRef.current?.close()
  const openModal= ()=> {
      // setVisible(true)
    setTimeout(() => {
      setVisible(true)
    }, 500)  
    setTimeout(() => {
      setVisible(false)
    }, 3500)  
  }

  return (
    <Container>
      <Portal  >
        <Modal
          visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}> 
          <ModalText >
            {emailOrName=='email'? 'Email Alterado com sucesso'
            :
            "Nome alterado com sucesso."
            }
            </ModalText> 
        </Modal> 
      </Portal>

      <UserInfoArea>
        <TitleInfoText>
          Nome
        </TitleInfoText>
        <TextAreaAndEdit>
          <InfoText>{user.name}</InfoText>
          <EditButton onPress={()=>{openBottomSheet(), setEmailOrName('name'), setText('') }}   >
            <EditButtonText>Editar</EditButtonText>
          </EditButton>
        </TextAreaAndEdit>


        <TitleInfoText>
          Email
        </TitleInfoText>
        <TextAreaAndEdit >
          <InfoText>{user.email}</InfoText>
          <EditButton onPress={()=>{openBottomSheet(), setEmailOrName('email'), setText('')}}  >
            <EditButtonText>Editar</EditButtonText>
          </EditButton>
        </TextAreaAndEdit>

        <TitleInfoText>
        Histórico de compras
        </TitleInfoText>
        <TextAreaAndEdit>
          <InfoText>Vazio</InfoText>
          <EditButton > 
            <EditButtonText>Ver produtos </EditButtonText> 
          </EditButton>
        </TextAreaAndEdit>

        <TitleInfoText>
          Produtos salvos
        </TitleInfoText>
        <TextAreaAndEdit>
          <InfoText>0</InfoText>
          <EditButton >
            <EditButtonText>Ver produtos </EditButtonText>
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
        index={-1}
        snapPoints={[1,indexz]}
        onChange={()=>{Keyboard.dismiss()}}
        >
          <BottomSheetComponent
            value={text}
            setText={setText}
            changeInfo = {emailOrName}
            setIndex={setIndexz}
            closeBottomSheet={()=>{closeBottomSheet()}}  // function that when is called, set the 
            openModal={()=>{openModal()}}                 //father component, incredible.  
          >                                
          </BottomSheetComponent>
        </BottomSheet>
      </BottomSheetArea>

    </Container>
  )
}
