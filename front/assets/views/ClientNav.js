import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Client from './Client';
import ClientStack from './ClientStack'

const Tab = createMaterialTopTabNavigator();

class ClientNav extends React.Component{
  render(){
    return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
    
     tabBarOptions={{
      pressColor:'#78c4d4',
      labelStyle:{
      marginTop:20,
      fontSize:15,
      fontWeight:'bold',
      color:'#367ce5'
      },
      tabStyle:{
        margin:7,
      
      },
      indicatorStyle:{
      backgroundColor:'#78c4d4',

      },
      indicatorContainerStyle:{

        
      },
     
     }}
      >
      
        <Tab.Screen name="liste des clients" component={ClientStack}/>
        <Tab.Screen name="Nouveau Client" component={Client}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}}

export default ClientNav;