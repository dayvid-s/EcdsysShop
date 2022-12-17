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
export default ()=> {
  const navigation= useNavigation()
  const route= useRoute()
  // {console.log(product)}
  const { product } = route.params;
  // {console.log(product)}
  return (
    <ScrollView>
      <Container>
        <AboutPageHeader heartIcon={true}/>
        <AnimatedImages product={product}></AnimatedImages>
        {/* i need put 8 times that he is dividido 8 sem juros, more one data at products */} 
        <ProductInfo product={product} />
        <FinalizePurchase product={product}/>
        <BottomOfThePageAbout product={product} ></BottomOfThePageAbout>
        {/* i will put the frete page here. frete like lum */}
        
        {/* i need create a horizontal scrollabe here. */}
        <ViewProducts Text='Leve também' width={160} height={160} ></ViewProducts>
        <ViewProducts Text='Quem viu este produto também comprou' width={160} height={160} ></ViewProducts>
        <ViewProducts Text='Compre também' width={160} height={160} ></ViewProducts>
      </Container>
    </ScrollView>
  )
}