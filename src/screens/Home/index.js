//TODO: when i want use gradient, i will need use two views
import React from 'react'
import { Container }from './styles'
import HomeHeader from '../../components/HomeHeader'
import SearchProduct from '../../components/SearchProduct'
import Categories from '../../components/Categories'
import ViewProducts from '../../components/ViewProducts'
import { ScrollView } from 'react-native'
import { useSelector } from 'react-redux'
import DiscountBanner from '../../components/DiscountBanner'

export default () => {
  const historic= useSelector((state) => state.historic.userProductHistoric)
  const lastProductSeen = historic?.length>0?
  'Com base no seu interesse em '.concat(historic[historic?.length -1].knownBy) : null
  const lastProduct=(historic[historic?.length -1])

  return (
    
    <Container>
      <ScrollView> 
        <HomeHeader/>  
        <SearchProduct/> 
        <Categories/> 

        <ViewProducts typeOfPage= "Recommended"  text='Produtos recomendados' width={170} height={170} /> 
        <DiscountBanner/>
        <ViewProducts typeOfPage="DayOffer" text="Oferta do dia" width={360} height={360} /> 
  
        {
          historic?.length>0? 
            <ViewProducts typeOfPage="YourInterest" text={lastProductSeen} width={170} height={170}
            lastProduct={lastProduct}
            /> 
            :
          <ViewProducts typeOfPage="RandomProducts" text={"Talvez você se interesse"  } width={170} height={170} /> 
        }
    
      </ScrollView>
    </Container>
    )
}