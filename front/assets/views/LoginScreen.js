
import React,{Component} from 'react';
import {Text, View,Image ,TouchableOpacity} from 'react-native';
import {globalStyles} from '../Model/globalStyles';

class LoginScreen extends React.Component{
    render(){
      return (
    <View style={[globalStyles.containerCenter,{backgroundColor:'white'}]}>
        <Image
        style={{marginTop:150, height:120, width:250}}
        source={require('../img/family.png')}
      
    />
      <Text style={[globalStyles.text,{marginTop:100}]}>Sélectionnez Un Compte</Text>
  
 <TouchableOpacity
 onPress={() => {this.props.navigation.navigate('AdminScreen')}}>   
<View style={[globalStyles.mini,{marginTop:50,borderRadius:15,backgroundColor:'#367ce5'}]}>
    <Image
    style={[globalStyles.imageAdmin,{width:25}]}
    source={require('../img/cadenas.png')}
    />
    <Text style={[globalStyles.textAdmin,{color:'white',width:150,textAlign:'center',marginLeft:5,}]}>Administrateur</Text>
    
    </View>
    </TouchableOpacity>

    <TouchableOpacity
 onPress={()=>{this.props.navigation.navigate('MagasinierScreen')}}>
<View style={[globalStyles.mini2,{marginTop:10,borderRadius:15,backgroundColor:'white',borderWidth:1}]}>
    <Image
    style={[globalStyles.imageAdmin,{width:25}]}
    source={require('../img/admin.png')}
    />
    <Text style={globalStyles.textMag}>Magasinier</Text>
  
</View>
</TouchableOpacity>


</View>
  );}}
 
  export default LoginScreen;