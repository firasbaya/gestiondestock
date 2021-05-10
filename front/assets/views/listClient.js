import * as React from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  TouchableOpacity,
  Text,
  Animated,
  ActivityIndicator, Platform,

} from 'react-native'
import {
  Avatar,
}from 'react-native-paper';
import { SearchBar } from 'react-native-elements';

  
class listClient extends React.Component{
  
  constructor(props) {
    super(props);
    this.delayValue = 8000;
    this.state = {
search: '', 
x:0,

        dataSource: [],
isLoading:true
    }
    this.arrayholder = []
}


onPresino(item){
 
  this.props.navigation.navigate(
    'DétailClient',
    {item}
    
  )
  }
  renderItem = ({item}) => {
  
    return(
   
      <View style={{flex:1,marginLeft:25}}>
          <TouchableOpacity
           onPress={()=>this.onPresino(item)}>
        <View style={{flexDirection:'row',padding:10}}> 
        <Avatar.Image
                        source={{
                           uri:'data:image/png;base64,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'
                        }}
                        size={50}
                        />
        <Text style={{marginVertical:10,marginLeft:20,letterSpacing:1.7,fontWeight:'bold',fontSize:20,marginLeft:8}}>{item.Nom}</Text> 
         
        </View>
        </TouchableOpacity>
        
          </View>
    )
                      }
                      ListEmpty = () => {
                        //View to set in Footer
                        return (
                          <View >
                            <Text style={{marginTop:30,fontSize:25,fontWeight:'bold'}}>
Aucun Client ne porte ce nom 
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
  onRefresh() {
    this.setState({ isFetching: true,x:0 }, 
      function() { this.fetchData() });
  }

fetchData(){

  fetch('http://192.168.1.10:8080/api/clients',{
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


  search = text => { console.log(text);
  };
  clear = () => { this.search.clear();
  };
  SearchFilterFunction(text) {
    const newData = this.arrayholder.filter(function(item) { const itemData = item.Nom ? item.Nom.toUpperCase() :
    ''.toUpperCase();
    const textData = text.toUpperCase(); return itemData.indexOf(textData) > -1;
    });
    this.setState({ dataSource: newData, search: text,
    });
    }


    getData = async () => {
  const apiUrl='http://192.168.1.10:8080/api/clients';
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

    if (this.state.isLoading) { return (
      <View style={{ flex: 1, paddingTop: 21 }}>
      <ActivityIndicator />
      </View>
      );
      }
            return(
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
 ItemSeparatorComponent={this.renderSeparator}
 enableEmptySections={true} style={{ marginTop: 11 }}
 keyExtractor={(item, index) => index.toString()}
 ListEmptyComponent={this.ListEmpty}
            onRefresh={() => this.onRefresh()}
            refreshing={this.state.isFetching}
  
          />
          <Text style={{fontSize:20,fontWeight:'bold'}}>Total clients: {this.state.x}</Text>

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
            export default listClient;