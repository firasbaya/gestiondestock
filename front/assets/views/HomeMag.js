import React,{Component} from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity} from 'react-native';

class HomeMag extends Component{
render(){
  return (
<View style={styles.container}>


 
<Text style={styles.Titre}>
Accueil
</Text>

<TouchableOpacity
 onPress={() => {this.props.navigation.navigate('ajoutEntrée')}}
 >
<View style={styles.items}>

  <Image
    style={styles.imageAdmin}
    source={require('../img/in.png')}
    />
    <Text style={styles.textIdent}>Arrivage de marchandises</Text> 

</View>
</TouchableOpacity>

<TouchableOpacity
 onPress={() => {this.props.navigation.navigate('Sortie')}}
 >
<View style={styles.items}>

  <Image
    style={styles.imageAdmin}
    source={require('../img/out.png')}
    />
   
    <Text style={styles.textIdent}>Sortie de marchandises</Text> 
 </View>
 </TouchableOpacity>
 
 <TouchableOpacity
 onPress={() => {this.props.navigation.navigate('Sortie')}}
 >
   

 </TouchableOpacity>
 <TouchableOpacity
 onPress={() => {this.props.navigation.navigate('listClient')}}
 >
   
<View style={styles.items}>

  <Image
    style={styles.imageAdmin}
    source={require('../img/Client.png')}
    />
   
    <Text style={styles.textIdent}>Liste des clients</Text> 
 </View>
 </TouchableOpacity>
 


</View>
  );}}


const styles=StyleSheet.create({
container:{
    flex:1,
marginTop:50,
marginLeft:20,
},
Titre:{
    fontWeight:'bold',
    borderBottomWidth:3,
    borderBottomColor:"#367ce5",
    fontSize:25,
    marginTop:15,
    letterSpacing:1.6,
},
items:{
    flexDirection:'row',
    marginTop:20,
    
    
    },
    imageAdmin:{
        height:35,
        width:30,
      marginRight:7,
      },
      textIdent:{
        marginTop:7,
        marginLeft:10,
        fontSize:18,
        width:250,
        height:30,
    },
});

export default HomeMag;