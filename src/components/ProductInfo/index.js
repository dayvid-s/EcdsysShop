//TODO: API DO CORREIO/

import React, { useState } from 'react'
import {
  Container,
  ProductName,
  ProductRatingArea,
  StarWrapper,
  TotalUserRatings,
  ProductPriceText,
  ShippingValueText,
  ProductPriceArea,
  OldProductValue,
  ProductSpecsArea,
  ProductSpecText,
  ProductSpecsWrapper,
  DescriptionText
} from './styles'

import { useNavigation } from '@react-navigation/native'
import { useRoute } from '@react-navigation/native'
import FullStar from '../../assets/icons/star-svgrepo-com.svg'
import HalfStar from '../../assets/icons/half-star-svgrepo-com.svg'
import ProductSpecifications from '../ProductSpecifications'

export default ({product})=> {
  const [state00,setState00 ] = useState(false)
  const [state01,setState01 ] = useState(false)
  const [state02,setState02 ] = useState(false)
  const [state03,setState03 ] = useState(false)
  let stars= [0,0,0,0,0]
  let ratingInDecimal = Math.floor(product.rating)
  let remainder = product.rating - ratingInDecimal
  var shippingCost= (parseFloat(product?.price*0.009).toFixed(2))
  var oldProductValue= parseFloat(product?.price*1.25).toFixed(2)
  for(var i =0; i<ratingInDecimal ; i++){
    stars[i]=2;
  }
  if(remainder >0 ){
    stars[i] = 1 ;
  }


  return (
    <Container>
      <ProductName>
        {product?.name}
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

        <TotalUserRatings>{product.evaluationsTotal} avaliações do produto </TotalUserRatings>
      </ProductRatingArea >
        <OldProductValue>R$ {oldProductValue}</OldProductValue>
      <ProductPriceArea>
        <ProductPriceText>R$ {product?.price}</ProductPriceText>
        <ShippingValueText>+R$ {shippingCost} de envio </ShippingValueText>
      </ProductPriceArea>
      {product.specifications !=null &&(
        <>
              <ProductSpecText>Especificações do produto:</ProductSpecText>
              {/* very gambiarra, and I know this. */}
              <ProductSpecsArea>
                <ProductSpecsWrapper state={state00}  onPress={()=>{
                  setState00(true),setState01(false),setState02(false),setState03(false)}}>
                  
                  <ProductSpecifications specification={product.specifications[0]}  ></ProductSpecifications>
                </ProductSpecsWrapper>
                <ProductSpecsWrapper state={state01} onPress={()=>{
                  setState00(false) ,setState01(true),setState02(false),setState03(false)}}>
                  <ProductSpecifications specification={product.specifications[1]} 
                  ></ProductSpecifications>
                </ProductSpecsWrapper  >
                  {product.specifications[2] != undefined   &&
                <ProductSpecsWrapper state={state02} onPress={()=>{
                  setState00(false) ,setState01(false),setState02(true),setState03(false)
                  }} >
                    <ProductSpecifications specification={product.specifications[2]}></ProductSpecifications>  
                </ProductSpecsWrapper>
                  }
                {product.specifications[3] != undefined   &&
                  <ProductSpecsWrapper state={state03} onPress={()=>{
                    setState00(false) ,setState01(false),setState02(false),setState03(true)
                    }} >
                  <ProductSpecifications specification={product.specifications[3]}></ProductSpecifications>  
                  </ProductSpecsWrapper>
                }
              </ProductSpecsArea>
        
        </>
      )}
    </Container>
  )
}