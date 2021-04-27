import React from 'react';
import {View,StyleSheet} from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItem
}
from '@react-navigation/drawer';
import {
    Avatar,
    Title,
    Caption,
    Drawer,
    Text,
    TouchableRipple,
    Switch,
}from 'react-native-paper';
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


import * as Font from 'expo-font';

export function DrawerContent(props){
    const [data, setData] = React.useState([]);
 

    const [isDarkTheme,setIsDarkTheme]=React.useState(false);
    const toggleTheme=() =>{
        setIsDarkTheme(!isDarkTheme);              
        }
         function loadText(){

            fetch('http://192.168.1.4:8080/api/articles/6081ef5799ccb160accc3a2e')
            .then((response) => response.json())
           /*  .then((responseJson) => {
                Designatio=responseJson.Designation
                console.log(Designatio)
            }) */
            .then((data) => {
                setData(data);
                console.log(data)
              })
            .catch((error) =>{
              console.log(error)
            }
            ) }
     
            /*      .then((response) => response.json())
              .then((responseJson) => {
                return (
                  console.log(responseJson)
                );
              })
              .catch((error) => {
                console.error(error);
              });
              
          } */
        
    return(
        
        <View style={{flex:1}}>
<DrawerContentScrollView {...props}>
    <View style={styles.drawerContent}>
        <View style={styles.userInfoSection}>
            <View style={{flexDirection:'row',marginTop:15}}>
                <Avatar.Image
                source={{
                   uri:'https://image.flaticon.com/icons/png/512/147/147144.png'
                }}
                size={50}
                />
                <View style={{marginLeft:15,flexDirection:'column'}}>
                 
    
                    <Title style={styles.title}>{data.Designation}</Title>
                    <Caption style={styles.caption}>Zagalawlaw</Caption>
                </View>
            </View>
            <View style={styles.row}></View>

        </View>
        <Drawer.Section style={styles.bottomDrawerSection}>
           
           <DrawerItem
           icon={({color,size})=> (
               <MaterialCommunityIcons
               name="home-outline"
               color={color}
               size={size}               
               />
           )}
               label='Accueil'
               onPress={()=> {props.navigation.navigate('Home')}}
       />
       

<DrawerItem
    icon={({color,size})=> (
        <MaterialCommunityIcons 
        name="account-multiple-plus-outline"
        color={color}
        size={size}
        
        />

    )}
        label="Ajouter un magasinier"
        onPress={()=> {props.navigation.navigate('navMagasinier')}}
/>
<DrawerItem
    icon={({color,size})=> (
        <MaterialCommunityIcons 
        name="bell-outline"
        color={color}
        size={size}
        
        />

    )}
        label="Passer une commande"
        onPress={()=> {props.navigation.navigate('sendMail')}}
/>
<DrawerItem
    icon={({color,size})=> (
        <MaterialCommunityIcons 
        name="chat-processing-outline"
        color={color}
        size={size}
        
        />

    )}
        label="ChatBot"
        onPress={()=> {props.navigation.navigate('test')}}
/>
<DrawerItem
    icon={({color,size})=> (
        <MaterialCommunityIcons
        name="help-circle-outline"
        color={color}
        size={size}
        
        />

    )}
        label='A propos de nous'
        onPress={()=> {props.navigation.navigate('aPropos')}}
/>
        </Drawer.Section>
        
        
        
        <Drawer.Section title="Préférences">
        <TouchableRipple onPress={()=> {toggleTheme()}}>
                <View style={styles.preference}>
                    <Text>Dark Theme</Text>
                    <View pointerEvents="none">
                    <Switch value={isDarkTheme}/>
                    </View>
                </View>

            </TouchableRipple>
        </Drawer.Section>
    </View>
</DrawerContentScrollView>
<Drawer.Section style={StyleSheet.bottomDrawerSection}>
<DrawerItem
    icon={({color,size})=> (
        <MaterialCommunityIcons
        name="exit-to-app"
        color={color}
        size={size}
        
        />

    )}
        label='Déconnexion'
        onPress={()=> {props.navigation.navigate('LoginScreen')}}
/>
    
</Drawer.Section>
        </View>
    );
    
}

const styles=StyleSheet.create({
    DrawerContent:{
        flex:1,
       
    },
    userInfoSection:{
        paddingLeft:20,
    },
    title:{
        fontSize:16,
        marginTop:3,
        fontWeight:'bold',
    },
    caption:{
        fontSize:14,
        lineHeight:14,
    },
    row:{
        marginTop:17,
        flexDirection:'row',
        alignItems:'center',
        marginBottom:10
    },
    paragraph:{
        fontWeight:'bold',
        marginRight:3,
    },
    drawerSection:{
        marginTop:10,
    },
    bottomDrawerSection:{
        marginBottom:2,
        borderTopColor:'#f4f4f4',
        borderTopWidth:1
    },
    preference:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical:5,
        paddingHorizontal:16,
    }
})