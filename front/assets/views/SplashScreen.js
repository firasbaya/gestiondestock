import React,{Component} from 'react';
import {View,Image,Text,StatusBar} from 'react-native';
import { globalStyles } from '../Model/globalStyles';
import {Avatar} from 'react-native-paper'

var logo =require('../img/test.png')

class BlinkText extends React.Component{
    constructor(props)
    {
        super (props);
        this.state={
            showText:true
        }
        setInterval(()=>{
            this.setState(previousState=>{
                return {showText: !previousState.showText}
            })
        },700);
    }
        render(){
            const {textData}=this.props
            const {showText}=this.state
            return(
                <Text style={{fontSize:18,color:'#FF8F00',fontWeight:'bold'}}>{showText ? textData :""}</Text>
                  )
}
}
export default class SplashScreen extends Component{
    constructor(props)
    {
        super (props);
       
       
        setTimeout(()=>
        {
            this.props.navigation.navigate('LoginScreen');

        },4000);
    }
       
    
    render(){
     
    

        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center',alignContent:'center',backgroundColor:'#062355'}}>
            <StatusBar  
                    hidden = {true}    
                />  
       <View style={{marginTop:200}}>
       <Image
                source={
                   logo
                }
                style={{height:120, width:370,backgroundColor:'#062355',borderColor:'#062355'}}
                />
                </View>
        <View style={{marginTop:180}}>
              <BlinkText  textData={"Your success is our business."}>

                  
              </BlinkText>
              </View>
              </View>
        )
    }
}