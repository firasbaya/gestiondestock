import * as React from 'react';
import {
  StyleSheet,

  Image,
  View,
  TouchableOpacity,
  Text,
  ImageBackground,
  ActivityIndicator,
  Modal,
  Pressable,
  Button,
  TextInput,
  Alert,
  Input,
  FlatList,
  Linking
} from 'react-native'
//import * as Font from 'expo-font';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
    Avatar,
  }from 'react-native-paper';
  import { SearchBar } from 'react-native-elements';
  import globalStyles from '../Model/globalStyles';
  
  

 class Sortie extends React.Component{
    constructor() {
        super();
        this.state = {
Designation:'',
    search:'',
            /* data: [],
            refreshing: true, */
            dataSource: [],
    isLoading:true,
    modalVisible: false,

        }
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
      
      async componentDidMount() {

       await fetch ('http://192.168.1.9:8080/api/articles',{
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
        const { modalVisible } = this.state;
        const { modalAjoutVisible } = this.state;
       
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
{/* <Modal
   animationType="slide"
   visible={modalAjoutVisible}

   onRequestClose={() => {
     this.setModalAjoutVisible(!modalAjoutVisible);
   }}>
<Text>Designation
</Text>
</Modal> */}


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
        placeholder="Tapez ici..."
        onChangeText={search => { this.setState({ search }) }}
        value={this.state.search}
        style={styles.search}
        round="default"
        lightTheme="default"
      />
       <FlatList
            data={this.state.dataSource}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => index}
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