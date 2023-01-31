import React from 'react'
import {
  ButtonsWrapper,
  ButtonArea,
  ButtonText,
  ButtonSendToCart,
  ModalArea,
  Image,
  ModalTextArea,
  GradientButton,
  ModalTextInfo,
  ModalText
} from './styles'

import {useDispatch} from 'react-redux'
import { addToCart } from '../../redux/features/cartSlice'
import { firebase, firestore } from '../../services/firebase-config';
import { useSelector } from 'react-redux'
import {collection, query, where, getDocs} from "firebase/firestore";
import { useState } from 'react';
import { Modal, Portal} from 'react-native-paper';
import { numberFormat } from '../../utils/numberFormat'



export default ({product})=> {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user.userData); 
  const cart = useSelector((state) => state.cart.cartItems);
  const cartRef = collection(firestore, "cartItems");
  const currentTheme = useSelector((state) => state.theme.currentTheme);

  var hasProductInCart
  
  const [visible, setVisible] = useState(false);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: '#7159c1', padding:50, paddingBottom:90,top:330};
  
  const openModal= ()=> {
    setTimeout(() => {
      setVisible(true)
    }, 500)  
    setTimeout(() => {
      setVisible(false)
    }, 3500)  
  }


  const handleAddToCart= (product)=>{
    firebase.firestore().collection('cartItems')  
    .add({
      uid: user.uid,
      product: product,
      productId: product.productId,
      quantity:1,
    })
    dispatch(addToCart(product))
    openModal()
  }
  
  const validateToSendProduct = async (product)=>{
    if(cart.lenght==0){
      handleAddToCart(product)
    }else{
      const q1 = query(cartRef, where("productId", "==", product.productId), where("uid", "==", user.uid));
      const querySnapshot = await getDocs(q1);
      hasProductInCart= !querySnapshot.empty  // if has the same product at cart, this 
      //var will be true. it's a query at firestorethat returns true, if it's empty.
      
      if(hasProductInCart){
        querySnapshot.forEach( async (doc) => {
          await firestore.collection('cartItems').doc(doc.id)
          .update({
            quantity:doc.data().quantity+1
          })});
          openModal()
        }else{
          handleAddToCart(product)
          openModal()
        }
    }
  }
  return (
    <ButtonsWrapper>
              
      <ButtonArea  >
        <GradientButton
          colors={["#circle at 10% 20%, rgb(61, 0, 131) 0%", "rgb(93, 03, 121) 90.2%)"]}>
          <ButtonText currentTheme={currentTheme} >Comprar agora</ButtonText>
        </GradientButton>
      </ButtonArea>
    
      <ButtonSendToCart onPress={()=>{validateToSendProduct(product) }} >
        <ButtonText currentTheme={currentTheme}  purple={true} >Adicionar no carrinho</ButtonText>
      </ButtonSendToCart>
      


      <Portal >
        <Modal 
          visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}> 
            <ModalTextInfo > Produto Adicionado no carrinho </ModalTextInfo> 
          <ModalArea>
            <Image source= {{uri:product.mainPhoto}}></Image>
            <ModalTextArea >
              <ModalText >{product.name}</ModalText> 
              <ModalText >{ numberFormat(product.price)}</ModalText> 
            </ModalTextArea>  
          
          </ModalArea>
        </Modal> 
      </Portal>
    </ButtonsWrapper>

    )
}