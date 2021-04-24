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
  Input,
  Linking
} from 'react-native'
//import * as Font from 'expo-font';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyles } from '../Model/globalStyles';
import TextAnimator from '../Model/TextAnimator';


class validerSortie extends React.Component{
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
    this.onDesginationHandler= (Designation) => this.setState({Designation});
    this.onMarqueHandler= (Marque) => this.setState({Marque});
    this.onId_fournisseurHandler= (Id_fournisseur) => this.setState({Id_fournisseur});
    this.onCategorieHandler= (Categorie)=> this.setState({Categorie});
    this.onPrixAchatHandler= (PrixAchat)=> this.setState({PrixAchat});
    this.onPrixVenteHandler= (PrixVente) => this.setState({PrixVente});
    this.onMaxRemiseHandler= (MaxRemise) => this.setState({MaxRemise});
    this.onQuantiteAlerteHandler= (QuantiteAlerte) => this.setState({QuantiteAlerte});
    this.onQuantiteArticleHandler= (QuantiteArticle) => this.setState({QuantiteArticle});
    }
    Submit (){
      const  objet={   
      Designation:this.state.Designation,
      Marque:this.state.Marque,
      Categorie:this.state.Categorie,
      Id_fournisseur:this.state.Id_fournisseur,
      PrixAchat:this.state.PrixAchat,
      PrixVente:this.state.PrixVente,
      MaxRemise:this.state.MaxRemise,
      QuantiteAlerte:this.state.QuantiteAlerte,
      QuantiteArticle:this.state.QuantiteArticle,
   }
   Alert.alert(
    "",
    "L'article" + " " + objet.Designation + " " + 'a bien été vendu.' ,
    [
      
      { text: "OK", onPress: () => console.log("OK Pressed") }
    ]
  );
       
   fetch('http://192.168.1.10:8080/api/articles',{
    method:'post',
    mode:'no-cors',
    headers:{
      'Accept':'application/json',
      'Content-Type':'application/json'
    },
    body:JSON.stringify({
      Designation:objet.Designation,
      Marque:objet.Marque,
      Categorie:objet.Categorie,
      Id_fournisseur:objet.Id_fournisseur,
      PrixAchat:objet.PrixAchat,
      PrixVente:objet.PrixVente,
      MaxRemise:objet.MaxRemise,
      QuantiteAlerte:objet.QuantiteAlerte,
      QuantiteArticle:objet.QuantiteArticle
    })

  })}
    render(){
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
                   
                  
                    uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdh2upZ-YCfJQlNJaHuHl5We7fTUycxCOS9w&usqp=CAU'  }}>
                    <Animated.View style={{
               height:80,
               width:80,
               alignItems:'center',
               justifyContent:'center',
               marginTop:15,
               transform:[
                    {translateX:position.x},
                    {translateY:position.y}
               ]
           }}>

<Image

style={{width:150,height:150,borderRadius:50}}

source={require('../img/soldout.png')}
                    />
           </Animated.View>
     
<View style={{height:520,padding:20,}}>

{/* {this.state.fontLoaded?(
 */}    
<TextAnimator
        content="️️️Sortie de marchandises" 
        textStyle={[globalStyles.textStyle,{color:'#ffe268',fontSize:26,}]}
        style={{marginTop:90,}}
        duration={800}

     />
     <View style={{marginTop:30,backgroundColor:'white',flex:1,marginLeft:10,borderRadius:30}}>
<View style={[globalStyles.H,{marginLeft:30,marginTop:5}]}>
              <Image
                      style={globalStyles.icon}
                      source={require('../img/tampon.png')}
                />
                <Text style={[globalStyles.sousTitre1,{color:'#ff8303'}]}>Désignation:</Text>
              </View>
              <Text style={[globalStyles.sousTitre1,{marginTop:0,marginLeft:54,color:'#31326f',marginBottom:10}]}> {this.props.route.params.item.Designation} </Text>
<View style={{height:1,width:'100%',backgroundColor:'#ccc',marginBottom:5,}}></View>


<View style={[globalStyles.H,{marginLeft:30}]}>
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
                  style={[globalStyles.sousTitre1,{marginTop:0,marginLeft:54,color:'black',borderBottomWidth:0.7}]}
                />
                
    
                <View style={[globalStyles.H,{marginLeft:30,marginTop:10}]}>
                <Image
                      style={globalStyles.icon}
                      source={require('../img/card.png')}
                />
                <Text style={[globalStyles.sousTitre1,{color:'#ff8303'}]}>CIN Client:</Text>
         
</View>
                 <TextInput
                  defaultValue={this.props.route.params.item.Cin}
                  label='Cin'
                  onChangeText={this.onCinHandler}
                  style={[globalStyles.sousTitre1,{marginTop:0,marginLeft:54,color:'black',borderBottomWidth:0.7}]}
                  keyboardType='numeric'
                  />   
           </View>


          <View style={[globalStyles.H,{justifyContent:'center',marginTop:20,marginBottom:10}]}>
          <View style={[globalStyles.E,{width:140,backgroundColor:'#ffe268',borderColor:'#ffe268'}]}>

<TouchableOpacity
        onPress={this.handleEmail}>
<Text style={{textAlign:'center',fontSize:17,fontWeight:'bold',}}>Extraire</Text>
        </TouchableOpacity>
        </View>
        
</View>
</View>
</ImageBackground>
</ScrollView>
        )
    }
}

export default validerSortie;