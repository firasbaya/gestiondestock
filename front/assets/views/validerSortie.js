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

} from 'react-native'
//import * as Font from 'expo-font';
import { ScrollView } from 'react-native-gesture-handler';
import { globalStyles } from '../Model/globalStyles';
import TextAnimator from '../Model/TextAnimator';


class validerSortie extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      Designation:'',
      QuantiteArticle:'',
      dataSource : [],
    };

this.Submit=this.Submit.bind(this);
this.onDesginationHandler= (Designation) => this.setState({Designation});
this.onQuantiteArticleHandler= (QuantiteArticle) => this.setState({QuantiteArticle});
}
componentDidMount()
{  
  this.getData()
}
getData = async () => {
  const _id=this.props.route.params.item._id;
const apiUrl='http://192.168.1.2:8080/api/articles';
await fetch(apiUrl + "/" + _id, {
method:'get',
mode:'no-cors',
headers:{
  'Accept':'application/json',
  'Content-Type':'application/json'
}

})
.then((response) => response.json())
.then((responseJson) => {
  this.setState({
    dataSource:responseJson
  })
})
.catch((error) =>{
  console.log(error)
})

}
Submit (){
  const  objet={   
  Designation:this.state.Designation,
  QuantiteArticle:this.state.QuantiteArticle,
}
Alert.alert(
"",
"La quantité de l'article" + " " + this.state.dataSource.Designation + " " + 'a bien été extrait.' ,
[
  
  { text: "OK", onPress: () => console.log("OK Pressed") }
]
);
const _id=this.props.route.params.item._id;
const apiUrl='http://192.168.1.2:8080/api/articles';
fetch(apiUrl + "/" + _id, {
method:'put',
mode:'no-cors',
headers:{
  'Accept':'application/json',
  'Content-Type':'application/json'
},
body:JSON.stringify({
  QuantiteArticle: (this.state.dataSource.QuantiteArticle)- Number(objet.QuantiteArticle)
})
})
this.getData();

}
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
        onPress={()=>this.Submit()}>
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