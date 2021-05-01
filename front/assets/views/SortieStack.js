import React from "react";
import {createStackNavigator} from'@react-navigation/stack';
import DétailSortie from "./DétailSortie";
const stack = createStackNavigator();

const SortieStack= () => {
  return (
    <stack.Navigator independent={true} 

    >
      <stack.Screen name="DétailSortie" component={DétailSortie} options={{headerShown: false}}/>
    </stack.Navigator>
  );
  

}
export default SortieStack; 