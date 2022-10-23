// TODO: render all svg in a flatlist.
import React from 'react'
import { 
  Container,
  Title,
  CategoriesArea,
  WrapperCategories,
  CategoriesText,
  CategoriesIconWrapper,
 } from './styles';
import HeadPhone from '../../assets/icons/headphone-headphones-svgrepo-com.svg'
import Offer from '../../assets/icons/offer-svgrepo-com.svg'
import Notebook from '../../assets/icons/computer-svgrepo-com.svg'
import Playstation from '../../assets/icons/console-joystick-gaming-videogames-play-svgrepo-com.svg'
import SmartPhone from '../../assets/icons/smartphone-svgrepo-com.svg'
import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';
import { ScrollView} from 'react-native';

export default () => {
  const navigation = useNavigation()
  const theme = useTheme()

  return (
    <Container>
      <Title>Categorias </Title>
    
          <ScrollView
          horizontal= {true}
          showsHorizontalScrollIndicator={false}
          >
      <CategoriesArea>
            <WrapperCategories  >
            <CategoriesIconWrapper>
                {
                  Offer?
                  <Offer width='31' height='31' fill={'#224'} ></Offer>
                  : null  
                }
                </CategoriesIconWrapper>
                <CategoriesText >Ofertas</CategoriesText>
                </WrapperCategories>
           
        <WrapperCategories>

          <CategoriesIconWrapper>
          
          {
            HeadPhone?
            <HeadPhone width='31' height='31' fill={theme.onBackGround} ></HeadPhone>
          : null  
          }
          </CategoriesIconWrapper>
          <CategoriesText >Eletrônicos</CategoriesText>
        </WrapperCategories>
        
        <WrapperCategories  >
          <CategoriesIconWrapper>
          
          {
          Playstation?
          <Playstation width='31' height='31' fill={'#224'} ></Playstation>
          : null  
          }
          </CategoriesIconWrapper>
          <CategoriesText >Gamer</CategoriesText>
        </WrapperCategories>
        
        <WrapperCategories  >
          <CategoriesIconWrapper>
          
          {
            SmartPhone?
            <SmartPhone width='31' height='31' fill='#224' ></SmartPhone>
            : null  
          }
          </CategoriesIconWrapper>
          <CategoriesText >Celulares</CategoriesText>
        </WrapperCategories>
        <WrapperCategories >
          <CategoriesIconWrapper>
          
          
          {
            Notebook?
          <Notebook width='31' height='31' fill={theme.onBackGround} ></Notebook>
          : null  
          }
          </CategoriesIconWrapper>
          <CategoriesText >Computadores
          </CategoriesText>
        </WrapperCategories>
        
      </CategoriesArea>
    
          </ScrollView>
    
    </Container>
    )
}