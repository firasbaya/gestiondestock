import * as React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  ImageBackground,
  Modal,
  ActivityIndicator,
  FlatList,
} from 'react-native'
//import * as Font from 'expo-font';
import { ScrollView } from 'react-native-gesture-handler';
import {Avatar}from 'react-native-paper';
  import { SearchBar } from 'react-native-elements';
  
  

 class Sortie extends React.Component{
    constructor() {
        super();
        this.state = {
Designation:'',
    search:'',
            refreshing: true, 
            dataSource: [],
    isLoading:true,
    modalVisible: false,

        }
        this.arrayholder=[]
    }
    hideModal = () => this.setState({ isModalVisible: false });

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
      }
      setModalAjoutVisible = (visible) => {
        this.setState({modalAjoutVisible: visible });
      }
      onPresino(item){
        this.props.navigation.navigate(
          'validerSortie',
          {item},
      );
      { this.setState({ modalVisible : false})}
  
     
  }
    
      renderItem = ({item}) => {
        const { modalAjoutVisible } = this.state;

        return(
      
        <View style={{flex:1}}>
        <TouchableOpacity
                        onPress={() => this.onPresino(item)}>
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
      renderSeparator =() => {
        return(
          <View
          style={{height:1,width:'100%',backgroundColor:'#ccc'}}>
      
          </View>
        )
      }
      
      componentDidMount() {
        return fetch('http://192.168.1.10:8080/api/articles')
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
          })
          .catch(error => { console.error(error);
          });
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
        const { modalVisible } = this.state;
        
       
        return(
            
     <ImageBackground  
     
style={{ width: '100%',
height: '100%',

flex: 1 }}
blurRadius={180}
                 resizeMode='cover' 
                 source={{
                   
                  
uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdh2upZ-YCfJQlNJaHuHl5We7fTUycxCOS9w&usqp=CAU'  }}>


     
<View style={{height:1000,padding:20,}}>


            <View style={{marginTop:200,borderRadius:30}}>
  
  <View style={styles.H}>

  <Text style={[styles.sousTitre1,{fontSize:25,marginLeft:0}]}>Choisissez l'article sortant</Text>
    </View>
    <View style={styles.H}>
    <View style={styles.E}>
            
            <TouchableOpacity 
                        onPress={() => this.setModalVisible(!modalVisible)}>

              <Text style={{textAlign:'center',fontSize:17,fontWeight:'bold',backgroundColor:'#ff8882'}}>Liste des articles</Text>
            
            </TouchableOpacity>
    </View>
  </View>
  </View>


</View>


<ScrollView>
<Modal
    animationType="slide"
    visible={modalVisible}
    
    onRequestClose={() => {
      this.setModalVisible(!modalVisible);
    }}
  >

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
          />

</View>

      </Modal>
      </ScrollView>

</ImageBackground>
    
        )
    }
}
const styles=StyleSheet.create({
    container: {
      height: 300,
      flex:1,

      backgroundColor: '#FFF',
      borderRadius: 6,
    },
    sousTitre1:{
        fontWeight:'bold',
        fontSize:20,
        marginLeft:7,
        marginTop:5,
        color:'white'
    },
    H:{
        flexDirection:'row',justifyContent:'center',
        marginLeft:15,marginTop:38
    }, 
    E:{
        marginLeft:10,
        marginBottom:10,
        backgroundColor:'white',
        borderWidth:2,
        borderRadius:20,
        marginRight:10,
        borderColor:'white',
        padding:10,
        width:160,backgroundColor:'#ff8882',borderColor:'#ff8882'
       },
    
                   
});
export default Sortie;