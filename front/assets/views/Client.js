import React,{useState} from 'react';
import {
  TextInput,
  Image,
  Text,
  Alert,
  View,
  Button,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import {globalStyles} from '../Model/globalStyles';




  class Client extends React.Component{
    
    constructor(props) {
      super(props);
     
      this.state = {
      Cin:'',
      Nom:'',
      Adresse:'',
      Telephone:'',
      Email:'',
      
      };
    
      this.Submit=this.Submit.bind(this);
      this.onCinHandler=(Cin) => this.setState({Cin})
    this.onNomHandler= (Nom) => this.setState({Nom});
    this.onAdresseHandler= (Adresse) => this.setState({Adresse});
    this.onTelephoneHandler= (Telephone) => this.setState({Telephone});
    this.onEmailHandler= (Email)=> this.setState({Email});
 
    }
    
    Submit (){
      let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
      const {Cin,Nom,Adresse,Telephone,Email}=this.state;
      if(Cin==""){
        Alert.alert("Erreur",'Entrez le numéro de CIN du client.');
        this.setState({Cin:'Entrez le numéro de CIN du client.'})
      }
      else if (Cin.length<8 || Cin.length>8)
        {
           Alert.alert 
           ("Erreur","Le CIN du client doit contenir 8 chiffres.")
          this.setState({Cin:"Le CIN du client doit contenir 8 chiffres."})}
     
          else if (Nom===""){
        Alert.alert("Erreur",'Entrez le nom du client.')
        this.setState({Nom:'Entrez le nom du client.'})
      }
      else if (Adresse===""){
        Alert.alert("Erreur","Entrez l'adresse du client.")
        this.setState({Adresse:"Entrez l'adresse du client."})
      }
      else if (Adresse.length<4)
      {
         Alert.alert 
         ("Erreur","Le format doit etre comme suit :" +"\n" +"xxxx sousse.")
        this.setState({Adresse:"Le format doit etre comme suit : xx rue xx sousse."})}
      
      else if (Telephone===""){
        Alert.alert("Erreur","Entrez le numéro de téléphone du client.")
        this.setState({Telephone:"Entrez le numéro de téléphone du client."})
      }
      else if (Telephone.length<8 || Telephone.length>8)
      {
         Alert.alert 
         ("Erreur","Le numéro de téléphone doit contenir 8 chiffres.")
        this.setState({Telephone:"Le CIN du fournisseur doit contenir 8 chiffres."})}
      
      else if (Email===""){
        Alert.alert("Erreur","Entrez l'adresse E-mail du client.")
        this.setState({Email:"Entrez l'adresse E-mail du client."})
      }
      else if(reg.test(Email) === false)
      {
        Alert.alert
        ("Erreur","Le format de l'email est incorrect.");
        this.setState({Email:"Le format de l'Email est incorrect."})
        return false;
        }
        
  
   else {
  fetch('http://192.168.1.10:8080/api/clients',{
    method:'post',
    mode:'no-cors',
    headers:{
      'Accept':'application/json',
      'Content-Type':'application/json'
    },
    body:JSON.stringify({
      Cin,
      Nom,
      Adresse,
      Telephone,
      Email
    },
    Alert.alert(
      "",
      "Le Client" + " " + Nom + ' a bien été ajouté.' ,
      [
        
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
      ))})}}

    render(){
      return (
<View style={globalStyles.container}>
      
      
    <ScrollView>
   
        
        <View style={globalStyles.Body}>
            <View style={globalStyles.H}>
                <Image
                      style={globalStyles.icon}
                      source={require('../img/card.png')}
                />
                <Text style={globalStyles.sousTitre}>Numéro CIN</Text>
            </View>

            <TextInput
            placeholder='12834689'
             label='Cin'
            style={globalStyles.TextInput}
            onChangeText={Cin => this.setState({Cin})}
           
            keyboardType='numeric'
           />
     
        </View>

        <View style={globalStyles.E}>
            <View style={globalStyles.H}>
                <Image
                      style={globalStyles.icon}
                      source={require('../img/bus.png')}
                />
                <Text style={globalStyles.sousTitre}>Nom</Text>
            </View>
            <TextInput
            placeholder='Khaled'
            label='Nom'
            onChangeText={Nom=> this.setState({Nom})}
            style={globalStyles.TextInput}
            
            />
   
        </View>
        <View style={globalStyles.E}>
            <View style={globalStyles.H}>
                <Image
                      style={globalStyles.icon}
                      source={require('../img/placeholder.png')}
                />
                <Text style={globalStyles.sousTitre}>Adresse</Text>
            </View>
            <TextInput
            placeholder='30 Rue la douceur'
            style={globalStyles.TextInput}
             label='Adresse'
            
            onChangeText={Adresse => this.setState({Adresse})} 
            
          
          />
      
        </View>

        <View style={globalStyles.E}>
            <View style={globalStyles.H}>
                <Image
                      style={globalStyles.icon}
                      source={require('../img/phone.png')}
                />
                <Text style={globalStyles.sousTitre}>Téléphone</Text>
            </View>
            <TextInput
            placeholder='53570050'
            style={globalStyles.TextInput}
            label='Téléphone'
            onChangeText={Telephone => this.setState({Telephone})}
            
      
            keyboardType='numeric'
            />
                
        </View>
       
        <View style={globalStyles.E}>
            <View style={globalStyles.H}>
                <Image
                    style={globalStyles.icon}
                      source={require('../img/gmail.png')}
                />
                <Text style={globalStyles.sousTitre1}>E-mail</Text>
            </View>
            <TextInput
            placeholder='FamilyBusiness@gmail.com'
            style={globalStyles.TextInput}
             label='Email'
            onChangeText={Email => this.setState({Email})}
   
            keyboardType='email-address'
            />
              
     </View>
     
       
       
      
      
    
        
  
      
    <Button title='Ajouter' 
                 onPress={() =>this.Submit()} 
                style={{fontSize:25}}
                      />
    </ScrollView>
    

</View>
    )}
            }
    
    export default Client;