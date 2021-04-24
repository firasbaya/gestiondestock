import * as React from 'react';
import {
  StyleSheet,
  FlatList,
  Image,
  View,
  TouchableOpacity,
  Text,
  Animated
} from 'react-native'
import {globalStyles} from '../Model/globalStyles';
import {
  Avatar,

}from 'react-native-paper';
import { SearchBar } from 'react-native-elements';



class listEntre extends React.Component{
  
  constructor() {
    super();
    this.delayValue = 8000;
    this.state = {
      
      animatedValue: new Animated.Value(0),
        /* data: [],
        refreshing: true, */
        dataSource: [],
isLoading:true,

    }
}
onPresino(item){
 
  this.props.navigation.navigate(
    'DétailEntré',
    {item}
    
  /*   {item}, */
  )


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
  <View style={{flex:1,marginLeft:0}}>
  <TouchableOpacity
     onPress={()=>this.onPresino(item)}>
    <View style={{flexDirection:'row',padding:10,}}>
 <Avatar.Image
                source={{
uri:'data:image/png;base64,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'                }}
                size={50}
                />
            <Text style={[globalStyles.sousTitre,{marginVertical:10,marginLeft:20}]}>{item.Id_Article}</Text>

            <Text style={[globalStyles.sousTitre,{marginVertical:10,marginLeft:50}]}>{item.Quantité}</Text>
</View>
</TouchableOpacity>
              {/* <View style={{borderBottomWidth:1,borderBottomColor:'#bbb'}}></View>
              <View style={{flexDirection:'row',padding:10,}}>
              <Avatar.Image
                source={{
                   uri:'data:image/png;base64,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'
                }}
                size={50}
                />
            <Text style={[globalStyles.sousTitre,{marginVertical:10,marginLeft:20,letterSpacing:1.7}]}>Firas Baya</Text>
</View>
             <View style={{borderBottomWidth:0.8,borderBottomColor:'#bbb'}}></View>

             <View style={{flexDirection:'row',padding:10,}}>
             <Avatar.Image
                source={{
                   uri:'data:image/png;base64,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'
                }}
                size={50}
                />
            <Text style={[globalStyles.sousTitre,{marginVertical:10,marginLeft:20,letterSpacing:1.7}]}>Emira Gribaa</Text>
</View>             
      <View style={{borderBottomWidth:0.8,borderBottomColor:'#bbb'}}></View>
              
      <View style={{flexDirection:'row',padding:10,}}>
 <Avatar.Image
                source={{
                   uri:'data:image/jpeg;base64,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'
                }}
                size={50}
                />
            <Text style={[globalStyles.sousTitre,{marginVertical:10,marginLeft:20,letterSpacing:1.7}]}>Emira Gribaa</Text>
</View>
              <View style={{borderBottomWidth:0.8,borderBottomColor:'#bbb'}}></View>
              
              <View style={{flexDirection:'row',padding:10,}}>
 <Avatar.Image
                source={{
                   uri:'data:image/png;base64,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'
                }}
                size={50}
                />
            <Text style={[globalStyles.sousTitre,{marginVertical:10,marginLeft:20,letterSpacing:1.7}]}>Emira Gribaa</Text>
</View>
              <View style={{borderBottomWidth:0.8,borderBottomColor:'#ccc'}}></View>

              <View style={{flexDirection:'row',padding:10,}}>
 <Avatar.Image
                source={{
                   uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI3KJwKcm1OugxSA_CrXXPfqEpPKyE_fIinA&usqp=CAU'
                }}
                size={50}
                />
            <Text style={[globalStyles.sousTitre,{marginVertical:10,marginLeft:20,letterSpacing:1.7}]}>Firas Baya</Text>
</View>
              <View style={{borderBottomWidth:0.8,borderBottomColor:'#ccc'}}></View>

              <View style={{flexDirection:'row',padding:10,}}>
 <Avatar.Image
                source={{
                   uri:'https://image.flaticon.com/icons/png/512/147/147144.png'
                }}
                size={50}
                />
            <Text style={[globalStyles.sousTitre,{marginVertical:10,marginLeft:20,letterSpacing:1.7}]}>Firas Baya</Text>
</View>      
              <View style={{borderBottomWidth:0.8,borderBottomColor:'#ccc'}}></View>
               */}
  </View>
  </Animated.View>
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
  Animated.spring(this.state.animatedValue, {
   toValue: 1,
   tension: 20,
   useNativeDriver: true
 }).start();

fetch ('http://192.168.1.10:8080/api/entres',{
  method:'get',
  mode:'no-cors',
  headers:{
  'Accept':'application/json',
  'Content-Type':'application/json'
  }})
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
    const { search } = this.state;
    return (

<View style={{flex:1}}>
<SearchBar
        placeholder="Tapez ici..."
        onChangeText={this.updateSearch}
        value={search}
        style={styles.search}
        round="default"
        lightTheme="default"
      />
      <View style={{marginBottom:10}}></View>
      
       <FlatList
       pagingEnabled
            data={this.state.dataSource}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => index}
            ItemSeparatorComponent={this.renderSeparator}
          />
 
</View>


    )}}

    const styles=StyleSheet.create({
        container: {
           
        },
      
        
     
       
        
    });
    export default listEntre;
