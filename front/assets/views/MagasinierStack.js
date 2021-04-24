import React from "react";
import {createStackNavigator} from'@react-navigation/stack';
import listMagasinier from './listMagasinier';
import DétailMagasinier from './DétailMagasinier';
import { TabBar } from "react-native-tab-view";
const stack = createStackNavigator();

const MagasinierStack= () => {
  return (
    <stack.Navigator independent={true} 

    >
      <stack.Screen name="listMagasinier" component={listMagasinier} options={{headerShown: false,}} />
      <stack.Screen name="DétailMagasinier" component={DétailMagasinier} options={{headerShown: false}}/>
    </stack.Navigator>
  );
  

}
export default MagasinierStack; 