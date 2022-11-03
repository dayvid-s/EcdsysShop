//TODO:Amanhã: colocar preço antigo e mais features

import React from 'react'
import {
  Container,
} from './styles'

import { useNavigation } from '@react-navigation/native'
import { useRoute } from '@react-navigation/native'
import AboutPageHeader from '../../components/AboutPageHeader'
import AnimatedImages from '../../components/AnimatedImages'
import ProductInfo from '../../components/ProductInfo'
import FinalizePurchase from '../../components/FinalizePurchase'

export default ()=> {
  const navigation= useNavigation()
  const route= useRoute()
  const { item } = route.params;
  return (
    <Container>
      <AboutPageHeader/>
      <AnimatedImages item={item}></AnimatedImages>
      <ProductInfo item={item} />
      <FinalizePurchase/>
    </Container>
  )
}