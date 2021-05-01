import React from "react";
import {createStackNavigator} from'@react-navigation/stack';
import listDépenses from "./listDépenses";
import supprimerDépense from "./supprimerDépense";
const stack = createStackNavigator();

const DépenseStack= () => {
  return (
    
    <stack.Navigator independent={true} 
headerMode={"none"}
    >
      <stack.Screen name="listDépenses" component={listDépenses} options={{headerShown: false,}} />
      <stack.Screen name="supprimerDépense" component={supprimerDépense} options={{headerShown: false}}/>
    </stack.Navigator>
  );
  

}
export default DépenseStack; 