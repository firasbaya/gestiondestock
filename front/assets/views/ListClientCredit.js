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
  ScrollView,
  Container,
} from 'react-native'
import {globalStyles} from '../Model/globalStyles';
import {Avatar,}from 'react-native-paper';
import { SearchBar } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
//import Table from 'react-native-simple-table'


const columns = [
  {
    title: 'Mobile',
    dataIndex: 'mobile',
    width: 105
  },
  {
    title: 'Name',
    dataIndex: 'name',
    width: 140
  },
  {
    title: 'Age',
    dataIndex: 'age'
  },
  {
    title: 'Sex',
    dataIndex: 'sex'
  },
];
class listClientCredit extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {
      PrixVente:'',
      
      dataSource:[],
      tableHead: ['Designation', 'Prix Vente', 'Prix Achat', 'Marge'],
      tableData: [
        [ '2', '3', '4','3'],
        ['a', 'b', 'c', 'd'],
        ['1', '2', '3', '456\n789'],
        ['a', 'b', 'c', 'd']
      ] 
    }
  }
  renderCell(){
        }
  componentDidMount(){
    const apiUrl='http://192.168.1.10:8080/api/articles';
      fetch(apiUrl,{
      method:'get',
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
      }
      
      
      )
      .catch((error) =>{
        console.log(error)
      })
  
    }
   
  render() {
 const dataSource=this.state.dataSource
 var list=list;
 return(

      list = dataSource.map(item => {
        return (
          <View style={{marginTop:20}}>
          <View style={{ flexDirection: 'row'}}>
            <View style={{ flex: 1,borderWidth:2}}>
            <Text>{item.Designation}</Text>
            
            </View>
            <View style={{ flex: 1}}>
        
          <Text>{item.PrixVente}</Text>
        
      </View>
          
         
          </View>
          </View>
        );
              }))
 
  /*  <View style={styles.container}>
   <Text style={styles.title}>react-native-simple-table{this.state.dataSource.Designation}</Text>
   <Table height={320} columnWidth={60} columns={columns} dataSource={this.state.tableData} />
 </View> */
  
  
  }
}
 
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 }
});
    export default listClientCredit;
