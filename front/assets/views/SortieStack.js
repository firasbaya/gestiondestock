import React from "react";
import {createStackNavigator} from'@react-navigation/stack';
import DétailClient from './DétailClient';
import listClient from './listClient';
import { TabBar } from "react-native-tab-view";
import listEntre from "./listEntre";
import DétailEntré from "./DétailEntré";
import DétailSortie from "./DétailSortie";
import listSortie from "./listSortie";
const stack = createStackNavigator();

const SortieStack= () => {
  return (
    <stack.Navigator independent={true} 

    >
      <stack.Screen name="listSortie" component={listSortie} options={{headerShown: false,}}/>
      <stack.Screen name="DétailSortie" component={DétailSortie} options={{headerShown: false}}/>
    </stack.Navigator>
  );
  

}
export default SortieStack; 