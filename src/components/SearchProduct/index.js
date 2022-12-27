import React from 'react'
import { 
  Container,
  Title,
  SearchInputArea,
  SearchInputText,
  SearchIconWrapper,
 } from './styles';
 import SearchIcon from '../../assets/icons/search-svgrepo-com.svg'
import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

export default () => {
  const navigation = useNavigation()
  const theme = useTheme()
  const currentTheme = useSelector((state) => state.theme.currentTheme);

  return (
    <Container>
      <Title>O que você está procurando? </Title>
    
      <SearchInputArea 
      activeOpacity={1.1}
      onPress={() => navigation.push('SearchProduct')}>
        <SearchInputText currentTheme={currentTheme} >Pesquisar</SearchInputText>
        <SearchIconWrapper currentTheme={currentTheme} >
        
          {
          SearchIcon?
          <SearchIcon width='24' height='24' fill={theme.onBackGround} ></SearchIcon>
          : null  
          }
        
        </SearchIconWrapper>
      </SearchInputArea>
    
    
    </Container>
    )
}