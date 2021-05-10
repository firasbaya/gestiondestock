import React from 'react';
import ModalDropdown from 'react-native-modal-dropdown'
import {View,Text,Image,TouchableOpacity} from 'react-native'
import { globalStyles } from './globalStyles';
class statClient extends React.Component{
    constructor(props) {
        super(props);
    
    
    }

    render(){

        return(

<View style={{flex:1,backgroundColor:'#ccc'}}>
    <View style={{flexDirection:'row'}}>
<TouchableOpacity onPress={()=>this.props.navigation.navigate('statistiqueClient')}>
    <View style={{marginTop:100,backgroundColor:'#062355',width:100,height:100,alignItems: 'center',marginLeft:10}}>
    <Image
                    style={{width:30,height:30,marginTop:15}}
                      source={require('../img/static.png')}
                    />
              <Text style={{color:'white',marginTop:20}}>Clients</Text>   
                    
    </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>this.props.navigation.navigate('statistiqueClient')}>

    <View style={{marginTop:100,backgroundColor:'#062355',width:100,height:100,alignItems: 'center',marginLeft:10}}>
    <Image
                    style={{width:30,height:30,marginTop:15}}
                      source={require('../img/static.png')}
                    />
              <Text style={{color:'white',marginTop:20}}>Fournisseurs</Text>   
                    
    </View>
    </TouchableOpacity>

    
    <TouchableOpacity onPress={()=>this.props.navigation.navigate('statistiqueClient')}>

    <View style={{marginTop:100,backgroundColor:'#062355',width:100,height:100,alignItems: 'center',marginLeft:10}}>

    <Image
                    style={{width:30,height:30,marginTop:15}}
                      source={require('../img/static.png')}
                    />
              <Text style={{color:'white',marginTop:20}}>Articles</Text>   

    </View>
    </TouchableOpacity>

    </View>
    <View style={{flexDirection:'row'}}>

    <View style={{marginTop:10,backgroundColor:'#062355',width:100,height:100,alignItems: 'center',marginLeft:10}}>
    <Image
                    style={{width:30,height:30,marginTop:15}}
                      source={require('../img/static.png')}
                    />
              <Text style={{color:'white',marginTop:20}}>Dépenses</Text>   
                  
                    
    </View>
    <View style={{marginTop:10,backgroundColor:'#062355',width:100,height:100,alignItems: 'center',marginLeft:10}}>
    <Image
                    style={{width:30,height:30,marginTop:15}}
                      source={require('../img/static.png')}
                    />
              <Text style={{color:'white',marginTop:20}}>Valeur du stock</Text>   
                  
                    
    </View>
    <View style={{marginTop:10,backgroundColor:'#062355',width:100,height:100,alignItems: 'center',marginLeft:10}}>
    <Image
                    style={{width:30,height:30,marginTop:15}}
                      source={require('../img/static.png')}
                    />
              <Text style={{color:'white',marginTop:20}}>Marge</Text>   
                  
                    
    </View>
  
    
   </View>
   <View style={{flexDirection:'row'}}>

   <View style={{marginTop:10,backgroundColor:'#062355',width:100,height:100,alignItems: 'center',marginLeft:10}}>
    <Image
                    style={{width:30,height:30,marginTop:15}}
                      source={require('../img/static.png')}
                    />
              <Text style={{color:'white',marginTop:20}}>Stock par catégorie</Text>   
                  
                    
    </View>
    <View style={{marginTop:10,backgroundColor:'#062355',width:100,height:100,alignItems: 'center',marginLeft:10}}>
    <Image
                    style={{width:30,height:30,marginTop:15}}
                      source={require('../img/static.png')}
                    />
              <Text style={{color:'white',marginTop:20}}>Benefice</Text>   
                  
                    
    </View>
    <View style={{marginTop:10,backgroundColor:'#062355',width:100,height:100,alignItems: 'center',marginLeft:10}}>
    <Image
                    style={{width:30,height:30,marginTop:15}}
                      source={require('../img/static.png')}
                    />
              <Text style={{color:'white',marginTop:20}}>Mouvements de caisse</Text>   
                  
                    
    </View>
</View>
</View>
        )
    }
}
export default statClient;