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
import  AsyncStorage  from '@react-native-async-storage/async-storage';

export default () => {
  const user = useSelector((state) => state.user)
  // AsyncStorage.clear()
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


        <ViewProducts   Text='Produtos recomendados' width={170} height={170} /> 
        <ViewProducts DayOffer Text="Oferta do dia" width={360} height={360} /> 

        {/* <ViewProducts> </ViewProducts>  */}
        {/* view concreta, talves você se interesse. componente externo
        que se passa o tipo de produto que terá que renderizar, o texto, e só
        casó ja tenha pesquisa, ele mostra algo relacionado a pesquisa, senao, ele 
        mostra um item aleatorio
        */} 

        
        {/* <ViewProducts> </ViewProducts>  */}
        {/* Visto recentemente  */}

    
      </ScrollView>
    </Container>
    )
}