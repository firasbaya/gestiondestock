import React,{Component} from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

class Home extends Component{
render(){
  return (
<View style={styles.container}>
<ScrollView>
<Text style={styles.Titre}>
Articles
</Text>
<TouchableOpacity
 onPress={() =>{this.props.navigation.navigate('listArticle')}}>
<View style={styles.items}>

  <Image
    style={styles.imageAdmin}
    source={require('../img/pallet.png')}
    />
    <Text style={styles.textIdent}>Liste des articles</Text> 

</View>
</TouchableOpacity>

<TouchableOpacity
 onPress={() => {this.props.navigation.navigate('ajoutArticle')}}
 >
<View style={styles.items}>

  <Image
    style={styles.imageAdmin}
    source={require('../img/box.png')}
    />
   
    <Text style={styles.textIdent}>Ajouter un nouveau article</Text> 


 </View>
 </TouchableOpacity>

 
<Text style={styles.Titre}>
Mouvements
</Text>
<TouchableOpacity
 onPress={() => {this.props.navigation.navigate('Mouvements')}}
 >
<View style={styles.items}>

  <Image
    style={styles.imageAdmin}
    source={require('../img/Move.png')}
    />
    <Text style={styles.textIdent}>Mouvements de stock</Text> 

</View>
</TouchableOpacity>

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
<View style={styles.espace}>

</View>

 <Text style={styles.Titre}>
Données de base
</Text>
<TouchableOpacity
 onPress={() => {this.props.navigation.navigate('ClientNav')}}
 >
<View style={styles.items}>

  <Image
    style={styles.imageAdmin}
    source={require('../img/Client.png')}
    />
    <Text style={styles.textIdent}>Clients</Text> 

</View>
</TouchableOpacity>

<TouchableOpacity
 onPress={() => {this.props.navigation.navigate('FournisseurNav')}}
 >
<View style={styles.items}>

  <Image
    style={styles.imageAdmin}
    source={require('../img/Four.png')}
    />
    <Text style={styles.textIdent}>Fournisseurs</Text> 

</View>


</TouchableOpacity>




<Text style={styles.Titre}>
Divers
</Text>

<TouchableOpacity
 onPress={() => {this.props.navigation.navigate('listClientCredit')}}
 >
<View style={styles.items}>

  <Image
    style={styles.imageAdmin}
    source={require('../img/stat.png')}
    />
    <Text style={styles.textIdent}>Statistiques</Text> 

</View>


</TouchableOpacity>

<TouchableOpacity
 onPress={() => {this.props.navigation.navigate('HeatMap')}}
 >
<View style={styles.items}>

  <Image
    style={styles.imageAdmin}
    source={require('../img/map.png')}
    />
    <Text style={styles.textIdent}>Heat Map</Text> 

</View>
</TouchableOpacity>

<TouchableOpacity
 onPress={() => {this.props.navigation.navigate('DépensesNav')}}
 >
<View style={styles.items}>

  <Image
    style={styles.imageAdmin}
    source={require('../img/money.png')}
    />
   
    <Text style={[styles.textIdent,{marginBottom:30}]}>Dépenses</Text> 


 </View>
 </TouchableOpacity>

</ScrollView>
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

export default Home;