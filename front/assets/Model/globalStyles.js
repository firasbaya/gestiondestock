import {StyleSheet} from 'react-native';
export const globalStyles=StyleSheet.create({


////////////////////////Magasinier/Admin screen//////////////////////////////////////////////////////      

    containerCenter:{ 
        flex:1,
        alignItems:'center',
        },
        text:{
            textAlign:'center', 
            marginTop:40,
            fontSize:17,
        },
      mini:{
        flexDirection:'row',
        justifyContent:'center',
         marginTop:80,
         padding:5,
      },
      mini2:{
        flexDirection:'row',
        justifyContent:'center',
         marginTop:25,
         padding:3,
      },
      mini3:{
      flexDirection:'row',
      justifyContent:'center',
      borderRadius:15,
      backgroundColor:'#367ce5',
      marginTop:25,
      padding:5,
      },
      imageAdmin:{
        marginTop:2,
        height:24,
        width:20,
        borderRadius:15,
        marginLeft:8
      },
      textAdmin:{
        marginTop:2,
        marginLeft:10,
        fontSize:18,
        width:200,
        height:30,
        fontWeight:'bold',
        color:'black',
      },
      guide:{
        marginTop:30,
        fontSize:12,
        color:'#367ce5',
        borderBottomWidth:0.2,
        borderBottomColor:'#367ce5',
      },
      textInput1:{
        borderBottomWidth:1,
        height:35,
        width:200
      },
      titre:{
        fontSize:30,
        fontWeight:'bold',
        marginTop:80,
        color:'#367ce5',
      
      },
      textIdent:{
        marginTop:2,
        marginLeft:10,
        fontSize:18,
        color:'white',
        width:200,
        height:30,
        textAlign:'center',
      },
      create:{
        marginTop:80,
        fontSize:14,
        color:'#367ce5',
        
      },
textMag:{
    marginTop:2,
    marginLeft:5,
    fontSize:18,
    color:'black',
    width:150,
    height:30,
    textAlign:'center',
    paddingRight:32.5
  
},
/////////////////////Fin///Magasinier/Admin screen//////////////////////////////////////////////////////      

////////////////////////Fournisseur/Entré/////////////////////////////////////////

E:{
    marginLeft:10,
    marginBottom:10,
    backgroundColor:'white',
    borderWidth:2,
    borderRadius:20,
    marginRight:10,
    borderColor:'white',
    padding:10,
    
   },
   TextInput:{
    marginLeft:30,
    borderBottomColor:'black',
    borderBottomWidth:1,
    height:35,
},
iconH:{
    marginHorizontal:10,
    marginTop:5
 },
 Body:{
    margin:10,
    backgroundColor:'white',
    padding:10,
    borderWidth:2,
    borderRadius:20,
    borderColor:'white'
},
icon:{
    marginTop:5
},
H:{
    flexDirection:'row',
}, 
sousTitre:{
    fontWeight:'bold',
    fontSize:20,
    marginLeft:8,
},
container:{
    flex:1,
    backgroundColor:'#ccc'
},
//////////////////////Fin//Fournisseur/Entré/////////////////////////////////////////

///////////////////Entré/Sortie////////////////////////////////////
Title:{
    color:'white',
    letterSpacing:2
},
ajouter:{
    marginTop:2,
    fontSize:18,
    color:'white',
    height:30,
    textAlign:'center',
},
////////////////Fin Entré/Sortie//////////////////////////////////////////

Header:{
    backgroundColor:'#f25287',
    borderWidth:1,
    borderColor:'#f25287',
    padding:6,
    flexDirection:'row',
    marginTop:30
  },

  sousTitre1:{
    fontWeight:'bold',
    fontSize:20,
    marginLeft:7,
    marginTop:5,
},

vButton:{
    borderRadius:15,
     backgroundColor:'#03AC13',
  marginTop:100,
   padding:3,
   borderWidth:1,
   borderColor:'#03AC13',
   width:170,
   marginLeft:95
 },


//animation text
 textStyle: {
  fontSize: 28,
  fontWeight: 'bold',
  marginBottom: 14,
}
});