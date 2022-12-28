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
import { useSelector } from 'react-redux';

export default () => {
  const navigation = useNavigation()
  const currentTheme = useSelector((state) => state.theme.currentTheme);


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
                  <CategoriesIconWrapper currentTheme={currentTheme}>
                    <SvgXml 
                      xml={item.icon}
                      width={item.width? item.width : 38} 
                      height={item.height? item.height : 38}
                      fill={'#224'} 
                      />  
                  </CategoriesIconWrapper>
                <CategoriesText currentTheme={currentTheme}  >{item.name}</CategoriesText>
                </WrapperCategories>
              </CategoriesArea>
            
            )}>
      </FlatList>
      </FlatlistArea>
    </Container>
    )}