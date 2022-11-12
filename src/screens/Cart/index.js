import { View, Text } from 'react-native'
import React from 'react'
import {
  Container, ScrollView,

}from './styles'
import CartPageHeader from '../../components/CartPageHeader'
import CartProductsList  from '../../components/CartProductsList'
import Checkout from '../../components/Checkout'

export default ()=> {
  
  return (
    <Container >
      <CartPageHeader></CartPageHeader>
      <ScrollView>
        <CartProductsList></CartProductsList> 
        <Checkout></Checkout>
      </ScrollView>
    </Container>
  )
}