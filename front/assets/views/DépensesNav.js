
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Dépense from './Dépense';
import listDépenses from "./listDépenses";
import DépenseStack from './DépenseStack';
const Tab = createMaterialTopTabNavigator();


class DépensesNav extends React.Component{
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
        color:'#367ce5',
        height:35
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
        
          <Tab.Screen name="liste des dépenses" component={DépenseStack} />
          <Tab.Screen name="Nouvelle Dépense" component={Dépense}/>
        </Tab.Navigator>
      </NavigationContainer>
    );
  }}
  
  export default DépensesNav;