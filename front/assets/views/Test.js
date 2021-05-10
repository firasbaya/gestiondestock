import * as React from 'react';
import {
  StyleSheet,
  FlatList,
  Image,
  View,
  TouchableOpacity,
  Text,
  TouchableHighlight
} from 'react-native'
import {globalStyles} from '../Model/globalStyles';
import {
  Avatar,

}from 'react-native-paper';
import { SearchBar } from 'react-native-elements';
import listDépenses from './listDépenses'
class Test extends listDépenses{
  
  constructor(props) {
    super(props);

    
}


render(){

  return(
               <View>
                <Text> {this.state.x}</Text>
               </View> 
              
  )
}
}
    export default Test;
