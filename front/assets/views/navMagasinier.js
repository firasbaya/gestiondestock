import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import listMagasinier from './listMagasinier';
import ajoutMagasinier from './ajoutMagasinier';
import MagasinierStack from './MagasinierStack';
const Tab = createMaterialTopTabNavigator()

class MouvementNav extends React.Component{
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
      color:'#FFA500'
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
      
        <Tab.Screen name="Ajout Magasinier" component={ajoutMagasinier} />
        <Tab.Screen name="Liste Magasiniers" component={MagasinierStack}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}}

export default MouvementNav;