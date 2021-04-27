import React from "react";
import {createStackNavigator} from'@react-navigation/stack';
import HomeMag from "./HomeMag";
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