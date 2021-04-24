import * as React from 'react';
import { Alert, StatusBar, View, StyleSheet,Text } from 'react-native';
import Constants from 'expo-constants';
import TextAnimator from '../Model/TextAnimator';


class  aPropos extends React.Component {
 
  render(){
  return (
    <View style={styles.container}>
      <StatusBar hidden />

     
      <TextAnimator
        content="La gestion quotidienne de votre entreprise est importante, mais c'est compliqué
        et ça prend beaucoup de temps. C'est pourquoi nous avons conçu notre application ❤️️️️Family Business❤️️️️" 
        textStyle={styles.textStyle}
        style={styles.containerStyle}
        duration={1000}
        
      />
    </View> 
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8
  },
  containerStyle: {},
  textStyle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 14,
  }
});
export default aPropos;