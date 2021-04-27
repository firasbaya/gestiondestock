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



class listEntre extends React.Component{
  
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
    'DétailEntré',
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
uri:'data:image/png;base64,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'                }}
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

await fetch ('http://192.168.1.2:8080/api/entres',{
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
    export default listEntre;
