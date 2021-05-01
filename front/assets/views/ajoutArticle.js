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
      };
      this.Submit=this.Submit.bind(this);
    }
    Submit= async() => {
      const             { 
        Designation,
        Marque,
        Categorie,
        Id_fournisseur,
        PrixAchat,
        PrixVente,
        MaxRemise,
        QuantiteAlerte,
                         }=this.state;

                         if (PrixVente<=PrixAchat){
                          Alert.alert
                           ("Erreur","Le prix d'achat doit etre inférieur au prix de vente.")
                         this.setState({prixVente:"Le prix d'achat doit etre inférieur au prix de vente."})
                       }
                        
      else if(Designation==""){
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
        ("Erreur","Entrez le numéro CIN du fournisseur.")
        this.setState({Id_fournisseur:"Entrez le numéro CIN du fournisseur."})}
      
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
      else if (PrixAchat<=0){
        Alert.alert
         ("Erreur","Prix d'achat doit etre supérieur à 0.")
       this.setState({PrixAchat:"Prix d'achat doit etre supérieur à 0."})
     }
      else if (PrixVente===""){
         Alert.alert
          ("Erreur",'Entrez le prix de vente.')
        this.setState({PrixVente:'Entrez le prix de vente.'})
      }
      else if (PrixVente<=0){
        Alert.alert
         ("Erreur",'Prix de vente doit etre supérieur à 0.')
       this.setState({PrixVente:'Prix de vente doit etre supérieur à 0.'})
     }
      
      
      
      else if (MaxRemise===""){
         Alert.alert 
         ("Erreur",'Entrez le taux de réduction.')
        this.setState({MaxRemise:'Entrez le taux de réduction.'})
      }
      else if (MaxRemise<0){
        Alert.alert 
        ("Erreur",'Le taux de remise doit etre positif.')
       this.setState({MaxRemise:'Le taux de remise doit etre positif.'})
     }
      else if (QuantiteAlerte===""){
        Alert.alert
        ("Erreur","Entrez la quantité d'alerte.")
        this.setState({QuantiteAlerte:"Entrez la quantité d'alerte."})
      }
      else if (QuantiteAlerte<0){
        Alert.alert
        ("Erreur","La quantité d'alerte doit etre positive.")
        this.setState({QuantiteAlerte:"La quantité d'alerte doit etre positive."})
      }
   
      
      else {
        await fetch('http://192.168.1.10:8080/api/articles',{
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
        },
        Alert.alert(
          "",
          "L'article" + " " +Designation + " " + 'a bien été ajouté.' ,
          [
            
            { text: "OK", onPress: () => this.props.navigation.navigate('Home') }
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
        <View style={[globalStyles.E,{marginBottom:25}]}>
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