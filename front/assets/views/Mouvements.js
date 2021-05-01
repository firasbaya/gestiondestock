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
import { MaterialIcons } from '@expo/vector-icons';

class Mouvements extends React.Component{
  
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

  <View style={{flexDirection:'row',padding:10}}> 
  <Avatar.Image
                  source={{
uri:'https://i.ibb.co/xDJ6XBd/Articleimage.jpg'                  }}
                  size={50}
                  />
  <Text style={{marginVertical:10,marginLeft:20,letterSpacing:1.7,fontWeight:'bold',fontSize:20,marginLeft:8}}>{item.Designation}</Text> 
{/*   <Text style={{marginVertical:10,marginLeft:20,letterSpacing:1.7,fontWeight:'bold',fontSize:20,marginLeft:8}}>{item._id}</Text> 
 */}
  </View>
  
  
  
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
 await fetch ('http://192.168.1.10:8080/api/articles',{
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

      
       <FlatList
      pagingEnabled
      
      data={this.state.dataSource.filter((value)=> value.updatedAt  >value.createdAt)}
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
marginTop:60,
          backgroundColor: '#FFF',
          borderRadius: 6,
        },
                       
    });
    export default Mouvements