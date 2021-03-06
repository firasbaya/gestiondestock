import React from 'react';
import {View,Text,Button,Image,TextInput} from 'react-native';
import  {globalStyles} from '../Model/globalStyles';

import * as SMS from 'expo-sms';
class sendMail extends React.Component{
    onPress=async () => {
        const status = await SMS.sendSMSAsync(
            '53570050',
            'Hello world'
        );
        console.log(status);
    };
    render(){
      
        return (
            
            <View style={globalStyles.container}>



             <View style={{backgroundColor:'white',margin:15,padding:2,flex:1,borderRadius:20,padding:10,marginBottom:120}}>
            
             <Text style={[globalStyles.sousTitre,{marginBottom:20}]}>La quantité de l'article x est bientot epuisée.</Text>
             <View style={{borderBottomWidth:1,marginBottom:15}}></View>
             <Text style={[globalStyles.sousTitre,{marginBottom:20}]}>Voulez-vous passer une nouvelle commande? </Text>
             

             
             
             <View style={globalStyles.H}>
                    <Image
                      style={globalStyles.icon}
                      source={require('../img/lalaw.png')}
                    />
                     <Text style={[globalStyles.sousTitre,{marginBottom:10}]}>Quantité</Text>
                </View>

                    <TextInput
                    placeholder='w203'
                    style={[globalStyles.TextInput,{marginBottom:30,borderWidth:1,borderBottomWidth:1,width:200}]}
                    />
<View style={{marginVertical:20,marginHorizontal:100}}>
<Button
title='Valider'
onPress={this.onPress}
color='#367ce5'
/>
</View>
                     </View>
    </View>
      );}}
     
      


export default sendMail;