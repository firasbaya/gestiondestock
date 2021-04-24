import React from "react";
import {createStackNavigator} from'@react-navigation/stack';
import listFournisseur from './listFournisseur';
import DétailFournisseur from './DétailFournisseur';
import { TabBar } from "react-native-tab-view";
const stack = createStackNavigator();

const FournisseurStack= () => {
  return (
    <stack.Navigator independent={true} 

    >
      <stack.Screen name="listFournisseur" component={listFournisseur} options={{headerShown: false,}} />
      <stack.Screen name="DétailFournisseur" component={DétailFournisseur} options={{headerShown: false}}/>
    </stack.Navigator>
  );
  

}
export default FournisseurStack; 