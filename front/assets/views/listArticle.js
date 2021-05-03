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

class listArticle extends React.Component{
  
  constructor() {
    super();
    this.delayValue = 8000;
    this.state = {
      isLoading:true,

      animatedValue: new Animated.Value(0),
search:'',
        refreshing: true,
        dataSource: [],
isLoading:true
    }
    this.arrayholder=[]
}
 //this.props.navigation.navigate('DetailScreen', {item: item})



    onPresino(item){
      this.props.navigation.navigate(
        'Détail Article',
        {item},
    );

   
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

  displayData(){
    return  fetch('http://192.168.1.10:8080/api/articles')
    .then((response )=> response.json())
    .then(responseJson => {
   this.setState({
   dataSource: responseJson,
   isLoading: false,
    },
    function() {
      this.arrayholder = responseJson;
      }
      );
    
    }
      )
      .catch(error => { console.error(error);
      });
  }

  componentDidUpdate()
  {
    this.displayData()
  }
 componentDidMount() {
   this.getData();
  Animated.spring(this.state.animatedValue, {
    toValue: 1,
    tension: 20,
    useNativeDriver: true
  }).start();
  this.displayData()
  }




    search = text => { console.log(text);
    };
    clear = () => { this.search.clear();
    };
    SearchFilterFunction(text) {
      const newData = this.arrayholder.filter(function(item) { const itemData = item.Designation ? item.Designation.toUpperCase() :
      ''.toUpperCase();
      const textData = text.toUpperCase(); return itemData.indexOf(textData) > -1;
      });
      this.setState({ dataSource: newData, search: text,
      });
      }


      getData = async () => {
    const apiUrl='http://192.168.1.10:8080/api/articles';
     await fetch(apiUrl,{
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
  
  render(){

    return (

<View style={styles.container}>

<SearchBar 
round="default"
lightTheme="default"
searchIcon={{ size: 25 }}
onChangeText={text => this.SearchFilterFunction(text)} onClear={text => this.SearchFilterFunction('')} placeholder="Tapez ici pour chercher..." value={this.state.search}
/>
      
       <FlatList
            data={this.state.dataSource}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={this.renderSeparator}
            enableEmptySections={true} style={{ marginTop: 11 }}

            
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
    export default listArticle;