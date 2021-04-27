import * as React from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  TouchableOpacity,
  Text,
  Animated,
} from 'react-native'
import {
  Avatar,
}from 'react-native-paper';
import { SearchBar } from 'react-native-elements';


class listArticleProduct extends React.Component{
  
  constructor() {
    super();
    this.delayValue = 8000;
    this.state = {
      
      animatedValue: new Animated.Value(0),
search:'',
        refreshing: true,
        dataSource: [],
isLoading:true
    }
}
 //this.props.navigation.navigate('DetailScreen', {item: item})

onPresss = (item) => {
  const Designation = item.Designation;
  const Marque = item.Marque;
  const PrixAchat = item.PrixAchat;
  const PrixVente = item.PrixVente;
  const MaxRemise = item.MaxRemise;
  const QuantiteAlerte = item.QuantiteAlerte;
  const QuantiteArticle = item.QuantiteArticle;
  const Id_fournisseur = item.Id_fournisseur;
   

}

 
renderItem = ({item}) => {
  this.delayValue = this.delayValue + 500;
  const translateX = this.state.animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [this.delayValue,1]
  });
  return(
    <Animated.View
    style={[styles.button, { transform: [{ translateX }] }]}
  >
  <View style={{flex:1}}>
  <TouchableOpacity
     onPress={()=>this.onPresino(item)}>
  <View style={{flexDirection:'row',padding:10}}> 
  <Avatar.Image
                  source={{
uri:'https://i.ibb.co/xDJ6XBd/Articleimage.jpg'                  }}
                  size={50}
                  />
  <Text style={{marginVertical:10,marginLeft:20,letterSpacing:1.7,fontWeight:'bold',fontSize:20,marginLeft:8}}>{item.Designation}</Text> 
   
  </View>
  </TouchableOpacity>
  
  
  
    </View>
    </Animated.View>
    )
  }
renderSeparator =() => {
  return(
    <View
    style={{height:1,width:'100%',backgroundColor:'#ccc'}}>

    </View>
  )
}

async componentDidMount() {
   Animated.spring(this.state.animatedValue, {
    toValue: 1,
    tension: 20,
    useNativeDriver: true
  }).start();
 await fetch ('http://192.168.1.2:8080/api/articles',{
  method:'get',
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
)}

  updateSearch = (search) => {
    this.setState({ search });
  };
  
  render(){
    const{navigate}=this.props.navigation;
    const { data } = this.state;
    const { search } = this.state;
    return (

<View style={styles.container}>

<SearchBar
        placeholder="Tapez ici..."
        onChangeText={search => { this.setState({ search }) }}
        value={this.state.search}
        style={styles.search}
        round="default"
        lightTheme="default"
      />
      
       <FlatList
      pagingEnabled
            data={this.state.dataSource}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => index}
            ItemSeparatorComponent={this.renderSeparator}
            
            
          />

</View>


    )}}

    const styles=StyleSheet.create({
        container: {
          height: 300,
          flex:1,

          backgroundColor: '#FFF',
          borderRadius: 6,
        },
                       
    });
    export default listArticleProduct;