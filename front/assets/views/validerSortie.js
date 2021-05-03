import * as React from 'react';
import {
  Image,
  View,
  TouchableOpacity,
  Text,
  ImageBackground,
  Animated,
  TextInput,
  Alert,
  Modal
} from 'react-native'
//import * as Font from 'expo-font';
import { ScrollView } from 'react-native-gesture-handler';
import { globalStyles } from '../Model/globalStyles';
import TextAnimator from '../Model/TextAnimator';
import * as SMS from 'expo-sms';
import email from 'react-native-email';
/* import AsyncStorage from '@react-native-async-storage/async-storage';
 */
class validerSortie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Designation: '',
      PrixVente:'',
      modalVisible:false,
      QuantiteArticle: '',
      dataSource: [],
      Cin:'',
    };
   
    this.Submit = this.Submit.bind(this);
    this.onQuantiteArticleHandler = (QuantiteArticle) => this.setState({ QuantiteArticle });
    this.onCinHandler = (Cin) => this.setState({ Cin });

  }
  
  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }
  
  async componentDidMount() {
    this.getData()
    
    
  }
  getData = async () => {
    const _id = this.props.route.params.item._id;
    const apiUrl = 'http://192.168.1.10:8080/api/articles';
    await fetch(apiUrl + "/" + _id, {
      method: 'get',
      mode: 'no-cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }

    })
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          dataSource: responseJson
        })
      })
      .catch((error) => {
        console.log(error)
      })

  }
  
  Submit = async () => {
    
/*     const storeData = async () => {
      try {
        this.setState({token:'abc123'})
        await AsyncStorage.setItem('nom article', this.state.Designation)
        await AsyncStorage.setItem('cin client', this.state.Cin)
        await AsyncStorage.setItem('quantité', this.state.QuantiteArticle)
     //await AsyncStorage.multiSet([['nom article',this.state.Designation],['token','abc123]])
      } catch (e) {
        // saving error
        console.log(err)
      }
    }

    const getDataStored = async ()=>{
      try{
        const value=await AsyncStorage.getItem('token')
        const value=await AsyncStorage.getItem('nom article')
        const value=await AsyncStorage.getItem('cin client')
        const value=await AsyncStorage.getItem('quantite ')
if(value!==null){
  this.setState({token:value})
//value previously stored
}
if(Designation!== null){
  this.setState({Designation})
  //value previously stored

}

}catch(e){

}

      } */
    


  
    const { modalVisible } = this.state;
 

    const objet = {
      Designation: this.state.Designation,
      QuantiteArticle: this.state.QuantiteArticle,
    }
  
    if (this.state.QuantiteArticle === "") {
      Alert.alert
        ("Erreur", "Entrez la quantité d'article.")
      this.setState({ QuantiteArticle: "Entrez la quantité d'article." })
    }
    else if (this.state.QuantiteArticle <= 0) {
      Alert.alert
        ("Erreur", "La quantité d'article doit etre supérieur à 0.")
      this.setState({ QuantiteArticle: "La quantité d'article doit etre supérieur à 0." })
    }
     if (this.state.dataSource.QuantiteArticle<=0) {
      Alert.alert
       ("Erreur", "Stock épuisé.")
       this.setState({ QuantiteArticle: "Stock épuisé." })
     }
     if(objet.QuantiteArticle>this.state.dataSource.QuantiteArticle) {
     Alert.alert
     ("Erreur", "Stock épuisé.")
     this.setState({ QuantiteArticle: "Stock épuisé." })
   }
    else {
      console.log(this.state.dataSource.QuantiteArticle);

      const _id = this.props.route.params.item._id;
      const apiUrl = 'http://192.168.1.10:8080/api/articles';
      await fetch(apiUrl + "/" + _id, {
        method: 'put',
        mode: 'no-cors',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          QuantiteArticle: (this.state.dataSource.QuantiteArticle) - Number(objet.QuantiteArticle)
        },

          Alert.alert(
            "",
            "La quantité de l'article" + " " + this.state.dataSource.Designation + " " + 'a bien été extrait. '+ "\n"+ "\n"+
            "Voulez-vous effectuer une facture?"+ "\n",
            
            [

     /*        { text: "Oui", onPress: (item)=> {
              this.props.navigation.navigate(
              'Devis', {item},
                );}}, */
             { text: "Oui", onPress: ()=> {
          this.setModalVisible(!modalVisible);}},
        
                 


        
            {text: 'Non',onPress: () => {this.props.navigation.navigate('Sortie')} }  ],
          )
        )
      })
      this.getData();
    }
  }


  handleEmail = () => {
    const Prixtotale=(this.state.QuantiteArticle*this.state.dataSource.PrixVente)
    const to = ['Client1@gmail.com',] // string or array of email addresses
    email(to, {
        // Optional additional arguments
        subject: 'Facture',
        body:                    
        "<b>Article:</b>"+"<br>"+this.props.route.params.item.Designation +"<hr>" +" <br>"+"<b>Quantité:</b>"+"<br>"+this.state.QuantiteArticle+"<hr>"+ "<br>"+ "<b>Prix unité:</b>"+"<br>" +this.state.dataSource.PrixVente +"<hr>"+"<br>"+
        "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp  <b>Prix totale:</b>"+"<br>"
+"&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp&nbsp"+Prixtotale
      }).catch(console.error)
}


SMS=async () => {
  const Prixtotale=(this.state.QuantiteArticle*this.state.dataSource.PrixVente)
  const msg="Facture:"+"\n" +"\n" +"Article:" +this.props.route.params.item.Designation +"\n" + "Quantité:"+this.state.QuantiteArticle +"\n"+"Prix Unité:"+this.state.dataSource.PrixVente+"\n"+"Prix totale:"+Prixtotale

  const status = await SMS.sendSMSAsync(
 "53570050",
 msg
      );
  console.log(status);
};


  render() {
    const { modalVisible } = this.state;
 
    const position = new Animated.ValueXY({ x: 0, y: 0 })
    Animated.timing(position, {
      toValue: { x: 140, y: 60 },
      duration: 2400,
      useNativeDriver: true
    }).start()
    return (
      <ScrollView>
        <ImageBackground
          style={{
            width: '100%',
            height: '100%',

            flex: 1
          }}
          blurRadius={180}
          resizeMode='cover'
          source={{


            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdh2upZ-YCfJQlNJaHuHl5We7fTUycxCOS9w&usqp=CAU'
          }}>
          <Animated.View style={{
            height: 80,
            width: 80,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 15,
            transform: [
              { translateX: position.x },
              { translateY: position.y }
            ]
          }}>

            <Image

              style={{ width: 150, height: 150, borderRadius: 50 }}

              source={require('../img/soldout.png')}
            />
          </Animated.View>

          <View style={{ height: 520, padding: 20, }}>

            <TextAnimator
              content="️️️Sortie de marchandises"
              textStyle={[globalStyles.textStyle, { color: '#ffe268', fontSize: 26, }]}
              style={{ marginTop: 90, }}
              duration={800}

            />
            <View style={{ marginTop: 30, backgroundColor: 'white', flex: 1, marginLeft: 10, borderRadius: 30 }}>
              <View style={[globalStyles.H, { marginLeft: 30, marginTop: 5 }]}>
                <Image
                  style={globalStyles.icon}
                  source={require('../img/tampon.png')}
                />
                <Text style={[globalStyles.sousTitre1, { color: '#ff8303' }]}>Désignation:</Text>
              </View>
              <Text style={[globalStyles.sousTitre1, { marginTop: 0, marginLeft: 54, color: '#31326f', marginBottom: 10 }]}> {this.props.route.params.item.Designation} </Text>
              <View style={{ height: 1, width: '100%', backgroundColor: '#ccc', marginBottom: 5, }}></View>


              <View style={[globalStyles.H, { marginLeft: 30 }]}>
                <Image
                  style={globalStyles.icon}
                  source={require('../img/lalaw.png')}
                />
                <Text style={[globalStyles.sousTitre1, { color: '#ff8303' }]}>Quantité d'article:</Text>
              </View>

              <TextInput
                label='Quantité article'
                keyboardType='numeric'
                onChangeText={this.onQuantiteArticleHandler}
                style={[globalStyles.sousTitre1, { marginTop: 0, marginLeft: 54, color: 'black', borderBottomWidth: 0.7 }]}
              />


              <View style={[globalStyles.H, { marginLeft: 30, marginTop: 10 }]}>
                <Image
                  style={globalStyles.icon}
                  source={require('../img/card.png')}
                />
                <Text style={[globalStyles.sousTitre1, { color: '#ff8303' }]}>CIN Client:</Text>

              </View>
              <TextInput
                defaultValue={this.props.route.params.item.Cin}
                label='Cin'
                onChangeText={this.onCinHandler}
                style={[globalStyles.sousTitre1, { marginTop: 0, marginLeft: 54, color: 'black', borderBottomWidth: 0.7 }]}
                keyboardType='numeric'
              />
            </View>


            <View style={[globalStyles.H, { justifyContent: 'center', marginTop: 20, marginBottom: 10 }]}>
              <View style={[globalStyles.E, { width: 140, backgroundColor: '#ffe268', borderColor: '#ffe268' }]}>

                <TouchableOpacity
                  onPress={() => this.Submit()}>
                  <Text style={{ textAlign: 'center', fontSize: 17, fontWeight: 'bold', }}>Extraire</Text>
                </TouchableOpacity>
              </View>


              <Modal
    animationType="slide"
    visible={modalVisible}
    onRequestClose={() => {
      this.setModalVisible(!modalVisible);
    }} 
  >

    <ImageBackground  
style={{ width: '100%',
height: '100%',

flex: 1 }}
blurRadius={180}
                 resizeMode='cover' 
                 source={{
                   
                  
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdh2upZ-YCfJQlNJaHuHl5We7fTUycxCOS9w&usqp=CAU'}}>                  
    <View style={{alignItems:'flex-end'}}>
                  <TouchableOpacity
                   onPress={() => this.setModalVisible(!modalVisible)}
                  >
                  <Image
                      style={{margin:20,height:50,width:50}}
                      source={require('../img/exitrouge.png')}
                />
                </TouchableOpacity>
                </View>
                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text style={[globalStyles.sousTitre1,{fontSize:20,marginLeft:0,fontWeight:'bold',color:'white'}]}>Envoyer la facture par :</Text>

                <View style={[globalStyles.E,{width:140,backgroundColor:'#ffe268',borderColor:'#ffe268',marginTop:20}]}>
                <TouchableOpacity
                        onPress={this.handleEmail}>
                <Text style={{textAlign:'center',fontSize:17,fontWeight:'bold',}}>E-mail</Text>
                        </TouchableOpacity>
                        </View>
                        <Text style={[globalStyles.sousTitre1,{fontSize:20,marginLeft:0,fontWeight:'bold',color:'white'}]}>Ou bien par:</Text>
                        <View style={[globalStyles.E,{width:140,backgroundColor:'#ffe268',borderColor:'#ffe268',marginTop:20}]}>
                <TouchableOpacity
                        onPress={this.SMS}>
                <Text style={{textAlign:'center',fontSize:17,fontWeight:'bold',}}>SMS</Text>
                        </TouchableOpacity>
                        </View>
                        </View>
    </ImageBackground>

      </Modal>
            </View>
   </View>

        </ImageBackground>
      </ScrollView>
    )
  }
}

export default validerSortie;