import * as React from 'react';
import {
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
  Text,
  ImageBackground,
  Animated,
  Modal,
  TextInput,
  Alert,

} from 'react-native'
//import * as Font from 'expo-font';
import { ScrollView } from 'react-native-gesture-handler';
import { globalStyles } from '../Model/globalStyles';
import TextAnimator from '../Model/TextAnimator';
import * as SMS from 'expo-sms';
import email from 'react-native-email'


class supprimerDépense extends React.Component{
 
    constructor() {
        super();
        this.state = {
Titre:'',
Montant:'',
dataSource: [],
modalVisible:false,

}
    }
    remove= async ()=>{
        const _id=this.props.route.params.item._id;
        const apiUrl='http://192.168.1.10:8080/api/depenses';
        Alert.alert(
      
          //title
          'Confirmez votre choix',
          //body
          'Voulez-vous vraiment supprimer cette dépense?',
          [
            {
              text: 'Confirmer',
              onPress: () =>   fetch(apiUrl + "/" + _id, {
                method: 'DELETE',
                mode:'no-cors',
              }).then(() => {
                Alert.alert(
                  "Message de confirmation",
                  "Dépense supprimée.",
                  [
                    
                    { text: "OK", onPress: () => this.props.navigation.navigate('Home') }
                  ]
                );         }).catch(err => {
                console.error(err)
              })
            },
            {
              text: 'Annuler',
              onPress: () => console.log('Cancel'), style: 'cancel'
            },
          ],
          {cancelable: false},
          //clicking out side of alert will not cancel
        );
      
      
       
      }
    
 
render() {
    return(
        <View style={{flex:1,backgroundColor:'#ccc'}}>
        <View style={{ marginTop:100, backgroundColor: 'white', marginLeft: 10,borderRadius: 30,marginRight:10}}>
        <View style={[globalStyles.H, { marginLeft: 30, marginTop: 5 }]}>
          <Image
            style={globalStyles.icon}
            source={require('../img/tampon.png')}
          />
          <Text style={[globalStyles.sousTitre1, { color: '#ff8303' }]}>Titre:</Text>
        </View>
        <Text style={[globalStyles.sousTitre1, { marginTop: 0, marginLeft: 54, color: '#31326f', marginBottom: 10 }]}> {this.props.route.params.item.Titre} </Text>
        <View style={{ height: 1, width: '100%', backgroundColor: '#ccc', marginBottom: 5, }}></View>


        <View style={[globalStyles.H, { marginLeft: 30 }]}>
          <Image
            style={globalStyles.icon}
            source={require('../img/lalaw.png')}
          />
          <Text style={[globalStyles.sousTitre1, { color: '#ff8303' }]}>Montant:</Text>
        </View>

        <Text style={[globalStyles.sousTitre1, { marginTop: 0, marginLeft: 54, color: '#31326f', marginBottom: 10 }]}> {this.props.route.params.item.Montant} </Text>
        </View>
        <View style={[globalStyles.H,{justifyContent:'center',marginTop:20}]}>
    <View style={[globalStyles.E,{width:140,backgroundColor:'#367ce5',borderColor:'#367ce5'}]}>
            
            <TouchableOpacity onPress={() => this.remove()}>
            
              <Text style={{textAlign:'center',fontSize:20,fontWeight:'bold',backgroundColor:'#367ce5',color:'white'}}>Supprimer</Text>
            
            </TouchableOpacity>
    </View>
    </View>
        </View>
        )
}
}  
    
 
const styles = StyleSheet.create({
 
});
    export default supprimerDépense;