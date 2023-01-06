import React, {  useState, useEffect } from 'react'
import { 
  FontAwesome,
  Entypo, 
  MaterialIcons    
} from '@expo/vector-icons'; 

import {
  Container,
  HeaderArea,
  InputArea,
  TextInputToSearch,
  SearchHistoryArea,
  TextWithSearches,
  GoBackIcon,
  
} from './styles'
import { useTheme } from 'styled-components'
import { Alert, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ViewProducts from '../../components/ViewProducts';
import { useSelector } from 'react-redux';
import { firestore } from '../../services/firebase-config';
import { collection, query, where,doc, setDoc, getDocs  } from "firebase/firestore";



export default ()=> {
  const user = useSelector((state) => state.user.userData);
  var searchesData=[]
  const [userSearches, setUserSearches] = useState([])
  const theme = useTheme()
  const navigation = useNavigation()
  const [statusBarColor,setStatusBarColor]= useState('#7159c1')
  const [searchResult,setSearchResult]= useState(false)
  const [search, setSearch]= useState('')
  const userRef = doc(collection(firestore, "userSearches"));
  const searchesRef = collection(firestore, "userSearches");
  const searchesQuery = query(searchesRef, where("uid", "==", user.uid));
  let data

  useEffect (()=>{
    const retrieveSearches= async ()=>{
      const querySnapshot = await getDocs(searchesQuery)  // retrieving user' searches.
      querySnapshot.forEach( (doc) => {
        searchesData.push(doc.data().search)
        setUserSearches([...searchesData])
      })
    }
    retrieveSearches()
  },[searchResult])

  

  const goBack=()=>{
      //this is to solve the bug of status bar delay in change color.
    setStatusBarColor(theme.background)
    navigation.goBack()
  }
  const validate = ()=>{
     let error= false
    if (search === ''){
      Alert.alert('Escreva algo')
      error = true
    }
    return !error
  }
  const SearchProduct= async ()=>{
      if(validate()){
        setSearchResult(true)
        await setDoc(userRef,  data={search , uid: user.uid});
        
  }}

  const seeProduct = (item)=>{
    setSearch(item)
    setSearchResult(true)
  }
  return (
  
  <Container>
    <StatusBar backgroundColor = {statusBarColor}   ></StatusBar>
    <HeaderArea>
      <GoBackIcon onPress={()=>{goBack()}}
      name="arrowleft" size={30} color={theme.onBackGround} />
      <InputArea>
        <FontAwesome name="search" size={24} color={theme.roseBlue} />
        <TextInputToSearch
          placeholder={'Busque um produto'}
          placeholderTextColor={theme.gray300}
          returnKeyType={"search"}
          autoFocus= {true}
          onSubmitEditing ={()=>{SearchProduct()}}
          onChange={()=>{setSearchResult(false)
          {setSearch}
          }}
          onChangeText={setSearch}
          onFocus={()=>{setSearchResult(false)}}
          value={search}
        ></TextInputToSearch>
      </InputArea>
    </HeaderArea>
  {searchResult== false?
      <>
      
    {userSearches?.map((item,index) =>{   
      return(         
        <SearchHistoryArea key={index} onPress={()=>{seeProduct(item)}}
        >

          <Entypo name="cross" size={27} color={theme.onBackGround} />
          <TextWithSearches>{item}</TextWithSearches>
          <MaterialIcons name="keyboard-arrow-right" size={32} color={theme.onBackGround} />
        </SearchHistoryArea>
        )})}
        </>
        
        :<ViewProducts Text='Resultados' typeOfPage='SearchProduct' 
        searchWord={search}
        width={170} height={170} ></ViewProducts>
      }
  </Container>

    )
}