import { View, Text } from 'react-native'
import {
  Container,
} from './styles'
import React from 'react'
import ProfilePageHeader from '../../components/ProfilePageHeader'
import UserInformations from '../../components/UserInformations'

export default ()=> {
  return (
    <Container>

      <ProfilePageHeader></ProfilePageHeader>
      <UserInformations></UserInformations>
    </Container>
  )
}