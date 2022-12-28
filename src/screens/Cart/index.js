import { View, Text } from 'react-native'
import React from 'react'
import {
  Container,
   EmptyCartArea,
   EmptyCartBigText,
   EmptyCartMediumText,
   ScrollView,

}from './styles'
import CartPageHeader from '../../components/CartPageHeader'
import CartProductsList  from '../../components/CartProductsList'
import Checkout from '../../components/Checkout'
import { useSelector} from 'react-redux'
import { useEffect } from 'react'
import { firebase} from './../../services/firebase-config';
import {useDispatch} from 'react-redux'
import { retrieveCart } from '../../redux/features/cartSlice';
import { useState } from 'react'
import { ActivityIndicator } from 'react-native-paper'
import { useTheme } from 'styled-components';

export default ()=> {
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user.userData);
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  const currentTheme = useSelector((state) => state.theme.currentTheme);
  const theme =useTheme()


  
  useEffect(()=>{
    setLoading(true)
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
      setLoading(false);
    })
  },[])

  if(loading == true)(
    <Container>
      <CartPageHeader loading={loading} ></CartPageHeader>
      <ActivityIndicator style={{top:300}}
      animating={true} color={"#7159c1"}  size={70}
      ></ActivityIndicator>
    </Container>
  )
  return (
    <Container >
      <CartPageHeader loading={loading} ></CartPageHeader>
      
        {cart.cartTotalQuantity>0?
        
          <ScrollView>
            {
              cart.cartItems?.map((product,id) =>{     
                return(                  
                  <CartProductsList product={product}  key={id} ></CartProductsList> 
                  ) })
            }
            <Checkout></Checkout>
          </ScrollView>
      :
        <EmptyCartArea>
          <EmptyCartBigText>
            Seu carrinho está vazio.
          </EmptyCartBigText>
          <EmptyCartMediumText>
            Que tal dar uma olhada nos produtos?
          </EmptyCartMediumText>
        </EmptyCartArea>
              }
    </Container>
    )
}