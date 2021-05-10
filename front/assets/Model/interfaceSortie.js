import * as React from 'react';
import ModalDropdown from 'react-native-modal-dropdown'
import {View,Text,Image,FlatList,Modal,TouchableOpacity,StyleSheet,Dimensions, ScrollView} from 'react-native'
import { globalStyles } from './globalStyles';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart,
    } from 'react-native-chart-kit';
    import { SearchBar } from 'react-native-elements';
    import {
        Avatar,
      }from 'react-native-paper';
class interfaceSortie extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            dataSource: [],
            modalVisibleSortie: false,
            modalVisibleEntre:false,
            modalVisibleTop:false

        }
    
    this.arrayholder=[]

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
      componentDidMount(){
        return  fetch('http://192.168.1.10:8080/api/articles')
        .then((response )=> response.json())
        .then(responseJson => {
       this.setState({
       dataSource: responseJson,
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
    renderItemEntre = ({item}) => {
      
        return(
        
        <View style={{flex:1}}>
        <View style={{flexDirection:'row',padding:10}}> 
        <Avatar.Image
                        source={{
      uri:'https://i.ibb.co/xDJ6XBd/Articleimage.jpg'                  }}
                        size={50}
                        />
        <Text style={{marginVertical:10,marginLeft:20,letterSpacing:1.7,fontWeight:'bold',fontSize:20,marginLeft:8}}>{item.Designation}</Text> 
        <View style={{flex:1,alignItems:'flex-end'}}>            

        <Text style={{marginVertical:10,marginLeft:20,letterSpacing:1.7,fontWeight:'bold',fontSize:20,marginLeft:8}}>{item.totalSortie}</Text>
      </View>
        </View>
          </View>
         
          )
        }
render(){

    
    return(

    
<View style={styles.container}>

<SearchBar 
round="default"
lightTheme="default"
searchIcon={{ size: 25 }}
onChangeText={text => this.SearchFilterFunction(text)} onClear={text => this.SearchFilterFunction('')} placeholder="Tapez ici pour chercher..." value={this.state.search}
/>

<FlatList
    data={this.state.dataSource.sort(function(a, b){return b.totalSortie- a.totalSortie})}
    
    renderItem={this.renderItemEntre}
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
export default interfaceSortie;