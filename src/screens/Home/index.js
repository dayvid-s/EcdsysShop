import React from 'react'
import {
    Container,
  
  }from './styles'
import HomeHeader from '../../components/HomeHeader'
import SearchProduct from '../../components/SearchProduct'
import ViewProducts from '../../components/ViewProducts'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import { Text } from 'react-native'

export default () => {
  return (
    <Container>
      <KeyboardAwareScrollView> 
        {/* <Text>eae</Text> */}
      <HomeHeader > </HomeHeader>  
      {/*with two icoms, this it's a componente.  */}
      
      
      <SearchProduct> </SearchProduct> 
       {/*search and text: what are u doing today?, this it's a componente.  */}


      <SearchProduct> </SearchProduct> 
       {/*scrollable horizontal area, with all types of productd ( indiano 
        will hellp you on that. )   */}
    
      <ViewProducts> </ViewProducts> 
     {/* conditional render, com base na sua pesquisa em [nome da pesquisa]
      else, fica null, e mostra o próximo
     */}


      <ViewProducts> </ViewProducts> 
      {/* Produtos recomendados
       */}
      <ViewProducts> </ViewProducts> 
      {/* view concreta, talves você se interesse. componente externo
       que se passa o tipo de produto que terá que renderizar, o texto, e só
       casó ja tenha pesquisa, ele mostra algo relacionado a pesquisa, senao, ele 
       mostra um item aleatorio
       */}


      <ViewProducts> </ViewProducts> 
       {/* Oferta do dia,   */}
       
       <ViewProducts> </ViewProducts> 
       {/* Visto recentemente  */}

    
      </KeyboardAwareScrollView>
    </Container>
    )
}