import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {Home} from '../../screens/Home'
import Cart from '../../screens/Cart';
import Profile from '../../screens/Profile';
import Favorites from '../../screens/Favorites';
import Settings from '../../screens/Settings';
import HelpScreen from '../../screens/HelpScreen';
import SearchProduct from '../../screens/SearchProduct';
import {CustomDrawer } from '../../components/CustomDrawer'
import { useTheme } from 'styled-components';

import { 
    Ionicons,
    FontAwesome5, 
    Feather,
    SimpleLineIcons,
    MaterialCommunityIcons 
} from '@expo/vector-icons'; 
  

const Drawer = createDrawerNavigator();

export default () =>{
    const theme= useTheme()

    return(

        <Drawer.Navigator 
        
        drawerContent={(props) => <CustomDrawer {...props}/>}
        screenOptions={{
            headerShown: false,
            drawerActiveBackgroundColor:'#18212A',
            drawerActiveTintColor:'#fff',
            drawerInactiveTintColor:theme.onBackGround,
            drawerStyle: {width:310,}, 
            drawerLabelStyle:{
                marginLeft:-10,
                fontSize:16,
                fontFamily: "Medium",
            }
        }} >
            <Drawer.Screen name ='Início' component={Home}
                options={{
                    drawerIcon: () => (
                        <Ionicons name="home-outline" size={22} color={theme.onBackGround} />
                        ),
                        drawerItemStyle:{opacity:0.7}
                    }}
                    ></Drawer.Screen>
            <Drawer.Screen name ='Meu carrinho' component={Cart} 
                options={{
                    drawerIcon: () => (
                        <Feather name="shopping-bag" size={24} color={theme.onBackGround} />                    
                        ),
                        drawerItemStyle:{opacity:0.7}
                    }}
                    ></Drawer.Screen>
            <Drawer.Screen name ='Pesquisar' component={SearchProduct}
                options={{
                    drawerIcon: () => (
                        <Ionicons name="search-sharp" size={24} color={theme.onBackGround} />
                        ),
                        drawerItemStyle:{opacity:0.7}
                    }}
                    ></Drawer.Screen>
            <Drawer.Screen name ='Favoritos' component={Favorites}
                options={{
                    drawerIcon: () => (
                        <FontAwesome5 name="heart" size={24} color={theme.onBackGround} />                    
                        ),
                        drawerItemStyle:{opacity:0.7}
                    }}
                    ></Drawer.Screen>
            <Drawer.Screen name ='Ajuda' component={HelpScreen}
                options={{
                    drawerIcon: () => (
                        <MaterialCommunityIcons name="help" size={24} color={theme.onBackGround} />                    
                        ),
                        drawerItemStyle:{opacity:0.7}
                    }}
                    ></Drawer.Screen>
            <Drawer.Screen name ='Configurações' component={Settings}
                options={{
                    drawerIcon: () => (
                        <SimpleLineIcons name="settings" size={24} color={theme.onBackGround} />                    
                        ),
                        drawerItemStyle:{opacity:0.7}
                    }}
                    ></Drawer.Screen>
            <Drawer.Screen name ='Minha conta' component={Profile}
                options={{
                    drawerIcon: () => (
                        <Feather name="user" size={24} color={theme.onBackGround} />                    
                        ),
                        drawerItemStyle:{opacity:0.7}
                    }}
            ></Drawer.Screen>
        </Drawer.Navigator>
    )} 