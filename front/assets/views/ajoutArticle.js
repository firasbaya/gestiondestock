import React,{useState} from 'react';
import {
  TextInput,
  Image,
  Text,
  View,
  Button,
  Alert,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {globalStyles} from '../Model/globalStyles';


  class ajoutArticle extends React.Component{

    constructor(props) {
      super(props);
  
      this.state = {
        Designation:'',
        Marque:'',
        Categorie:'',
        Id_fournisseur:'',
        PrixAchat:'',
        PrixVente:'',
        MaxRemise:'',
        QuantiteAlerte:'',
        QuantiteArticle:''
      };
      this.Submit=this.Submit.bind(this);
    }
    Submit= () => {
      const             { 
        Designation,
        Marque,
        Categorie,
        Id_fournisseur,
        PrixAchat,
        PrixVente,
        MaxRemise,
        QuantiteAlerte,
        QuantiteArticle,
                         }=this.state;
      if(Designation==""){
        Alert.alert
          ("Erreur","Entrez la Designation de l'article.");
        this.setState({Designation:"Entrez la Designation de l'article."})
      }
      else if (Marque===""){
        Alert.alert
        ("Erreur","Entrez la marque")
        this.setState({Marque:'Entrez la Marque.'})
      }
      else if (Categorie===""){
        Alert.alert
        ("Erreur",'Entrez la catégorie.')
        this.setState({Categorie:'Entrez la catégorie.'})
      }
      else if (Id_fournisseur===""){
        Alert.alert
        ("Erreur","Entrez l'ID du fournisseur.")
        this.setState({Id_fournisseur:"Entrez l'ID du fournisseur."})}
      
        else if (Id_fournisseur.length<8 || Id_fournisseur.length>8)
        {
           Alert.alert 
           ("Erreur","Le CIN du fournisseur doit contenir 8 chiffres.")
          this.setState({Id_fournisseur:"Le CIN du fournisseur doit contenir 8 chiffres."})}
        
          else if (PrixAchat===""){
         Alert.alert 
         ("Erreur","Entrez le prix d'achat.")
        this.setState({PrixAchat:"Entrez le prix d'achat."})
      }

      else if (PrixVente===""){
         Alert.alert
          ("Erreur",'Entrez le prix de vente.')
        this.setState({prixVente:'Entrez le prix de vente.'})
      }
      else if (MaxRemise===""){
         Alert.alert 
         ("Erreur",'Entrez le taux de réduction.')
        this.setState({MaxRemise:'Entrez le taux de réduction.'})
      }
      else if (QuantiteAlerte===""){
        Alert.alert
        ("Erreur","Entrez la quantité d'alerte.")
        this.setState({QuantiteAlerte:"Entrez la quantité d'alerte."})
      }
      else if (QuantiteArticle===""){
        Alert.alert
        ("Erreur","Entrez la quantité d'article.")
        this.setState({QuantiteArticle:"Entrez la quantité d'article."})
      }
      
      else {
        fetch('http://192.168.1.4:8080/api/articles',{
        method:'post',
        mode:'no-cors',
        headers:{
          'Accept':'application/json',
          'Content-Type':'application/json'
        },
        body:JSON.stringify({
          // we will pass our input data to server
          Designation,
          Marque,
          Categorie,
          Id_fournisseur,
          PrixAchat,
          PrixVente,
          MaxRemise,
          QuantiteAlerte,
          QuantiteArticle
        },
        Alert.alert(
          "",
          "L'article" + " " +Designation + " " + 'a bien été ajouté.' ,
          [
            
            { text: "OK", onPress: () => console.log("OK Pressed") }
          ]
        ))})}}
    render(){
   
      return (
        
<View style={globalStyles.container}>
 
    <ScrollView>
      
        <View style={[globalStyles.E,{marginTop:30}]}>
            <View style={globalStyles.H}>
                <Image
                      style={globalStyles.icon}
                      source={require('../img/tampon.png')}
                />
                <Text style={globalStyles.sousTitre}>Désignation</Text>
            </View>
            <TextInput
            style={globalStyles.TextInput}
           label='Designation'
           placeholder='c200'
           onChangeText={Designation=> this.setState({Designation})}
            />
             
        </View>
        <View style={globalStyles.E}>
            <View style={globalStyles.H}>
                <Image
                      style={globalStyles.icon}
                      source={require('../img/brand.png')}
                />
                <Text style={globalStyles.sousTitre}>Marque</Text>
            </View>
            <TextInput
            placeholder='Mercedes'
            style={globalStyles.TextInput}
           label='Marque'
           onChangeText={Marque=> this.setState({Marque})}
            />

            
        </View>

        <View style={globalStyles.E}>
            <View style={globalStyles.H}>
                <Image
                      style={globalStyles.icon}
                      source={require('../img/cpla.png')}
                />
                <Text style={globalStyles.sousTitre}>Catégorie</Text>
            </View>
            <TextInput
            placeholder='Véhicule'
            style={globalStyles.TextInput}
            label='Categorie'
            onChangeText={Categorie=> this.setState({Categorie})}
            />
           
        </View>
       
        <View style={globalStyles.E}>
            <View style={globalStyles.H}>
                <Image
                    style={globalStyles.icon}
                      source={require('../img/venven.png')}
                />
                <Text style={globalStyles.sousTitre1}>CIN Fournisseur</Text>
            </View>
            <TextInput
            placeholder='12476625'
            style={globalStyles.TextInput}
           label='Id_fournisseur'
           onChangeText={Id_fournisseur=> this.setState({Id_fournisseur})}
           keyboardType='numeric'
            />
              
     </View>
       
        <View style={globalStyles.E}>
            <View style={globalStyles.H}>
                <Image
                      style={globalStyles.icon}
                      source={require('../img/price.png')}
                />
                <Text style={globalStyles.sousTitre}>Prix Achat</Text>
            </View>
            <TextInput
            placeholder='0'
            style={globalStyles.TextInput}
            label='PrixAchat'
            onChangeText={PrixAchat=> this.setState({PrixAchat})}
            keyboardType='numeric'
            /> 
              
        </View>

        <View style={globalStyles.E}>
            <View style={globalStyles.H}>
                <Image
                      style={globalStyles.icon}
                      source={require('../img/price.png')}
                />
                <Text style={globalStyles.sousTitre}>Prix Vente</Text>
            </View>
            <TextInput
            placeholder='0'
            style={globalStyles.TextInput}
             label='PrixVente'
             onChangeText={PrixVente=> this.setState({PrixVente})}
             keyboardType='numeric'
            /> 
          
        </View>


        <View style={globalStyles.E}>
            <View style={globalStyles.H}>
                <Image
                      style={globalStyles.icon}
                      source={require('../img/dis.png')}
                />
                <Text style={globalStyles.sousTitre}> Remise</Text>
            </View>
            <TextInput
            placeholder='0'
            style={globalStyles.TextInput}
           label='MaxRemise'
           onChangeText={MaxRemise=> this.setState({MaxRemise})}
            keyboardType='numeric'
            /> 
          
        </View>
        <View style={globalStyles.E}>
            <View style={globalStyles.H}>
                <Image
                      style={globalStyles.icon}
                      source={require('../img/alert.png')}
                />
                <Text style={globalStyles.sousTitre}>Quantité d'alerte</Text>
            </View>
            <TextInput
            placeholder='0'
            style={globalStyles.TextInput}
            label='QuantiteAlerte'
            onChangeText={QuantiteAlerte=> this.setState({QuantiteAlerte})}
            keyboardType='numeric'
            /> 
             
        </View>
        
        <View style={globalStyles.E}>
            <View style={globalStyles.H}>
                <Image
                      style={globalStyles.icon}
                      source={require('../img/lalaw.png')}
                />
                <Text style={globalStyles.sousTitre}>Quantité</Text>
            </View>
            <TextInput
            placeholder='0'
            style={globalStyles.TextInput}
           label='QuantiteArticle'
           onChangeText={QuantiteArticle=> this.setState({QuantiteArticle})}
           keyboardType='numeric'
            /> 
              
        </View>
        
        

        <View style={{fontSize:20}}>
    <Button title='Ajouter' 
                onPress={() => this.Submit()}
               color='#E8B200'
               
/>
  </View>
    </ScrollView>
</View>
    )}}

    export default ajoutArticle;