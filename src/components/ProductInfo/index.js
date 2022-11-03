//TODO: API DO CORREIO/
import React from 'react'
import {
  Container,
  ProductName,
  ProductRatingArea,
  StarWrapper,
  TotalUserRatings,
  ProductPriceText,
  ShippingValueText,
  ProductPriceArea
} from './styles'

import { useNavigation } from '@react-navigation/native'
import { useRoute } from '@react-navigation/native'
import FullStar from '../../assets/icons/star-svgrepo-com.svg'
import HalfStar from '../../assets/icons/half-star-svgrepo-com.svg'

export default ({item})=> {
  let stars= [0,0,0,0,0]
  let ratingInDecimal = Math.floor(item.rating)
  let remainder = item.rating - ratingInDecimal
  var shippingCost= ((4/100)* (parseInt(item.productPrice)))
  {console.log(shippingCost)}
  for(var i =0; i<ratingInDecimal ; i++){
    stars[i]=2;
  }
  if(remainder >0 ){
    stars[i] = 1 ;
  }
  
  return (
    <Container>
      <ProductName>
        {item.productName}
      </ProductName>
      <ProductRatingArea>
        {stars.map((star,index) =>{
          return(
            <StarWrapper key={index} >
              {star==0  &&
                <FullStar opacity="0.4" width="20" height="20" fill="#7159c1" />}
              {star==1 &&
                <HalfStar  width="20" height="20" fill="#7159c1" />}
              {star==2  &&
                <FullStar width="20" height="20" fill="#7159c1" />}
            </StarWrapper>
            )})}

        <TotalUserRatings>{item.evaluationsTotal} avaliações do produto </TotalUserRatings>
      </ProductRatingArea>
      
      <ProductPriceArea>
        <ProductPriceText>R$ {item.productPrice}</ProductPriceText>
        <ShippingValueText>+R$ {shippingCost.toString().replace('.',',')} de envio </ShippingValueText>
      </ProductPriceArea>
        
    </Container>
  )
}