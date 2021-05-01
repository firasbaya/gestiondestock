import React from "react";
import {createStackNavigator} from'@react-navigation/stack';
import DétailEntré from "./DétailEntré";
const stack = createStackNavigator();

const EntréStack= () => {
  return (
    <stack.Navigator independent={true} 
    >
      <stack.Screen name="DétailEntré" component={DétailEntré} options={{headerShown: false}}/>
    </stack.Navigator>
  );
  

}
export default EntréStack; 