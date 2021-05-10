import * as React from 'react';
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  Image,
  Alert,
  Modal,
  Animated,
  ActivityIndicator,
} from 'react-native'
import {globalStyles} from '../Model/globalStyles';
import {Avatar,}from 'react-native-paper';
import { SearchBar } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';



class listDépenses extends React.Component{
  
  constructor(props) {
    super(props);
    this.delayValue = 8000;

    this.state = {
      search:'', 
      dataSource: [],
x:0,
        Montant:'',
        Titre:'',
isLoading:true,
modalVisible:false,
isFetching: false,


    }
this.arrayholder=[]
  }

  onPresino(item){
 
    this.props.navigation.navigate(
      'supprimerDépense',
      {item}
      
  
    )

    }
   
    ListEmpty = () => {
      //View to set in Footer
      return (
        <View >
          <Text>
              La liste est vide
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
renderItem = ({item}) => {

  
  return(
   
    <View style={{flex:1,}}>
               
    <View style={{flexDirection:'row',padding:10,flex:1}}>
 <Avatar.Image
                source={{
uri:'data:image/png;base64,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'
}}
                size={50}
                />
            <Text style={[globalStyles.sousTitre,{marginVertical:10,marginLeft:10}]}>{item.Titre}</Text>
            <Text style={[globalStyles.sousTitre,{marginVertical:10,marginLeft:40,textAlignVertical:'auto',opacity:0.8,fontWeight:'800'}]}>{item.Montant}</Text>
            <View style={{flex:1,alignItems:'flex-end',marginVertical:10}}>            
            <TouchableOpacity             
            onPress={()=>  this.onPresino(item)}>
   
            
                   <Image
            style={{ marginRight:50}}
    source={require('../img/corbeille.png')}
    />
    </TouchableOpacity>

    </View>

</View>
            
  </View>
  )}
  onRefresh() {
    this.setState({ isFetching: true,x:0 }, 
      function() { this.fetchData() });
  }
fetchData(){

  fetch('http://192.168.1.10:8080/api/depenses',{
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
      for (var i=0; i <responseJson.length; i++){
        var j=responseJson[i].Montant
    
    this.setState({x:this.state.x+j})
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
      const newData = this.arrayholder.filter(function(item) { const itemData = item.Titre ? item.Titre.toUpperCase() :
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
      <View style={{marginBottom:10}}></View>
      
       <FlatList
            data={this.state.dataSource}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => index.toString()}
            enableEmptySections={true} style={{ marginTop: 11 }}
            ItemSeparatorComponent={this.renderSeparator}
            ListEmptyComponent={this.ListEmpty}
            onRefresh={() => this.onRefresh()}
            refreshing={this.state.isFetching}
         
          />
           <Text style={{fontSize:20,fontWeight:'bold',color:'green',marginLeft:10}}>Total : {this.state.x} dt</Text>
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
 
    export default listDépenses;
