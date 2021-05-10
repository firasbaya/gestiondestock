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


class DétailArticle extends React.Component{
  constructor() {
    super();
    this.delayValue = 8000;
    this.state = {

      animatedValue: new Animated.Value(0),
search:'',
        dataSource: [],
isLoading:true,
Designation:'',
Marque:'',
Categorie:'',
Id_fournisseur:this.setState({Id_fournisseur:''}),
PrixAchat:this.setState({PrixAchat:''}),
PrixVente:this.setState({PrixVente:''}),
QuantiteAlerte:this.setState({QuantiteAlerte:''}),
QuantiteArticle:this.setState({QuantiteArticle:''}),
modalVisible: false,
modalCommanderVisible: false,
};
this.remove=this.remove.bind(this);
this.Submit=this.Submit.bind(this);
this.onId_fournisseurHandler= (Id_fournisseur) => this.setState({Id_fournisseur});
this.onPrixAchatHandler= (PrixAchat)=> this.setState({PrixAchat});
this.onPrixVenteHandler= (PrixVente) => this.setState({PrixVente});
this.onQuantiteAlerteHandler= (QuantiteAlerte) => this.setState({QuantiteAlerte});
this.onQuantiteArticleHandler= (QuantiteArticle) => this.setState({QuantiteArticle});
}

Submit =async ()=>{
  const  objet={   
  Id_fournisseur:this.state.Id_fournisseur,
  PrixAchat:this.state.PrixAchat,
  PrixVente:this.state.PrixVente,
  QuantiteAlerte:this.state.QuantiteAlerte,
  QuantiteArticle:this.state.QuantiteArticle,

}
if (this.state.QuantiteArticle===""){
  Alert.alert
  ("Erreur","Entrez la quantité d'article.")
  this.setState({QuantiteArticle:"Entrez la quantité d'article."})
}

else if (this.state.Id_fournisseur===""){
  Alert.alert
  ("Erreur","Entrez le numéro CIN du fournisseur.")
  this.setState({Id_fournisseur:"Entrez le numéro CIN du fournisseur."})
}
else if (this.state.PrixAchat===""){
  Alert.alert
  ("Erreur","Entrez le prix d'achat.")
  this.setState({PrixAchat:"Entrez le prix d'achat."})
}
else if (this.state.PrixVente===""){
  Alert.alert
  ("Erreur","Entrez le prix de vente.")
  this.setState({PrixVente:"Entrez le prix de vente."})
}
else if (this.state.PrixVente<=0){
  Alert.alert
  ("Erreur","Prix de vente doit etre superieur a 0.")
  this.setState({PrixVente:"Prix de vente doit etre superieur a 0."})
}
else if (this.state.PrixAchat<=0){
  Alert.alert
  ("Erreur","Prix de vente doit etre superieur a 0.")
  this.setState({PrixAchat:"Prix de vente doit etre superieur a 0."})
}
else if (this.state.PrixVente<this.state.PrixAchat){
  Alert.alert
  ("Erreur","Le prix de vente doit etre supérieur aux prix d'achat.")
  this.setState({PrixVente:"Le prix de vente doit etre supérieur aux prix d'achat."})
}

else if (this.state.QuantiteAlerte===""){
  Alert.alert
  ("Erreur","Entrez la quantité d'alerte.")
  this.setState({QuantiteAlerte:"Entrez la quantité d'alerte."})
}


else {
const _id=this.props.route.params.item._id;
const apiUrl='http://192.168.1.10:8080/api/articles';

await fetch(apiUrl + "/" + _id, {
  method:'put',
  mode:'no-cors',
  headers:{
    'Accept':'application/json',
    'Content-Type':'application/json'
  },
  body:JSON.stringify({
    Id_fournisseur:objet.Id_fournisseur,
    PrixAchat:objet.PrixAchat,
    PrixVente:objet.PrixVente,
    QuantiteAlerte:objet.QuantiteAlerte,
    QuantiteArticle:objet.QuantiteArticle
  })

}

)
Alert.alert(
  "",
  "L'article" + " " + this.props.route.params.item.Designation + ' a bien été modifié.' ,
  
  [
    { text: "OK", onPress: () =>this.props.navigation.navigate('listArticle') }

  ]
);
}
}
remove= async ()=>{
  const _id=this.props.route.params.item._id;
  const apiUrl='http://192.168.1.10:8080/api/articles';
  Alert.alert(

    //title
    'Confirmez votre choix',
    //body
    'Voulez-vous vraiment supprimer cet article?',
    [
      {
        text: 'Confirmer',
        onPress: () =>   fetch(apiUrl + "/" + _id, {
          method: 'DELETE',
          mode:'no-cors',
        }).then(() => {
          Alert.alert(
            "Message de confirmation",
            "Article supprimé.",
            [
              
              { text: "OK", onPress: () => this.props.navigation.navigate('listArticle') }
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


     setModalVisible = (visible) => {
      this.setState({ modalVisible: visible });
    }
    setModalCommanderVisible = (visible) => {
      this.setState({ modalCommanderVisible: visible });
    }
 
    handleEmail = () => {
      const to = ['fournisseur1@gmail.com',] // string or array of email addresses
      email(to, {
          // Optional additional arguments
          subject: 'Bon de commande',
          body:"Bonjour , je voudrais commander une quantité de "+this.state.QuantiteArticle+ " pour l'article "+this.props.route.params.item.Designation+","+"\n"+"Cordialement"
      }).catch(console.error)
  }

 
  SMS=async () => {
    const msg="Bon Commande :" +"\n" +"Article:" +this.props.route.params.item.Designation +"\n" + "Quantité:"+this.state.QuantiteArticle

    const status = await SMS.sendSMSAsync(
   "53570050",
   msg
        );
    console.log(status);
};


 render(){
 
    
  const { modalVisible } = this.state;
  const { modalCommanderVisible } = this.state;

    const position=new Animated.ValueXY({x:0,y:0})
    Animated.timing(position,{
        toValue:{x:140,y:60},
        duration:2400,
        useNativeDriver:true
       }).start()
     return(


     <ScrollView>
     
     <ImageBackground  
style={{ width: '100%',
height: '100%',

flex: 1 }}
blurRadius={180}
                 resizeMode='cover' 
                 source={{
                   
                  
uri:'data:image/jpeg;base64,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'                }}>
                  <Animated.View style={{
               height:80,
               width:80,
               alignItems:'center',
               justifyContent:'center',
               transform:[
                    {translateX:position.x},
                    {translateY:position.y}
               ]
           }}>

<Image

style={{width:150,height:150,borderRadius:50}}


source={require('../img/Articleimagee.jpg')}/>
           </Animated.View>
     
<View style={{height:970,padding:20,}}>


<TextAnimator
        content="️️️Détails sur l'article" 
        textStyle={[globalStyles.textStyle,{color:'#ffe268'}]}
        style={{marginTop:100,}}
        duration={800}

     />

    <View style={{marginTop:40,backgroundColor:'white',flex:1,marginLeft:10,borderRadius:30}}>
      


{/* ----------------------Debut Model Modifier Fiche article-------------------------------*/}

    <Modal
          animationType="slide"
          visible={modalVisible}
          onRequestClose={() => {
            this.setModalVisible(!modalVisible);
          }}
        >
   <ScrollView>

     <ImageBackground  
style={{ width: '100%',
height: '100%',

flex: 1 }}
blurRadius={180}
                 resizeMode='cover' 
                 source={{
                   
                  
uri:'data:image/jpeg;base64,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'                }}>
                  
                  <View style={{alignItems:'flex-end'}}>
                  <TouchableOpacity
                   onPress={() => this.setModalVisible(!modalVisible)}
                  >
                  <Image
                      style={{margin:10}}
                      source={require('../img/exit.png')}
                />
                </TouchableOpacity>
                </View>
                  <Animated.View style={{
               height:80,
               width:80,
               alignItems:'center',
               justifyContent:'center',
               transform:[
                    {translateX:position.x},
                    {translateY:position.y}
               ]
           }}>
 
<Image

style={{width:150,height:150,borderRadius:50}}


source={require('../img/Articleimagee.jpg')}                    />
           </Animated.View>
     
<View style={{height:1000,padding:20,}}>


<TextAnimator
        content="️️️Modifier fiche article" 
        textStyle={[globalStyles.textStyle,{color:'#ffe268'}]}
        style={{marginTop:100,}}
        duration={800}
/>
<View style={{marginTop:40,backgroundColor:'white',flex:1,marginLeft:10,borderRadius:30}}>

            <View style={[globalStyles.H,{marginLeft:30,marginTop:20}]}>
                <Image
                      style={globalStyles.icon}
                      source={require('../img/tampon.png')}
                />
                <Text style={[globalStyles.sousTitre1,{color:'#ff8303'}]}>Désignation:</Text>
            </View>
             
              <TextInput 
                  label='Désignation'
                  editable={false}
                  defaultValue={this.props.route.params.item.Designation}
                  style={[globalStyles.sousTitre1,{marginTop:0,marginLeft:30,color:'#31326f'}]}
                  
/>

<View style={{height:1,width:'100%',backgroundColor:'#ccc',marginBottom:5,marginTop:7}}></View>


    <View style={[globalStyles.H,{marginLeft:30,marginTop:10}]}>
                <Image
                      style={globalStyles.icon}
                      source={require('../img/brand.png')}
                />
           <Text style={[globalStyles.sousTitre1,{color:'#ff8303'}]}>Marque:</Text>

    </View>
    <TextInput
                  label='Marque'
                  editable={false}
                  defaultValue={this.props.route.params.item.Marque}
                  style={[globalStyles.sousTitre1,{marginTop:0,marginLeft:30,color:'#31326f'}]}
              />        
              <View style={{height:1,width:'100%',backgroundColor:'#ccc',marginBottom:5,marginTop:7}}></View>
  
          <View style={[globalStyles.H,{marginLeft:30,marginTop:10}]}>
                <Image
                      style={globalStyles.icon}
                      source={require('../img/cpla.png')}
                />
                
                <Text style={[globalStyles.sousTitre1,{color:'#ff8303'}]}>Catégorie:</Text>
          
          
      </View>
        
               <TextInput
                  defaultValue={this.props.route.params.item.Categorie}
                  label='Catégorie'
                  editable={false}
                  style={[globalStyles.sousTitre1,{marginTop:0,marginLeft:30,color:'#31326f'}]}
              />        
                        <View style={{height:1,width:'100%',backgroundColor:'#ccc',marginBottom:5,marginTop:7}}></View>

          <View style={[globalStyles.H,{marginLeft:30,marginTop:10}]}>
                <Image
                      style={globalStyles.icon}
                      source={require('../img/price.png')}
                />
                <Text style={[globalStyles.sousTitre1,{color:'#ff8303'}]}>Prix d'achat:</Text>
          </View>
             
                 <TextInput
                  defaultValue={this.props.route.params.item.PrixAchat.toString()}
                  label='Prix Achat'
                  onChangeText={this.onPrixAchatHandler}
                  style={[globalStyles.TextInput,{fontSize:20,fontWeight:'bold',color:'#31326f'}]}
                  keyboardType='numeric'
                  />             
       

      <View style={[globalStyles.H,{marginLeft:30,marginTop:10}]}>
                <Image
                      style={globalStyles.icon}
                      source={require('../img/price.png')}
                />
        <Text style={[globalStyles.sousTitre1,{color:'#ff8303'}]}>Prix de vente:</Text>
       </View>
                 <TextInput
                  defaultValue={this.props.route.params.item.PrixVente.toString()}
                  label='Prix de vente'
                  onChangeText={this.onPrixVenteHandler}
                  style={[globalStyles.TextInput,{fontSize:20,fontWeight:'bold',color:'#31326f'}]}
                  keyboardType='numeric'
                />             
                      
      
      <View style={[globalStyles.H,{marginLeft:30,marginTop:10}]}>
                <Image
                      style={globalStyles.icon}
                      source={require('../img/lalaw.png')}
                />
           <Text style={[globalStyles.sousTitre1,{color:'#ff8303'}]}>Quantité d'article:</Text>
      </View>
         
                <TextInput
                  defaultValue={this.props.route.params.item.QuantiteArticle.toString()}
                  label='Quantité article'
                  keyboardType='numeric'
                  onChangeText={this.onQuantiteArticleHandler}
                  style={[globalStyles.TextInput,{fontSize:20,fontWeight:'bold',color:'#31326f'}]}
                />
                    <View style={[globalStyles.H,{marginLeft:30,marginTop:10}]}>
                <Image
                      style={globalStyles.icon}
                      source={require('../img/alert.png')}
                />
           <Text style={[globalStyles.sousTitre1,{color:'#ff8303'}]}>Quantité d'alerte:</Text>
      </View>
         
                <TextInput
                  defaultValue={this.props.route.params.item.QuantiteAlerte.toString()}
                  label="Quantité d'alerte "
                  keyboardType='numeric'
                  onChangeText={this.onQuantiteAlerteHandler}
                  style={[globalStyles.TextInput,{fontSize:20,fontWeight:'bold',color:'#31326f'}]}
                />
                    <View style={[globalStyles.H,{marginLeft:30,marginTop:10}]}>
                <Image
                      style={globalStyles.icon}
                      source={require('../img/venven.png')}
                />
           <Text style={[globalStyles.sousTitre1,{color:'#ff8303'}]}>CIN Fournisseur:</Text>
      </View>
         
                <TextInput
                  defaultValue={this.props.route.params.item.Id_fournisseur.toString()}
                  label='Id Fournisseur'
                  keyboardType='numeric'
                  onChangeText={this.onId_fournisseurHandler}
                  style={[globalStyles.TextInput,{fontSize:20,fontWeight:'bold',color:'#31326f'}]}
                />
                
</View>
   
<View style={[globalStyles.H,{justifyContent:'center',marginTop:20}]}>
    <View style={[globalStyles.E,{width:140,backgroundColor:'#ff8303',borderColor:'#ff8303'}]}>
            
            <TouchableOpacity onPress={() => this.Submit()}>
            
              <Text style={{textAlign:'center',fontSize:17,fontWeight:'bold',backgroundColor:'#ff8303'}}>Sauvegarder</Text>
            
            </TouchableOpacity>
    </View>

  
</View>
</View>
</ImageBackground>
</ScrollView> 
</Modal>



{/* ----------------------Fin Model Modifier-------------------------------*/}




{/* ----------------------Début Model Commander -------------------------- */}
<Modal
          animationType="slide"
          visible={modalCommanderVisible}
          
          onRequestClose={() => {
            this.setModalCommanderVisible(!modalCommanderVisible);
          }}
        >
          <ScrollView>

          <ImageBackground
          style={{ width: '100%',
height: '100%',

flex: 1 }}
blurRadius={180}
                 resizeMode='cover' 
                 source={{
                   
                  
uri:'data:image/jpeg;base64,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'                }}>
         
         <View style={{alignItems:'flex-end'}}>
                  <TouchableOpacity
                   onPress={() => this.setModalCommanderVisible(!modalCommanderVisible)}
                  >
                  <Image
                      style={{margin:10}}
                      source={require('../img/exit.png')}
                />
                </TouchableOpacity>
                </View>
                <Animated.View style={{
               height:80,
               width:80,
               alignItems:'center',
               justifyContent:'center',
               transform:[
                    {translateX:position.x},
                    {translateY:position.y}
               ]
           }}>
 
<Image

style={{width:150,height:150,borderRadius:50}}


source={{uri:'data:image/jpeg;base64,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'}}                    />
           </Animated.View>
           <View style={{height:520,padding:20,}}>

           <TextAnimator
        content="️️️Commander" 
        textStyle={[globalStyles.textStyle,{color:'#ffe268'}]}
        style={{marginTop:100,}}
        duration={800}
/>
<View style={{marginTop:40,backgroundColor:'white',flex:1,marginLeft:10,borderRadius:30}}>
<View style={[globalStyles.H,{marginLeft:30,marginTop:10}]}>
              <Image
                      style={globalStyles.icon}
                      source={require('../img/tampon.png')}
                />
                <Text style={[globalStyles.sousTitre1,{color:'#ff8303'}]}>Désignation:</Text>
              </View>
              <Text style={[globalStyles.sousTitre1,{marginTop:0,marginLeft:54,color:'#31326f'}]}> {this.props.route.params.item.Designation} </Text>
<View style={{height:1,width:'100%',backgroundColor:'#ccc',marginBottom:5,marginTop:7}}></View>
<View style={[globalStyles.H,{marginLeft:30,marginTop:10}]}>
                <Image
                      style={globalStyles.icon}
                      source={require('../img/lalaw.png')}
                />
           <Text style={[globalStyles.sousTitre1,{color:'#ff8303'}]}>Quantité d'article:</Text>
      </View>
         
                <TextInput
                  label='Quantité article'
                  keyboardType='numeric'
                  onChangeText={this.onQuantiteArticleHandler}
                  style={[globalStyles.TextInput,{fontSize:20,fontWeight:'bold',color:'#31326f'}]}
                />
                
                </View>
  
                <View style={[globalStyles.H,{justifyContent:'center',marginTop:20}]}>

<View style={[globalStyles.E,{width:140,backgroundColor:'#ff8303',borderColor:'#ff8303'}]}>
        <TouchableOpacity
        onPress={this.SMS}>
          <Text style={{textAlign:'center',fontSize:17,fontWeight:'bold',backgroundColor:'#ff8303'}}>Commander par SMS</Text>
        </TouchableOpacity>
        </View>

        <View style={[globalStyles.E,{width:140,backgroundColor:'#ffe268',borderColor:'#ffe268'}]}>
<TouchableOpacity
        onPress={this.handleEmail}>
<Text style={{textAlign:'center',fontSize:17,fontWeight:'bold',}}>Commander par E-mail</Text>
        </TouchableOpacity>
        </View>
        </View>
                
</View>




</ImageBackground>         
</ScrollView>
</Modal>

{/* ---------------------Fin Modal Commander ----------------------  */}



{/* ---------------------Début Page DétailClient ----------------------  */}


              <View style={[globalStyles.H,{marginLeft:30,marginTop:10}]}>
              <Image
                      style={globalStyles.icon}
                      source={require('../img/tampon.png')}
                />
                <Text style={[globalStyles.sousTitre1,{color:'#ff8303'}]}>Désignation:</Text>
              </View>
              <Text style={[globalStyles.sousTitre1,{marginTop:0,marginLeft:54,color:'#31326f'}]}> {this.props.route.params.item.Designation} </Text>
<View style={{height:1,width:'100%',backgroundColor:'#ccc',marginBottom:5,marginTop:7}}></View>
<View style={[globalStyles.H,{marginLeft:30}]}>
                <Image
                      style={globalStyles.icon}
                      source={require('../img/brand.png')}
                />
                <Text style={[globalStyles.sousTitre1,{color:'#ff8303'}]}>Marque:</Text>
              </View>
              <Text style={[globalStyles.sousTitre1,{marginTop:0,marginLeft:54,color:'#31326f'}]}> {this.props.route.params.item.Marque} </Text>
              <View style={{height:1,width:'100%',backgroundColor:'#ccc',marginBottom:5,marginTop:7}}></View>
<View style={[globalStyles.H,{marginLeft:30}]}>
              <Image
                      style={globalStyles.icon}
                      source={require('../img/cpla.png')}
                />
                <Text style={[globalStyles.sousTitre1,{color:'#ff8303'}]}>Catégorie:</Text>
              </View>
              <Text style={[globalStyles.sousTitre1,{marginTop:0,marginLeft:54,color:'#31326f'}]}> {this.props.route.params.item.Categorie} </Text>
              <View style={{height:1,width:'100%',backgroundColor:'#ccc',marginBottom:5,marginTop:7}}></View>
<View style={[globalStyles.H,{marginLeft:30}]}>
                <Image
                      style={globalStyles.icon}
                      source={require('../img/price.png')}
                />
                <Text style={[globalStyles.sousTitre1,{color:'#ff8303'}]}>Prix d'achat:</Text>
              </View>
              <Text style={[globalStyles.sousTitre1,{marginTop:0,marginLeft:54,color:'#31326f'}]}> {this.props.route.params.item.PrixAchat.toString()} </Text>
              <View style={{height:1,width:'100%',backgroundColor:'#ccc',marginBottom:5,marginTop:7}}></View>
<View style={[globalStyles.H,{marginLeft:30}]}>
                <Image
                      style={globalStyles.icon}
                      source={require('../img/price.png')}
                />
                <Text style={[globalStyles.sousTitre1,{color:'#ff8303'}]}>Prix de vente:</Text>
              </View>
              <Text style={[globalStyles.sousTitre1,{marginTop:0,marginLeft:54,color:'#31326f'}]}> {this.props.route.params.item.PrixVente} </Text>

              <View style={{height:1,width:'100%',backgroundColor:'#ccc',marginBottom:5,marginTop:7}}></View>
<View style={[globalStyles.H,{marginLeft:30}]}>
                <Image
                      style={globalStyles.icon}
                      source={require('../img/lalaw.png')}
                />  
                <Text style={[globalStyles.sousTitre1,{color:'#ff8303'}]}>Quantité d'article:</Text>
              </View>
              <Text style={[globalStyles.sousTitre1,{marginTop:0,marginLeft:54,color:'#31326f'}]}> {this.props.route.params.item.QuantiteArticle.toString()} </Text>
              <View style={{height:1,width:'100%',backgroundColor:'#ccc',marginBottom:5,marginTop:7}}></View>
<View style={[globalStyles.H,{marginLeft:30}]}>
                <Image
                      style={globalStyles.icon}
                      source={require('../img/lalaw.png')}
                />    
                <Text style={[globalStyles.sousTitre1,{color:'#ff8303'}]}>Quantité d'alerte:</Text>
              </View>
              <Text style={[globalStyles.sousTitre1,{marginTop:0,marginLeft:54,color:'#31326f'}]}> {this.props.route.params.item.QuantiteAlerte.toString()} </Text>
              <View style={{height:1,width:'100%',backgroundColor:'#ccc',marginBottom:5,marginTop:7}}></View>
<View style={[globalStyles.H,{marginLeft:30}]}>
                <Image
                      style={globalStyles.icon}
                      source={require('../img/venven.png')}
                />    
                <Text style={[globalStyles.sousTitre1,{color:'#ff8303'}]}>CIN Fournisseur:</Text>
              </View>
              <Text style={[globalStyles.sousTitre1,{marginTop:0,marginLeft:54,color:'#31326f'}]}> {this.props.route.params.item.Id_fournisseur.toString()} </Text>

    </View>
    
    <View style={[globalStyles.H,{justifyContent:'center',marginTop:20}]}>

    <View style={[globalStyles.E,{width:140,backgroundColor:'#ff8303',borderColor:'#ff8303'}]}>
            <TouchableOpacity
            onPress={() => this.setModalVisible(!modalVisible)}>
              <Text style={{textAlign:'center',fontSize:17,fontWeight:'bold',backgroundColor:'#ff8303'}}>Modifier</Text>
            </TouchableOpacity>
            </View>

            <View style={[globalStyles.E,{width:140,backgroundColor:'#ffe268',borderColor:'#ffe268'}]}>
<TouchableOpacity
            onPress={()=>this.remove()}>
            <Text style={{textAlign:'center',fontSize:17,fontWeight:'bold',}}>Supprimer</Text>
            </TouchableOpacity>
            </View>
            
          
            </View>
            <View style={[globalStyles.E,{width:200,backgroundColor:'#c67ace',borderColor:'#c67ace',marginLeft:55,marginTop:10}]}>
<TouchableOpacity
            onPress={() => this.setModalCommanderVisible(!modalCommanderVisible)}>
<Text style={{textAlign:'center',fontSize:17,fontWeight:'bold',}}>Commander</Text>
            </TouchableOpacity>
            </View>
</View>


            </ImageBackground>
         
</ScrollView>

     )
 }
 
}
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});
    export default DétailArticle;