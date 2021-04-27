import React from "react";
import {createStackNavigator} from'@react-navigation/stack';
import DétailClient from './DétailClient';
import listClient from './listClient';
const stack = createStackNavigator();

const ClientStack= () => {
  return (
    <stack.Navigator independent={true} 

    >
      <stack.Screen name="listClient" component={listClient} options={{headerShown: false,}}/>
      <stack.Screen name="DétailClient" component={DétailClient} options={{headerShown: false}}/>
    </stack.Navigator>
  );
  

}
export default ClientStack; 