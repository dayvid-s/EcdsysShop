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
  InstallmentArea,
  InstallmentText
} from './styles'

import FullStar from '../../assets/icons/star-svgrepo-com.svg'
import HalfStar from '../../assets/icons/half-star-svgrepo-com.svg'
import ProductSpecifications from '../ProductSpecifications'
import { useSelector } from 'react-redux'
import { numberFormat } from './../../utils/numberFormat';

export default ({product})=> {
  const currentTheme = useSelector((state) => state.theme.currentTheme);
  const [firstSpec,setFirstSpec ] = useState(false)
  const [secondSpec,setSecondSpec ] = useState(false)
  const [thirdSpec,setThirdSpec ] = useState(false)
  const [fourthSpec,setFourthSpec ] = useState(false)
  let stars= [0,0,0,0,0]
  let ratingInDecimal = Math.floor(product.rating)
  let remainder = product.rating - ratingInDecimal
  var shippingCost= (product?.price*0.05)

  var oldProductValue= (product?.price*1.25)
  for(var i =0; i<ratingInDecimal ; i++){
    stars[i]=2;
  }
  if(remainder >0 ){
    stars[i] = 1 ;
  }


  return (
    <Container>
      <ProductName currentTheme={currentTheme} >{product?.name}</ProductName>
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
        <OldProductValue>{numberFormat(oldProductValue)}</OldProductValue>
      <ProductPriceArea>
        <ProductPriceText>{numberFormat(product?.price)}</ProductPriceText>
        <ShippingValueText>
          {
            product?.price>1000? 'Frete grátis':
              (numberFormat(shippingCost) + ' de envio')    
          }
          
          </ShippingValueText>
      </ProductPriceArea>

      <InstallmentArea>
        <InstallmentText currentTheme={currentTheme} >
          {product.price<1000?
            "Em até 5x de " + numberFormat(product?.price/5) + " sem juros" 
          :
            "Em até 12x de " + numberFormat(((product?.price)+product.price*0.06)/12) + " com juros"
          }
        </InstallmentText>
      </InstallmentArea>


      {product.specifications !=null &&(
        <>
              <ProductSpecText>Especificações do produto:</ProductSpecText>
              <ProductSpecsArea>
                <ProductSpecsWrapper state={firstSpec}  onPress={()=>{
                  setFirstSpec(true),setSecondSpec(false),setThirdSpec(false),setFourthSpec(false)}}>
                  
                  <ProductSpecifications specification={product.specifications[0]}  ></ProductSpecifications>
                </ProductSpecsWrapper>
                <ProductSpecsWrapper state={secondSpec} onPress={()=>{
                  setFirstSpec(false) ,setSecondSpec(true),setThirdSpec(false),setFourthSpec(false)}}>
                  <ProductSpecifications specification={product.specifications[1]} 
                  ></ProductSpecifications>
                </ProductSpecsWrapper  >
                  {product.specifications[2] != undefined   &&
                <ProductSpecsWrapper state={thirdSpec} onPress={()=>{
                  setFirstSpec(false) ,setSecondSpec(false),setthirdSpec(true),setFourthSpec(false)
                  }} >
                    <ProductSpecifications specification={product.specifications[2]}></ProductSpecifications>  
                </ProductSpecsWrapper>
                  }
                {product.specifications[3] != undefined   &&
                  <ProductSpecsWrapper state={fourthSpec} onPress={()=>{
                    setFirstSpec(false) ,setSecondSpec(false),setthirdSpec(false),setFourthSpec(true)
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