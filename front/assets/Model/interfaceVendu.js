import * as React from 'react';
import ModalDropdown from 'react-native-modal-dropdown'
import {View,Text,Image,StatusBar,FlatList,Modal,TouchableOpacity,StyleSheet,Dimensions, ScrollView,  AppRegistry,
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
class interfaceVendu extends React.Component {
    constructor(props) {
        super(props);
        this.state={
        total:0,
        nom:'',
            dataSource: [],
          
        
        }}
    componentWillUnmount ()
    {
        if (this._confettiView)
        {
            this._confettiView.stopConfetti();
        }
    }
   
componentDidMount(){
if(this._confettiView) {
    this._confettiView.startConfetti();
 }

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

var  j=responseJson[0].totalSortie
var k=responseJson[0].Designation
for (var i=0; i <responseJson.length; i++){
if(j<responseJson[i].totalSortie){
j=responseJson[i].totalSortie
k=responseJson[i].Designation
this.setState({total:j,nom:k})

}

}


}
)
.catch(error => { console.error(error);
});
}
render(){
    return(


<View style={{alignItems:'center',backgroundColor:'#a7bbc7',flex:1}}>
<Text style={{marginTop:80,fontSize:30,fontWeight:'bold',color:'#04009a'}}>Article du mois</Text>

<Confetti ref={(node) => this._confettiView = node}/>

                <Image
                                style={{width:140,height:140,marginTop:20}}
                                source={require('../img/trophee.png')}
                                />

                                <Text style={{fontSize:27,marginTop:30,color:'#0C4767',fontWeight:'bold'}}>Designation:</Text>
                                <Text style={{fontSize:30,fontWeight:'bold',color:'#B43E8F',marginTop:15,borderBottomWidth:2,borderBottomColor:'#F85E00'}}>{this.state.nom}</Text>
                                <Text style={{fontSize:27,marginTop:20,color:'#0C4767',fontWeight:'bold'}}>Quantité vendue:</Text>
                                <Text style={{fontSize:30,fontWeight:'bold',color:'#B43E8F',marginTop:15,borderBottomWidth:2,borderBottomColor:'#F85E00'}}>{this.state.total}</Text>



 </View>
                


    )}}

    export default interfaceVendu;