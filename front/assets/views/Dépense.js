import React from 'react';
import {View,Text,TouchableOpacity,Alert} from 'react-native';
import { TextInput } from 'react-native-paper';
import {globalStyles} from '../Model/globalStyles';


class Dépense extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      Titre:'',
      Montant:''
     
    };
    this.Submit=this.Submit.bind(this);
  }
  Submit = async () => {
    const {Titre,Montant}=this.state;
    if(Titre==""){
      Alert.alert("Erreur",'Entrez le titre.');
      this.setState({Titre:'Entrez le titre.'})
    }
    else if (Montant===""){
      Alert.alert("Erreur",'Entrez le montant.')
      this.setState({Montant:'Entrez le montant.'})
    }
    else {
     await fetch('http://192.168.1.4:8080/api/depenses',{
      method:'post',
      mode:'no-cors',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
			body:JSON.stringify({
				// we will pass our input data to server
				Titre ,
				Montant
      },
      Alert.alert(
        "",
        "La dépense" + " " + Titre + " " + 'a bien été ajoutée.' ,
        [
          
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ]
      ))})}}

    render(){
      return (
        <View style={globalStyles.container}>
            <View style={{margin:30}}>
        
              
            <Text style={{fontSize:18,fontWeight:'bold',marginTop:20,marginBottom:10}}>Titre:</Text>
            
            <TextInput
            placeholder='Frais de réparation'
           onChangeText={Titre => this.setState({Titre})}
             />
            
           
            <Text style={{fontSize:18,fontWeight:'bold',marginTop:25,marginBottom:10}}>Montant:</Text>
            
            <TextInput
            placeholder='0'
            onChangeText={Montant => this.setState({Montant})}
            keyboardType='numeric'
            />
        
            </View>
            
           
            <View style={[globalStyles.vButton,{backgroundColor:'#367ce5',borderColor:'#367ce5',marginTop:0}]}>
                   <TouchableOpacity
                          onPress={() => this.Submit()}>                 
                        <Text style={globalStyles.ajouter}>Ajouter</Text>
                   </TouchableOpacity>
              </View>
        </View>
    );
};}
export default Dépense;
