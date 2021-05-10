import * as React from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  TouchableOpacity,
  Text,
  Animated,
  ActivityIndicator,
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
      x:0,
search:'',
        isFetching: false,
        dataSource: [],
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

  return(
  
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
    )
  }


  onRefresh() {
    this.setState({ isFetching: true,x:0 }, 
      function() { this.fetchData() });
  }
fetchData(){

  fetch('http://192.168.1.10:8080/api/articles',{
    method:'get',
    mode:'no-cors',
    headers:{
    'Accept':'application/json',
    'Content-Type':'application/json'
    }})
   
    .then((response )=> response.json())
    .then(responseJson => {
   this.setState({
   dataSource: responseJson,
   isLoading: false,
   isFetching:false
    },
    function() {
      this.arrayholder = responseJson;
      }
      );
      for (var i=0; i <=responseJson.length; i++){
    
    this.setState({x:i})
      }
    
    }
      )
      .catch(error => { console.error(error);
      });
  
  }

componentDidMount(){
  this.fetchData()
}
 


  ListEmpty = () => {
    //View to set in Footer
    return (
      <View >
                            <Text style={{marginTop:30,fontSize:25,fontWeight:'bold'}}>
        Aucun article ne porte cette designation 
        </Text>
      </View>
    );
  };

renderSeparator =() => {

return(
  <View
  style={{height:1,width:'100%',backgroundColor:'#ccc'}}>

  </View>
)
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


  
  render(){
    if (this.state.isLoading) { return (
      <View style={{ flex: 1, paddingTop: 21 }}>
      <ActivityIndicator />
      </View>
      );
      }
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
            ListEmptyComponent={this.ListEmpty}
            onRefresh={() => this.onRefresh()}
            refreshing={this.state.isFetching}
            
          />
         
<Text style={{fontSize:20,fontWeight:'bold'}}>Total articles: {this.state.x}</Text>
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