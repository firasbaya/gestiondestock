
import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './Home';
import {DrawerContent} from './DrawerContent';

const Drawer = createDrawerNavigator();

const MyDrawerHome= () => {
  return (
    <Drawer.Navigator  inialRouteName='Home' drawerContent={props => <DrawerContent {...props}/>}>
      <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
  );
  

}
export default MyDrawerHome; 