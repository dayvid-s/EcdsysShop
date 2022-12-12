//TODO: put use memo in colors of icons
import React from 'react'
import Cart from '../../assets/icons/shopping-cart-svgrepo-com.svg'
import Menu from '../../assets/icons/menu-svgrepo-com (1).svg'
import { Feather } from '@expo/vector-icons'; 
import { useDispatch, useSelector} from 'react-redux'
import { getTotals, retrieveCart } from '../../redux/features/cartSlice';

import { 
  IconsArea,
  IconsWrapper,
  TotalProductsText, 
  TotalProductsWrapper
  } from './styles'
import { useTheme } from 'styled-components'
import { useNavigation } from '@react-navigation/native'
import { firebase, firestore } from './../../services/firebase-config';
import { useEffect } from 'react';


export default () => {
  const theme = useTheme()
  const navigation = useNavigation()
  const cartAmount = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user.userData);
  const dispatch = useDispatch()
  
  useEffect(()=>{
    firebase.firestore().collection('cartItems')
    .where('uid', '==', user.uid)
    .onSnapshot(snapshot =>{          // this onSnapshot it means that the firebase will be 
      const cartProducts= []          // locking for data on realtime
      snapshot.forEach( doc =>{       // and snapshot it is all the data.
        cartProducts.push({
          ...doc.data(),
          id:doc.id
        })
      })
      dispatch(retrieveCart(cartProducts))
       dispatch(getTotals())

    })
  },[])
  return (
    <IconsArea >
        {Menu?
        <IconsWrapper onPress={() => navigation.openDrawer()}>
          <Menu opacity={0.6}  width={24} height={24} fill={theme.onBackGround} ></Menu>
        </IconsWrapper>
        : null}

        {/* {Cart? */}
        <IconsWrapper onPress={() => navigation.push('Cart')} >
          <Cart   opacity={0.6} width={24} height={24} fill={theme.onBackGround} ></Cart>
          {/* <Feather name="shopping-cart" size={24} color="#fff" /> */}
            {cartAmount.cartTotalQuantity>0?
          <TotalProductsWrapper>
            <TotalProductsText>{cartAmount.cartTotalQuantity}</TotalProductsText>
          </TotalProductsWrapper>
          : null  
          }
        </IconsWrapper>
        {/* : null} */}
        
      </IconsArea>
  )
}
