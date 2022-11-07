import React from 'react'
import { 
  Container,
  Title,
  CategoriesArea,
  WrapperCategories,
  CategoriesText,
  CategoriesIconWrapper,
  FlatlistArea
} from './styles';
import { useNavigation } from '@react-navigation/native';
import { FlatList} from 'react-native';
import { SvgXml } from 'react-native-svg' ;     
import {files} from '../../assets/icons/categories'

export default () => {
  const navigation = useNavigation()

  return (
    <Container>
      {/* <Title>Categorias </Title> */}
          <FlatlistArea>
      <FlatList
      showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={files}
        renderItem={({item}) =>(
          <CategoriesArea>
                <WrapperCategories>
                  <CategoriesIconWrapper>
                    <SvgXml 
                      xml={item.icon}
                      width={item.width? item.width : 38} 
                      height={item.height? item.height : 38}
                      fill={'#224'} 
                      />  
                  </CategoriesIconWrapper>
                <CategoriesText >{item.name}</CategoriesText>
                </WrapperCategories>
              </CategoriesArea>
            
            )}>
      </FlatList>
      </FlatlistArea>
    </Container>
    )}