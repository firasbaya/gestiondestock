import * as React from 'react';
import ModalDropdown from 'react-native-modal-dropdown'
import {View,Text,Image,FlatList,Modal,TouchableOpacity,StyleSheet,Dimensions, ScrollView,  AppRegistry,
} from 'react-native'
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
      import Confetti from 'react-native-confetti';

class statistiqueClient extends React.Component{
    constructor(props) {
        super(props);
        this.state={
     
            dataSource: [],
         

        }
    
    this.arrayholder=[]

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

    

    

        render() {
            
            return (
                
                <View style={{flex:1,backgroundColor:'#a7bbc7'}}>

                <View style={{flexDirection:'column',alignItems: 'center'}}>
                <TouchableOpacity   onPress={() => this.props.navigation.navigate('interfaceSortie')}>

                <View style={{marginTop:100,backgroundColor:'#062355',width:250,height:130,alignItems: 'center',marginLeft:10,borderRadius:20}}>
                <Image
                                style={{width:50,height:50,marginTop:15}}
                                  source={require('../img/soldout.png')}
                                />
                          <Text style={{color:'white',marginTop:20,fontSize:17,fontWeight:'bold'}}>Quantité sortante par article</Text>   
                                
                </View>
                </TouchableOpacity>

                <TouchableOpacity   onPress={() => this.props.navigation.navigate('interfaceEntre')}>

                <View style={{marginTop:20,backgroundColor:'#062355',width:250,height:130,alignItems: 'center',marginLeft:10,borderRadius:20}}>
                <Image
                                style={{width:50,height:50,marginTop:15}}
                                  source={require('../img/instock.png')}
                                />
                        <Text style={{color:'white',marginTop:20,fontSize:17,fontWeight:'bold'}}>Quantité entrante par article</Text>   
                                
                </View>
                </TouchableOpacity>

                <TouchableOpacity   onPress={() => this.props.navigation.navigate('interfaceVendu')}>
                <View style={{marginTop:20,backgroundColor:'#062355',width:250,height:130,alignItems: 'center',marginLeft:10,borderRadius:20}}>
                <Image
                                style={{width:40,height:40,marginTop:15}}
                                source={require('../img/trophee.png')}
                                />
                           <Text style={{color:'white',marginTop:20,fontSize:17,fontWeight:'bold'}}>L'article le plus vendu ce mois</Text>   
                                
                </View>
                </TouchableOpacity>

                </View>
                
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
    export default statistiqueClient;