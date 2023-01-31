import React from 'react'
import {
  Container,
  ScrollView
} from './styles'

import { useRoute } from '@react-navigation/native'
import AboutPageHeader from '../../components/AboutPageHeader'
import AnimatedImages from '../../components/AnimatedImages'
import ProductInfo from '../../components/ProductInfo'
import FinalizePurchase from '../../components/FinalizePurchase'
import BottomOfThePageAbout from '../../components/BottomOfThePageAbout'
import ViewProducts from '../../components/ViewProducts'
import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components';


export default ()=> {
  const route= useRoute()
  const theme= useTheme()
  const { product } = route.params;

  return (
    <ScrollView>
      <Container>
      <StatusBar backgroundColor = {theme.backGround}   ></StatusBar>
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