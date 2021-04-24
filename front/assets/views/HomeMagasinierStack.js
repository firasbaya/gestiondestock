import React from "react";
import {createStackNavigator} from'@react-navigation/stack';
import listClient from './listClient';
import { TabBar } from "react-native-tab-view";
import HomeMag from "./HomeMag";
import Home from "./Home";
import ClientStack from "./ClientStack";
const stack = createStackNavigator();

const HomeMagasinierStack= () => {
  return (
    <stack.Navigator independent={true} 

    >
      <stack.Screen name="ClientStack" component={ClientStack} options={{headerShown: false,}} />
      <stack.Screen name="HomeMag" component={HomeMag} options={{headerShown: false}}/>
    </stack.Navigator>
  );
  

}
export default HomeMagasinierStack; 