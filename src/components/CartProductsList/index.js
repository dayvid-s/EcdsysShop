import React, { useEffect } from 'react'
import {
  Container,
  TextInfo,
  ProductInfoText,
  ProductPriceText,
  ProductsWrapper,
  ProductTextWrapper,
  ProductInfoWrapper,
  BottomIconsArea,
  TouchableIconArea,
  RemoveProductText,
} from './styles'
import { useTheme } from 'styled-components'
import { useNavigation } from '@react-navigation/native'
import { 
  AntDesign,
  FontAwesome5
 } from '@expo/vector-icons';
import { Image } from 'react-native';
import {firebase} from '../../services/firebase-config'
import { useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import { retrieveCart } from '../../redux/features/cartSlice';



export default () => {
  const theme = useTheme()
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart.cartItems); 
  const user = useSelector((state) => state.user.userData)
  useEffect(()=>{
    firebase.firestore().collection('cartItems')
    .where('uid', '==', user.uid)
    .onSnapshot(snapshot =>{          // this onSnapshot it means that the firebase will be 
      const cartProducts= []          // locking for data on realtime
      snapshot.forEach( doc =>{       // and snapshot its all the data.
        cartProducts.push({
          ...doc.data(),
          id:doc.id
        })
      })
        dispatch(retrieveCart(cartProducts))
    })


  },[])
  return (
   
    <Container>
    {             // aqui vai ser uma renderização condicional, mas de uma f
      cart?.map((item,id) =>{     //forma diferente, pois eu passo como props
      return(                   // o item que vai ser mapeado 
        <ProductsWrapper key={id}>
            <Image
            source={{uri:item.product.mainPhoto}}
            style={{
              borderRadius:10, width:130,
              height:100, resizeMode:'contain',
              marginLeft:-20,
            }}
            ></Image>
            <ProductInfoWrapper>
            <ProductTextWrapper>
              <ProductInfoText  >{item.product.name}</ProductInfoText>
            </ProductTextWrapper>
              <ProductPriceText  >R$ {item.product.price}</ProductPriceText>
            <BottomIconsArea>
              <TouchableIconArea>
                <AntDesign 
                style={{}}
              name="minus" size={20} color="#fff" 
              />
              </TouchableIconArea>
              <TextInfo  >    1   </TextInfo>
              <TouchableIconArea>
                <AntDesign 
                  style={{}}
                name="plus" size={20} color="#fff" />
              </TouchableIconArea>
              <RemoveProductText>Remover</RemoveProductText>
            </BottomIconsArea>
            </ProductInfoWrapper>
        </ProductsWrapper>
    )})} 
  </Container>
  )
}
