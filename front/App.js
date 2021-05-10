import React ,{Component,useEffect}from 'react';

import HomeMag from './assets/views/HomeMag';

import Fournisseur  from './assets/views/Fournisseur';
import FournisseurNav from './assets/views/FournisseurNav'

import  Sortie from './assets/views/Sortie';
import MouvementNav from './assets/views/MouvementNav'

import Client from './assets/views/Client';
import listClient from './assets/views/listClient';
import ClientNav from './assets/views/ClientNav';
import statistiqueClient from './assets/Model/statistiqueClient'
import ajoutArticle from './assets/views/ajoutArticle';
import listArticle from './assets/views/listArticle';
import SplashScreen from './assets/views/SplashScreen';
import MagasinierScreen  from './assets/views/MagasinierScreen';
import listMagasinier from './assets/views/listMagasinier';
import ajoutMagasinier from './assets/views/ajoutMagasinier';
import navMagasinier from './assets/views/navMagasinier';
import Dépense from './assets/views/Dépense';
import listDépenses from './assets/views/listDépenses';
import DépensesNav from './assets/views/DépensesNav'
import supprimerDépense from './assets/views/supprimerDépense' 

import sendMail from './assets/views/sendMail';
import aPropos from './assets/views/aPropos';
import Statistique from './assets/views/Statistique';
import HeatMap from './assets/views/HeatMap';

import LoginScreen from './assets/views/LoginScreen';
import AdminScreen from './assets/views/AdminScreen';
import MdpOubliéScreen from './assets/views/MdpOubliéScreen';
import SignUpScreen from './assets/views/SignUpScreen';
import Test from './assets/views/Test'
import { NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from'@react-navigation/stack';
import MyDrawerHome from './assets/views/MyDrawer'
import {DrawerContent} from './assets/views/DrawerContent';
import test from './assets/Model/test';
import DétailClient from './assets/views/DétailClient';
import DétailArticle from './assets/views/DétailArticle'
import DétailFournisseur from './assets/views/DétailFournisseur';
import DétailMagasinier from './assets/views/DétailMagasinier';
import DétailSortie from './assets/views/DétailSortie';
import DétailEntré from './assets/views/DétailEntré';
import ajoutEntrée from './assets/views/ajoutEntrée';
import validerEntrée from './assets/views/validerEntrée';
import validerSortie from './assets/views/validerSortie';
import listClientCredit from './assets/views/ListClientCredit';
import Mouvements from './assets/views/Mouvements';
import statClient from './assets/Model/statClient';
import interfaceEntre from './assets/Model/interfaceEntre';
import interfaceSortie from './assets/Model/interfaceSortie';
import interfaceVendu from './assets/Model/interfaceVendu';
const Drawer = createDrawerNavigator();
const stack = createStackNavigator();

/* const config ={
  animation:'spring',
  config:{
    stifness:1000,
    damping:1000,
    mass:7,
    overshootClamping:true,
    restDisplacementThreshold:0.01,
    restSpeedThreshold:0.01

  },
};
 */
 export default class App extends React.Component {
render(){
  return (
<NavigationContainer >
      <stack.Navigator >
     
      <stack.Screen name="Home" component={MyDrawerHome} options={{headerShown: false}}/>

      <stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown: false}}/>
      <stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown: false}}/>
      <stack.Screen name="AdminScreen" component={AdminScreen} options={{headerShown: false}}/>
      <stack.Screen name="MdpOubliéScreen" component={MdpOubliéScreen} options={{headerShown: false}}/>
      <stack.Screen name="SignUpScreen" component={SignUpScreen} options={{headerShown: false}}/>
      <stack.Screen name="MagasinierScreen" component={MagasinierScreen} options={{headerShown: false}}/>
      <stack.Screen name="test" component={test} options={{ title:'ChatBot',headerTintColor: 'white', 
      headerStyle: { backgroundColor: '#E73E01'}, 
       headerTitleStyle:{fontWeight: 'bold', color:'white'}}}/>

      <stack.Screen name="alo" component={DrawerContent} />     
      <stack.Screen name="HomeMag" component={HomeMag} options={{headerShown: false}} />

      <stack.Screen name="listArticle" component={listArticle}
      
       options={{ title:'Liste des articles',headerTintColor: 'white', headerStyle: { backgroundColor: '#C21E56'}, 
       headerTitleStyle:{fontWeight: 'bold', color:'white'}}}/>
      <stack.Screen name="ajoutArticle" component={ajoutArticle}
       options={{ title:'Nouvel article',headerTintColor: 'white', headerStyle: { backgroundColor: '#E8B200'},
       headerTitleStyle:{fontWeight: 'bold', color:'white'}, 
       }}/>

      <stack.Screen name="MouvementNav" component={MouvementNav} options={{headerShown: false}}/>
      <stack.Screen name="Mouvements" component={Mouvements} options={{headerShown: false}}/>

       
       <stack.Screen name="listClient" component={listClient} options={{headerShown: false}}/>
       <stack.Screen name="listClientCredit" component={listClientCredit} options={{headerShown: false}}/>

        <stack.Screen name="ajoutEntrée" component={ajoutEntrée} options={{headerShown: false}}/>

      <stack.Screen name="Sortie" component={Sortie}  options={{headerShown: false}}/>
      <stack.Screen name="ClientNav" component={ClientNav}
      options={{headerShown: false}}/>
      <stack.Screen name="Client" component={Client}/>
      <stack.Screen name="validerEntrée" component={validerEntrée}options={{headerShown: false}}/>
      <stack.Screen name="validerSortie" component={validerSortie}options={{headerShown: false}}/>

      <stack.Screen name="FournisseurNav" component={FournisseurNav} options={{headerShown: false}}/>
      <stack.Screen name="Fournisseur" component={Fournisseur}/>

      <stack.Screen name="Statistique" component={Statistique} options={{ title:'Statistiques',
      headerTintColor: 'white',headerStyle: { backgroundColor: '#4B0082'}, headerTitleStyle:{fontWeight: 'bold', color:'white'}}}/>
      
      <stack.Screen name="HeatMap" component={HeatMap} />

      <stack.Screen name="Dépense" component={Dépense}/>
      <stack.Screen name="listDépenses" component={listDépenses} options={{ title:'Liste des dépenses',headerTintColor: 'white',
      headerStyle: { backgroundColor: '#2c7373'}, headerTitleStyle:{fontWeight: 'bold', color:'white'}}}/>
      <stack.Screen name="DépensesNav" component={DépensesNav} options={{headerShown: false}}/>
      <stack.Screen name="supprimerDépense" component={supprimerDépense} options={{headerShown: false}}/>
    
    
      <stack.Screen name="navMagasinier" component ={navMagasinier} options={{headerShown: false}}/>
      <stack.Screen name="ajoutMagasinier" component={ajoutMagasinier}/>
      <stack.Screen name="listMagasinier" component ={listMagasinier}/>

      <stack.Screen name="aPropos" component={aPropos} options={{headerShown: false}}/>
      
      <stack.Screen name="sendMail" component={sendMail} options={{ title:'Passer une commande',headerTintColor: 'white',
      headerStyle: { backgroundColor: '#367ce5'}, headerTitleStyle:{fontWeight: 'bold', color:'white'}}}/> 
        <stack.Screen name="DétailClient" component={DétailClient} options={{headerShown:false}}/>
        <stack.Screen name="DétailFournisseur" component={DétailFournisseur} options={{title:'DétailFournisseur'}}/>
        <stack.Screen name="DétailMagasinier" component={DétailMagasinier} options={{title:'DétailMagasinier'}}/>
        <stack.Screen name="DétailEntré" component={DétailSortie} options={{headerShown: false}}/>
        <stack.Screen name="DétailSortie" component={DétailEntré} options={{headerShown: false}}/>
       <stack.Screen name="Test" component={Test}/>
    <stack.Screen name="Détail Article" component={DétailArticle} options={{headerShown: false}}/>
    <stack.Screen name="statClient" component={statClient} options={{headerShown:false}}/>
    <stack.Screen name="statistiqueClient" component={statistiqueClient} options={{headerShown:false}}/>
    <stack.Screen name="interfaceEntre" component={interfaceEntre} options={{title:'Quantité entrante par article'}}/>
    <stack.Screen name="interfaceSortie" component={interfaceSortie} options={{title:'Quantité Sortante par article'}}/>
    <stack.Screen name="interfaceVendu" component={interfaceVendu} options={{headerShown: false}}/>

     </stack.Navigator>
  </NavigationContainer>
 
 
);
}}

  

 