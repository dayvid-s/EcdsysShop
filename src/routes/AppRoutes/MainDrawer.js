import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../../screens/Home'
import Preload from '../../screens/Preload';
import SignUp from '../../screens/SignUp';
import SignIn from '../../screens/SignIn';
import Cart from '../../screens/Cart';
import Profile from '../../screens/Profile';
import Favorites from '../../screens/Favorites';
import Settings from '../../screens/Settings';
import HelpScreen from '../../screens/HelpScreen';
import SearchProduct from '../../screens/SearchProduct';
// drawer navigator it's oppening in sign in and sign up page
import {CustomDrawer } from '../../components/CustomDrawer'
import { 
    Ionicons,
    FontAwesome5, 
    AntDesign,
    Fontisto,
    Feather,
    SimpleLineIcons,
    MaterialCommunityIcons 
  } from '@expo/vector-icons'; 
  
const Drawer = createDrawerNavigator();

export default () => (
    <Drawer.Navigator 
        
        drawerContent={(props) => <CustomDrawer {...props}/>}
        screenOptions={{
            headerShown: false,
            drawerActiveBackgroundColor:'#18212A',
            drawerActiveTintColor:'#rgb(178,180,183)',
            drawerInactiveTintColor:'#rgb(178,180,183)',
            drawerStyle:{width:310},
            drawerLabelStyle:{
                marginLeft:-10,
                // fontFamily: 'Roboto-Medium'
                fontSize:15,
                fontFamily: "Medium"
            }
        }} >
        
            <Drawer.Screen name ='Minha conta' component={Profile}
                options={{
                    drawerIcon: () => (
                        <Feather name="user" size={24} color="#rgb(178,180,183)" />                    ),
                    }}
            ></Drawer.Screen>
        
        <Drawer.Screen name ='Início' component={Home}
            options={{
                drawerIcon: () => (
                    <Ionicons name="home-outline" size={22} color={'#rgb(178,180,183)'} />
                    ),
                }}
        ></Drawer.Screen>
        <Drawer.Screen name ='Meu carrinho' component={Cart} 
            options={{
                drawerIcon: () => (
                    <Feather name="shopping-bag" size={24} color="#rgb(178,180,183)" />                    ),
                }}
        ></Drawer.Screen>
        <Drawer.Screen name ='Pesquisar' component={SearchProduct}
            options={{
                drawerIcon: () => (
                    <Ionicons name="search-sharp" size={24} color="#rgb(178,180,183)" />
                    ),
                }}
        ></Drawer.Screen>
        <Drawer.Screen name ='Favoritos' component={Favorites}
            options={{
                drawerIcon: () => (
                    <FontAwesome5 name="heart" size={24} color="#rgb(178,180,183)" />                    ),
                }}
        ></Drawer.Screen>
        <Drawer.Screen name ='Ajuda' component={HelpScreen}
            options={{
                drawerIcon: () => (
                    <MaterialCommunityIcons name="help" size={24} color="#rgb(178,180,183)" />                    ),
                }}
        ></Drawer.Screen>
        <Drawer.Screen name ='Configurações' component={Settings}
            options={{
                drawerIcon: () => (
                    <SimpleLineIcons name="settings" size={24} color="#rgb(178,180,183)" />                    ),
                }}
        ></Drawer.Screen>
    </Drawer.Navigator>
    )