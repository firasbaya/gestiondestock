import React from 'react';
import {
  TextInput,
  Image,
  Text,
  View,
  Button,
  Alert
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {globalStyles} from '../Model/globalStyles';


  class ajoutMagasinier extends React.Component{
    constructor(props) {
      super(props);
  
      this.state = {
        email:'',
        password:'',
        nom:'',
        cin:'',
        telephone:'',
        adresse:'',
       
      };
      this.Submit=this.Submit.bind(this);
    }
    Submit= () => {
      const             { 
        email,
        password,
        nom,
        cin,
        telephone,
        adresse,
                                }=this.state;

  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
  if (cin===""){
    Alert.alert
    ("Erreur","Entrez votre numéro de cin.")
    this.setState({cin:"Entrez votre numéro de cin."})}
  
     else if(email==""){
        Alert.alert
          ("Erreur","Entrez votre email.");
        this.setState({email:"Entrez votre email."})
      }
      else if(reg.test(email) === false)
		{
	  	Alert.alert
      ("Erreur","Format de l'Email incorrecte.");
		  this.setState({email:"Format de l'Email incorrecte."})
		  return false;
		  }
      else if (password===""){
        Alert.alert
        ("Erreur","Entrez votre mot de passe")
        this.setState({password:'Entrez votre mot de passe.'})
      }
      else if (nom===""){
        Alert.alert
        ("Erreur",'Entrez votre nom.')
        this.setState({nom:'Entrez votre nom.'})
      }
    
        else if (cin.length<8 || cin.length>8)
        {
           Alert.alert 
           ("Erreur","Le numéro du CIN doit contenir 8 chiffres.")
          this.setState({cin:"Le numéro du CIN doit contenir 8 chiffres."})}
          
          else if (telephone===""){
            Alert.alert
            ("Erreur","Entrez votre numéro.")
            this.setState({telephone:"Entrez votre numéro."})}
          
            else if (telephone.length<8 || telephone.length>8)
            {
               Alert.alert 
               ("Erreur","Le numéro  doit contenir 8 chiffres.")
              this.setState({telephone:"Le numéro de téléphone doit contenir 8 chiffres."})}
            


          else if (adresse===""){
         Alert.alert 
         ("Erreur","Entrez votre adresse.")
        this.setState({adresse:"Entrez votre adresse."})
      }
      else if (adresse.length<4)
      {
         Alert.alert 
         ("Erreur","Le format doit etre comme suit :" +"\n" +"xxxx sousse.")
        this.setState({telephone:"Le format doit etre comme suit : xx rue xx sousse."})}
      

      else {
        fetch('http://192.168.1.4:8080/api/auth/signup',{
        method:'post',
        mode:'no-cors',
        headers:{
          'Accept':'application/json',
          'Content-Type':'application/json'
        },
        body:JSON.stringify({
          // we will pass our input data to server
          email,
          password,
          nom,
          cin,
          telephone,
          adresse,
        },
        Alert.alert(
          "",
          "Le magasinier" + " " +nom + " " + 'a bien été ajouté.' ,
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
                <Text style={globalStyles.sousTitre}>CIN Magasinier</Text>
            </View>

            <TextInput
            placeholder='12284890'
            style={globalStyles.TextInput}
            onChangeText={cin => this.setState({cin})}
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
            placeholder='Emira'
            style={globalStyles.TextInput}
            onChangeText={nom => this.setState({nom})}

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
            onChangeText={adresse => this.setState({adresse})}

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
            onChangeText={telephone => this.setState({telephone})}
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
            onChangeText={email => this.setState({email})}
            keyboardType='email-address'
            />
         
     </View>

     <View style={globalStyles.E}>
            <View style={globalStyles.H}>
                <Image
                    style={globalStyles.icon}
                      source={require('../img/password.png')}
                />
                <Text style={globalStyles.sousTitre1}>Mot de passe</Text>
            </View>
            <TextInput
            placeholder='************'
            style={globalStyles.TextInput}
            onChangeText={password => this.setState({password})}
            secureTextEntry
          />
        
     </View>
       
    <Button title='Ajouter' 
                 onPress={() => this.Submit()}
                  color='#FFA500'
                      />
    </ScrollView>
</View>
    )}
      }
    
    export default ajoutMagasinier;