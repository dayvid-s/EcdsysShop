//TODO: when i want use gradient, i will need use two views
import React, { useEffect } from 'react'
import {
    Container,
  
  }from './styles'
import HomeHeader from '../../components/HomeHeader'
import SearchProduct from '../../components/SearchProduct'
import Categories from '../../components/Categories'
import ViewProducts from '../../components/ViewProducts'
import { ScrollView } from 'react-native'
import { StatusBar } from 'react-native';
import { useSelector } from 'react-redux'
import ProductsList from '../../components/ProductsList'

export default () => {
  const user = useSelector((state) => state.user)
  const historic= useSelector((state) => state.historic.userProductHistoric)
  const lastProductSeen = historic?.length>1?
  'Com base no seu interesse em '.concat(historic[historic?.length -1].knownBy) : null
  const lastProduct=(historic[historic?.length -1])

  return (
    
    <Container>
      <StatusBar animated={true} backgroundColor = "black"   ></StatusBar>
      <ScrollView> 
        <HomeHeader/>  
        <SearchProduct/> 
        <Categories/> 
      
        {/* <ViewProducts> </ViewProducts>  */}
      {/* conditional render, com base na sua pesquisa em [nome da pesquisa]
        else, fica null, e mostra o próximo
      */}


        <ViewProducts typeOfPage= "Recommended"  text='Produtos recomendados' width={170} height={170} /> 
        <ViewProducts typeOfPage="DayOffer" text="Oferta do dia" width={360} height={360} /> 
        {
          historic?.length>1? 
          <>
            <ViewProducts typeOfPage="YourInterest" text={lastProductSeen} width={170} height={170}
            lastProduct={lastProduct}
            /> 
            <ViewProducts typeOfPage="SeenBefore" text={"Visto recentemente"  } width={170} height={170} /> 
            </>
            :
          <ViewProducts typeOfPage="YourSearch" text={"Talvez você se interesse"  } width={170} height={170} /> 
        }
    
      </ScrollView>
    </Container>
    )
}