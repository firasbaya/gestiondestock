import React from "react";
import {createStackNavigator} from'@react-navigation/stack';
import DétailClient from './DétailClient';
import listClient from './listClient';
import { TabBar } from "react-native-tab-view";
import listEntre from "./listEntre";
import DétailEntré from "./DétailEntré";
const stack = createStackNavigator();

const EntréStack= () => {
  return (
    <stack.Navigator independent={true} 
headerMode={"none"}
    >
      <stack.Screen name="listEntre" component={listEntre} options={{headerShown: false,}} />
      <stack.Screen name="DétailEntré" component={DétailEntré} options={{headerShown: false}}/>
    </stack.Navigator>
  );
  

}
export default EntréStack; 