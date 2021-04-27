import * as React from 'react';
import {
  FlatList,
  View,
  TouchableOpacity,
  Text,
  Animated
} from 'react-native'
import {globalStyles} from '../Model/globalStyles';
import {Avatar}from 'react-native-paper';
import { SearchBar } from 'react-native-elements';



class listSortie extends React.Component{
  
  constructor() {
    super();
    this.delayValue = 8000;
    this.state = {
      
      animatedValue: new Animated.Value(0),
        refreshing: true, 
        dataSource: [],
isLoading:true,

    }
}
onPresino(item){
 
  this.props.navigation.navigate(
    'DétailSortie',
    {item}
      )


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
  <View style={{flex:1,marginLeft:0}}>
  <TouchableOpacity
     onPress={()=>this.onPresino(item)}>
    <View style={{flexDirection:'row',padding:10,}}>
 <Avatar.Image
                source={{
uri:'data:image/jpeg;base64,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'                }}
                size={50}
                />
            <Text style={[globalStyles.sousTitre,{marginVertical:10,marginLeft:20}]}>{item.Id_Article}</Text>

            <Text style={[globalStyles.sousTitre,{marginVertical:10,marginLeft:50}]}>{item.Quantité}</Text>
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

await fetch ('http://192.168.1.2:8080/api/sorties',{
  method:'get',
  mode:'no-cors',
  headers:{
  'Accept':'application/json',
  'Content-Type':'application/json'
  }})
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
    const { search } = this.state;
    return (

<View style={{flex:1}}>
<SearchBar
        placeholder="Tapez ici..."
        onChangeText={this.updateSearch}
        value={search}
        style={styles.search}
        round="default"
        lightTheme="default"
      />
      <View style={{marginBottom:10}}></View>
      
       <FlatList
       pagingEnabled
            data={this.state.dataSource}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => index}
            ItemSeparatorComponent={this.renderSeparator}
          />
 
</View>


    )}}
    export default listSortie;
