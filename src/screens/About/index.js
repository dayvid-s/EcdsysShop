//TODO:Amanhã: colocar preço antigo e mais features
// Colocar a quantidade de gb / a cor/ esse tipo de escolhas...
//TODO: colocar a parte de salvar endereço, e mostrar.

import React from 'react'
import {
  Container,
  ScrollView
} from './styles'

import { useNavigation } from '@react-navigation/native'
import { useRoute } from '@react-navigation/native'
import AboutPageHeader from '../../components/AboutPageHeader'
import AnimatedImages from '../../components/AnimatedImages'
import ProductInfo from '../../components/ProductInfo'
import FinalizePurchase from '../../components/FinalizePurchase'
import BottomOfThePageAbout from '../../components/BottomOfThePageAbout'
import ViewProducts from '../../components/ViewProducts'
import { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { useSelector } from 'react-redux'
import { useTheme } from 'styled-components';


export default ()=> {
  const navigation= useNavigation()
  const route= useRoute()
  const theme= useTheme()
  const currentTheme = useSelector((state) => state.theme.currentTheme);
  const { product } = route.params;
  return (
    <ScrollView>
      <StatusBar backgroundColor = {theme.backgroundColor}   ></StatusBar>
      <Container>
        <AboutPageHeader heartIcon={true}/>
        <AnimatedImages product={product}></AnimatedImages>
        <ProductInfo product={product} />
        <FinalizePurchase product={product}/>
        <BottomOfThePageAbout product={product} ></BottomOfThePageAbout>
        
        <ViewProducts productOnScreen={product} typeOfPage={'About'}  
        text='Quem viu este produto também comprou' width={160} height={160} 
        ></ViewProducts>
      
      </Container>
    </ScrollView>
  )
}