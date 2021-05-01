import React,{useState} from 'react';
import {
  TextInput,
  Image,
  Text,
  View,
  Button,
  Alert
} from 'react-native';
import {globalStyles} from '../Model/globalStyles';
import { ScrollView } from 'react-native-gesture-handler';


  class Fournisseur extends React.Component{
     
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
        Alert.alert("Erreur",'Entrez le numéro de CIN du fournisseur.');
        this.setState({Cin:'Entrez le CIN.'})
      }
      else if (Cin.length<8 || Cin.length>8)
        {
           Alert.alert 
           ("Erreur","Le numéro de CIN doit contenir 8 chiffres.")
          this.setState({Cin:"Le CIN du client doit contenir 8 chiffres."})}
      else if (Nom===""){
        Alert.alert("Erreur",'Entrez le nom du fournisseur.')
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
        this.setState({Adresse:"Le format doit etre comme suit : xxxx sousse."})}
    
      else if (Telephone===""){
        Alert.alert("Erreur","Entrez le numéro de téléphone du fournisseur.")
        this.setState({Telephone:"Entrez le numéro de téléphone du fournisseur."})
      }
      else if (Telephone.length<8 || Telephone.length>8)
      {
         Alert.alert 
         ("Erreur","Le numéro de téléphone doit contenir 8 chiffres.")
        this.setState({Telephone:"Le numéro de téléphone doit contenir 8 chiffres."})}
      
      else if (Email===""){
        Alert.alert("Erreur","Entrez l'adresse E-mail du fournisseur.")
        this.setState({Email:"Entrez l'adresse E-mail du fournisseur."})
      }
      else if(reg.test(Email) === false)
      {
        Alert.alert
        ("Erreur","Le format de l'email est incorrect.");
        this.setState({Email:"Le format de l'Email est incorrect."})
        return false;
        }
        
  
   else {
  fetch('http://192.168.1.10:8080/api/fournisseurs',{
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
      "Message de confirmation",
      "Le fournisseur" + " " + Nom + ' a bien été ajouté.' ,
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
            placeholder='12864792'
            style={globalStyles.TextInput}
           label='Cin'
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
            placeholder='Emir'
            style={globalStyles.TextInput}
            label='Nom'
            onChangeText={Nom=> this.setState({Nom})}
           
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
             keyboardType='email-address'
            onChangeText={Email => this.setState({Email})}
           
            />
           
     </View>
       
       
       
        
    <View style={{fontSize:20}}>
    <Button title='Ajouter' 
                onPress={()=>this.Submit()}
                      />
                      </View>
    </ScrollView>
</View>
    )}
      }
   

    export default Fournisseur;