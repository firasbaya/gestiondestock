import * as React from 'react';
import {
  StyleSheet,

  Image,
  View,
  TouchableOpacity,
  Text,
  ImageBackground,
  ActivityIndicator,
  Animated,
  Modal,
  Pressable,
  Button,
  TextInput,
  Alert,
  Input
} from 'react-native'
//import * as Font from 'expo-font';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyles } from '../Model/globalStyles';
import TextAnimator from '../Model/TextAnimator';


class DétailFournisseur extends React.Component{
  constructor() {
    super();

/*     this.modifier = this.modifier.bind(this);
this.state = { isModalOpen: false */

    this.delayValue = 8000;
    this.state = {

      animatedValue: new Animated.Value(0),
search:'',
        /* data: [],
        refreshing: true, */
        dataSource: [],
isLoading:true,
Cin:'',
Nom:'',
Adresse:this.setState({Adresse:''}),
Telephone:this.setState({Telephone:''}),
Email:this.setState({Email:''}),
modalVisible: false,

};
this.Submit=this.Submit.bind(this);
this.onCinHandler=(Cin) => this.setState({Cin})
this.onNomHandler= (Nom) => this.setState({Nom});
this.onAdresseHandler= (Adresse) => this.setState({Adresse});
this.onTelephoneHandler= (Telephone) => this.setState({Telephone});
this.onEmailHandler= (Email)=> this.setState({Email});
}

Submit (){
const objet={   
Cin:this.state.Cin,
Nom:this.state.Nom,
Adresse:this.state.Adresse,
Telephone:this.state.Telephone,
Email:this.state.Email,

}
Alert.alert(
  "",
  "Le Fournisseur" + " " + this.props.route.params.item.Nom+ ' a bien été modifié.' ,
  [
    
    { text: "OK", onPress: () => console.log("OK Pressed") }
  ]
);
  
const _id=this.props.route.params.item._id;
const apiUrl='http://192.168.1.2:8080/api/fournisseurs';

fetch(apiUrl + "/" + _id, {
  method:'put',
  mode:'no-cors',
  headers:{
    'Accept':'application/json',
    'Content-Type':'application/json'
  },
  body:JSON.stringify({
    Adresse:objet.Adresse,
    Telephone:objet.Telephone,
    Email:objet.Email,
  })

})}
remove=()=>{
  Alert.alert(
    //title
    'Confirmez votre choix',
    //body
    'Voulez-vous vraiment supprimer ce fournisseur?',
    [
      {
        text: 'Confirmer',
        onPress: () =>   fetch(apiUrl + "/" + _id, {
          method: 'DELETE',
          mode:'no-cors',
        }).then(() => {
           console.log('removed');
        }).catch(err => {
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

  const _id=this.props.route.params.item._id;
  const apiUrl='http://192.168.1.2:8080/api/fournisseurs';
  }
//change font
  /* constructor(){
    super()
    this.state={
      fontLoaded:false
    }
  }
  async componentDidMount(){
    await Font.loadAsync({
      'ZenDots-Regular':require('../Fonts/ZenDots-Regular.ttf')
    })
    this.setState({fontLoaded:true});
  } */
//var Name=req.body.Name;
 /*  modifier = () => {

    const { isModalOpen } = this.state; this.setState({ isModalOpen: !isModalOpen });
 */
  /*  db.collection('clients').updateOne({"Name":Name},function (err,result){
     console.log('updated')
    */
   

     setModalVisible = (visible) => {
      this.setState({ modalVisible: visible });
    }

  
  
/* componentDidMount() {

 fetch ('http://192.168.1.8:8080/api/clients/id',{
 method:'delete',
 mode:'no-cors',
 headers:{
 'Accept':'application/json',
 'Content-Type':'application/json'
 },

})
 
.then((response) => response.json())
.then((responseJson) => {
 this.setState({
   dataSource:responseJson
 })
})
.catch((error) =>{
 console.log(error)
}
)} */
 render(){
   
  const { modalVisible } = this.state;

    
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

source={require('../img/Client.png')}
                    />
           </Animated.View>
     
<View style={{height:680,padding:20,}}>

{/* {this.state.fontLoaded?(
 */}    
<TextAnimator
        content="️️️Détails sur le Fournisseur" 
        textStyle={[globalStyles.textStyle,{color:'#ffe268',fontSize:25}]}
        style={{marginTop:100,}}
        duration={800}

     />
   {/*   ):(
       <ActivityIndicator size='large'/>
     )}
      */}
    <View style={{marginTop:40,backgroundColor:'white',flex:1,marginLeft:10,borderRadius:30}}>
      
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

source={require('../img/Client.png')}
                    />
           </Animated.View>
     
<View style={{height:720,padding:20,}}>

{/* {this.state.fontLoaded?(
 */}    
<TextAnimator
        content="️️️Modifier fiche fournisseur" 
        textStyle={[globalStyles.textStyle,{color:'#ffe268',fontSize:25}]}
        style={{marginTop:100,}}
        duration={800}
/>
<View style={{marginTop:40,backgroundColor:'white',flex:1,marginLeft:10,borderRadius:30}}>

            <View style={[globalStyles.H,{marginLeft:30,marginTop:20}]}>
                <Image
                      style={globalStyles.icon}
                      source={require('../img/card.png')}
                />
                <Text style={[globalStyles.sousTitre1,{color:'#ff8303'}]}>Numéro Cin:</Text>
            </View>
             
              <TextInput 
                  label='Cin'
                  editable={false}
                  value={this.props.route.params.item.Cin}
                  keyboardType='numeric'
                  onChangeText={this.onCinHandler}
                  style={[globalStyles.sousTitre1,{marginTop:0,marginLeft:54,color:'#31326f'}]}
                  
/>
<View style={{height:1,width:'100%',backgroundColor:'#ccc',marginBottom:5,marginTop:7}}></View>



    <View style={[globalStyles.H,{marginLeft:30,marginTop:10}]}>
                <Image
                      style={globalStyles.icon}
                      source={require('../img/tampon.png')}
                />
           <Text style={[globalStyles.sousTitre1,{color:'#ff8303'}]}>Nom:</Text>

    </View>
    <TextInput
                  value={this.props.route.params.item.Nom}
                  label='Nom'
                  editable={false}
                  onChangeText={this.onNomHandler}
                  style={[globalStyles.sousTitre1,{marginTop:0,marginLeft:54,color:'#31326f'}]}
              />          
              <View style={{height:1,width:'100%',backgroundColor:'#ccc',marginBottom:5,marginTop:7}}></View>

          <View style={[globalStyles.H,{marginLeft:30,marginTop:10}]}>
                <Image
                      style={globalStyles.icon}
                      source={require('../img/placeholder.png')}
                />
                
                <Text style={[globalStyles.sousTitre1,{color:'#ff8303'}]}>Adresse:</Text>
          
          
      </View>
        
               <TextInput
                  defaultValue={this.props.route.params.item.Adresse}
                  label='Adresse'
                  onChangeText={this.onAdresseHandler}
                  style={[globalStyles.sousTitre1,{marginTop:0,marginLeft:54,color:'#31326f',borderBottomWidth:0.7}]}
              />        
          
          <View style={[globalStyles.H,{marginLeft:30,marginTop:10}]}>
                <Image
                      style={globalStyles.icon}
                      source={require('../img/phone.png')}
                />
                <Text style={[globalStyles.sousTitre1,{color:'#ff8303'}]}>Téléphone:</Text>
          </View>
             
                 <TextInput
                  defaultValue={this.props.route.params.item.Telephone}
                  label='Telephone'
                  onChangeText={this.onTelephoneHandler}
                  style={[globalStyles.sousTitre1,{marginTop:0,marginLeft:54,color:'#31326f',borderBottomWidth:0.7}]}
                  keyboardType='numeric'
                  />             
       

      <View style={[globalStyles.H,{marginLeft:30,marginTop:10}]}>
                <Image
                      style={globalStyles.icon}
                      source={require('../img/gmail.png')}
                />
        <Text style={[globalStyles.sousTitre1,{color:'#ff8303'}]}>Email:</Text>
       </View>
                 <TextInput
                  defaultValue={this.props.route.params.item.Email}
                  label='Email'
                  onChangeText={this.onEmailHandler}
                  style={[globalStyles.sousTitre1,{marginTop:0,marginLeft:54,color:'#31326f',borderBottomWidth:0.7}]}
                  keyboardType='email-address'
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



{/* 
----------------------Fin Model-------------------------------
---------------------Début DétailClient ---------------------- */}


              <View style={[globalStyles.H,{marginLeft:30,marginTop:10}]}>
                <Image
                      style={globalStyles.icon}
                      source={require('../img/card.png')}
                />
                <Text style={[globalStyles.sousTitre1,{color:'#ff8303'}]}>Numéro Cin:</Text>
              </View>
              <Text style={[globalStyles.sousTitre1,{marginTop:0,marginLeft:54,color:'#31326f'}]}> {this.props.route.params.item.Cin.toString()} </Text>
<View style={{height:1,width:'100%',backgroundColor:'#ccc',marginBottom:5,marginTop:7}}></View>
<View style={[globalStyles.H,{marginLeft:30}]}>
                <Image
                      style={globalStyles.icon}
                      source={require('../img/tampon.png')}
                />
                <Text style={[globalStyles.sousTitre1,{color:'#ff8303'}]}>Nom:</Text>
              </View>
              <Text style={[globalStyles.sousTitre1,{marginTop:0,marginLeft:54,color:'#31326f'}]}> {this.props.route.params.item.Nom} </Text>
              <View style={{height:1,width:'100%',backgroundColor:'#ccc',marginBottom:5,marginTop:7}}></View>
<View style={[globalStyles.H,{marginLeft:30}]}>
                <Image
                      style={globalStyles.icon}
                      source={require('../img/placeholder.png')}
                />
                <Text style={[globalStyles.sousTitre1,{color:'#ff8303'}]}>Adresse:</Text>
              </View>
              <Text style={[globalStyles.sousTitre1,{marginTop:0,marginLeft:54,color:'#31326f'}]}> {this.props.route.params.item.Adresse} </Text>
              <View style={{height:1,width:'100%',backgroundColor:'#ccc',marginBottom:5,marginTop:7}}></View>
<View style={[globalStyles.H,{marginLeft:30}]}>
                <Image
                      style={globalStyles.icon}
                      source={require('../img/phone.png')}
                />
                <Text style={[globalStyles.sousTitre1,{color:'#ff8303'}]}>Téléphone:</Text>
              </View>
              <Text style={[globalStyles.sousTitre1,{marginTop:0,marginLeft:54,color:'#31326f'}]}> {this.props.route.params.item.Telephone.toString()} </Text>
              <View style={{height:1,width:'100%',backgroundColor:'#ccc',marginBottom:5,marginTop:7}}></View>
<View style={[globalStyles.H,{marginLeft:30}]}>
                <Image
                      style={globalStyles.icon}
                      source={require('../img/gmail.png')}
                />
                <Text style={[globalStyles.sousTitre1,{color:'#ff8303'}]}>Email:</Text>
              </View>
              <Text style={[globalStyles.sousTitre1,{marginTop:0,marginLeft:54,color:'#31326f'}]}> {this.props.route.params.item.Email} </Text>
    

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
</View>


            </ImageBackground>
         

{/*              <Text>
{this.props.route.params.item.Designation} 
{this.props.route.params.item.Categorie} 
{this.props.route.params.item.PrixAchat} 
{this.props.route.params.item.PrixVente} 
{this.props.route.params.item.MaxRemise} 
{this.props.route.params.item.QuantitéArticle} 
{this.props.route.params.item.QuantitéAlerte} 
{this.props.route.params.item.Id_fournisseur} 

</Text> */}
</ScrollView>

     )
 }
 
}

    export default DétailFournisseur;