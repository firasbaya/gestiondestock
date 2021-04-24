import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Fournisseur from './Fournisseur';
import listFournisseur from './listFournisseur';

import { StyleSheet} from 'react-native';
import FournisseurStack from './FournisseurStack';
const Tab = createMaterialTopTabNavigator()

class FournisseurNav extends React.Component{
  render(){
    return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
      
     tabBarOptions={{
      
      pressColor:'red',
      labelStyle:{
      fontSize:15,
      marginTop:20,
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
      
      <Tab.Screen name="liste des Fournisseurs" component={FournisseurStack}/>
        <Tab.Screen name="Nouveau Fournisseur" component={Fournisseur}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}}
const styles=StyleSheet.create({

});
export default FournisseurNav;
