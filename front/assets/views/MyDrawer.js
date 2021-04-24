
import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './Home';
import {DrawerContent} from './DrawerContent';


import Fournisseur  from './Fournisseur';
import FournisseurNav from './FournisseurNav'

import  Sortie from './Sortie';
import listSortie from './listSortie';
import  ajoutEntrée from './ajoutEntrée';
import listEntre from './listEntre';
import MouvementNav from './MouvementNav'

import Client from './Client';
import listClient from './listClient';
import ClientNav from './ClientNav';

import ajoutArticle from './ajoutArticle';
import listArticle from './listArticle';

import MagasinierScreen  from './MagasinierScreen';
import listMagasinier from './listMagasinier';
import ajoutMagasinier from './ajoutMagasinier';
import navMagasinier from './navMagasinier';

import Dépense from './Dépense';
import listDépenses from './listDépenses';

import sendMail from './sendMail';
import aPropos from './aPropos';
import Statistique from './Statistique';
import HeatMap from './/HeatMap';




import {createStackNavigator} from'@react-navigation/stack';
const stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const MyDrawerHome= () => {
  return (
    <Drawer.Navigator  inialRouteName='Home' drawerContent={props => <DrawerContent {...props}/>}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="HeatMap" component={HeatMap}/>
    </Drawer.Navigator>
  );
  

}
export default MyDrawerHome; 