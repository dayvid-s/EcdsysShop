import React from 'react'
import {
  Container,
  HeaderArea,
  GreetingsText,
  DrawerWrapper,
  BottomArea,
  LogoutArea,
  LogoutWrapper,
  LogoutText,
  ImageArea,
  Image,
  SwitchArea,
  SwitchText
} from './styles'

import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { Ionicons } from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useDispatch } from 'react-redux'
import { changeUserAvatar, changeUserInfo } from '../../redux/features/userSlice'
import { retrieveCart, clearCart } from '../../redux/features/cartSlice'
import { useAppSelector } from '../../hooks/useAppSelector'

import * as ImagePicker from 'expo-image-picker'
import { useState, useEffect } from 'react'
import { firebase, storage, firestore } from '../../services/firebase-config'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { updateDoc } from 'firebase/firestore'
import { doc } from 'firebase/firestore'
import { Switch } from 'react-native'
import { changeTheme } from '../../redux/features/themeSlice'
import { useTheme } from 'styled-components/native'
import { clearHistoric } from '../../redux/features/productHistoricSlice'


export function CustomDrawer(props) {
  const [image, setImage] = useState(null)
  const [picture, setPicture] = useState()
  const dispatch = useDispatch()
  const user = useAppSelector((state) => state.user.userData)
  const currentTheme = useAppSelector((state) => state.theme.toggleTheme)
  const theme = useTheme()


  const handleLogout = () => {
    AsyncStorage.clear()
    firebase.auth().signOut()
    dispatch(retrieveCart(null))
    dispatch(clearHistoric())
    dispatch(clearCart([]))
    dispatch(changeUserInfo(null))
  }

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })
    if (!result.cancelled) {
      setImage(result.uri)
    }
  }


  useEffect(() => {
    const uploadImage = async () => {
      const blobImage = await new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest() //convert to blob image
        xhr.onload = function () {
          resolve(xhr.response)
        }
        xhr.onerror = function () {
          reject(new TypeError('Network request failed '))
        }
        xhr.responseType = 'blob'
        xhr.open('GET', image, true)
        xhr.send(null)
      })
      //set metadata of image
      // Create file metadata including the content type
      const metadata = {
        contentType: 'image/jpeg',
      }

      //uploading image on storage 
      const storageRef = ref(storage, 'UserAvatar/' + Date.now())
      const uploadTask = uploadBytesResumable(storageRef, blobImage, metadata)

      // Register three observers:
      // 1. 'state_changed' observer, called any time the state changes
      // 2. Error observer, called on failure
      // 3. Completion observer, called on successful completion
      uploadTask.on('state_changed',
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          console.log('Upload is ' + progress + '% done')
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused')
              break
            case 'running':
              console.log('Upload is running')
              break
          }
        },
        (error) => {
          // Handle unsuccessful uploads
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log('File available at', downloadURL)
            setPicture(downloadURL)
            uploadCategory({ downloadURL })
          })
        })
    }
    if (image != null) {
      uploadImage()
      setImage(null)
    }

  }, [image])

  const uploadCategory = async ({ downloadURL }) => {
    const userRef = doc(firestore, 'users', user.uid)
    { console.log(userRef) }
    await updateDoc(userRef, {
      picture: downloadURL
    })
    dispatch(changeUserAvatar(downloadURL))
    await AsyncStorage.mergeItem('userData', JSON.stringify({ userAvatar: downloadURL }))
  }

  return (
    <Container >
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ flex: 1, backgroundColor: theme.backGround }}>
        <HeaderArea>
          <ImageArea
            onPress={pickImage}
          ><Image
            source={{
              uri: user.userAvatar != null ? user.userAvatar
                :
                'https://www.nicepng.com/png/full/136-1366211_group-of-10-guys-login-user-icon-png.png'
            }}

          ></Image>
          </ImageArea>
          <GreetingsText>Olá, {user.name}</GreetingsText>


        </HeaderArea>
        <DrawerWrapper>
          <DrawerItemList {...props} />
        </DrawerWrapper>

        <BottomArea>
          <SwitchArea>
            <SwitchText>Tema escuro</SwitchText>
            <Switch
              trackColor={{ false: '#767577', true: 'green' }}
              thumbColor={'#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() => { dispatch(changeTheme()) }}
              value={currentTheme}
            />
          </SwitchArea>
          <LogoutArea>
            <LogoutWrapper onPress={handleLogout} >
              <Ionicons name="exit-outline" size={25} color={theme.onBackGround} />
              <LogoutText>Sair da conta</LogoutText>
            </LogoutWrapper>
          </LogoutArea>
        </BottomArea>
      </DrawerContentScrollView>
    </Container>
  )
}
