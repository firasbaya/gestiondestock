import React from 'react';
import {
  StyleSheet,
  TextInput,
  Image,
  ActivityIndicator,
  Text,
  View,
  Alert,
  TouchableOpacity,
} from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import {globalStyles} from '../Model/globalStyles';

const validationSchema = yup.object().shape({
  nom: yup
  .string()
  .label('')
  .required('Ce champs est obligatoire.'),
  password: yup
    .string()
    .label('Mot de passe')
    .required('Ce champs est obligatoire.')
    .min(5,'Votre mot de passe est trop court') 
    .max(20,'Vous ne pouvez pas dépassser 20 lettres'),
  email:yup
  .string()
  .label('Email')
  .email('Format incorrecte.')
  .required('Ce champs est obligatoire.'),
  password_conf: yup
  .string()
  .label('Mot de passe')
  .oneOf([yup.ref('password'),null],'Mot de passe non identique')
  .required('Ce champs est obligatoire.')
  .min(5,'Votre mot de passe est trop court') 
  .max(20,'Vous ne pouvez pas dépassser 20 lettres')
});

class SignUpScreen extends React.Component{
  constructor(props){
		super(props)
		this.state={
			email:'', 
			password:'',
      nom:'',

		};
    this.Submit=this.Submit.bind(this);
    this.onemailHandler= (email) => this.setState({email});
    this.onpasswordHandler= (password) => this.setState({password});
    this.onnomHandler= (nom) => this.setState({nom});
	}
  Submit (){
const objet={
  email:this.state.email,
  password:this.state.password,
  nom:this.state.nom,
}
Alert.alert(
  "",
  "Votre Compte " + 'a bien été crée.' ,
  [
    
    { text: "OK", onPress: () => console.log("OK Pressed") }
  ]
);
fetch('http://192.168.1.2:8080/api/auth/signup',{
  method:'post',
  mode:'no-cors',
  headers:{
    'Accept':'application/json',
    'Content-Type':'application/json'
  },
  body:JSON.stringify({
email:objet.email,
password:objet.password,
nom:objet.nom,
  })

})}
  render(){
    return (
<View style={styles.container}>

<Text style={styles.Creer}>Créer Votre Compte</Text>
<Text style={styles.sec}>Cela ne prendra que quelques secondes.</Text>

<Formik
  initialValues={{nom: '', password: '',email: '' }}
  onSubmit={(values, actions) => {
    alert(JSON.stringify(values));
    setTimeout(() => {
      actions.setSubmitting(false);
    }, 1000);
  }}
  validationSchema={validationSchema}
  >
  {(formikProps) => (

    <React.Fragment>


  <View style={styles.champ}>
      <Image
        style={styles.imageAdmin}
        source={require('../img/admin.png')}
      />
      <Text style={styles.textAdmin}>Nom Administrateur</Text>
  </View>

    <TextInput 
        placeholder='Ecrivez votre nom' 
        placeholderTextColor='#808080'
        onChangeText= {this.onnomHandler}
        onBlur={formikProps.handleBlur('nom')}
        style={styles.textInput1}
    />

        <Text style={{ color: 'red',marginLeft:10 }}>
          {formikProps.touched.nom && formikProps.errors.nom}
        </Text>

        <View style={styles.champ2}>
          <Image
            style={styles.imageAdmin}
            source={require('../img/email2.png')}
          />
           <Text style={styles.textAdmin}>Email</Text>
    </View>

    <TextInput 
        placeholder='Ecrivez votre Email' 
        placeholderTextColor='#808080'
        style={styles.textInput1}
        keyboardType='email-address'
        onChangeText= {this.onemailHandler}
        onBlur={formikProps.handleBlur('email')}
    />
        <Text style={{ color: 'red',marginLeft:10  }}>
              {formikProps.touched.email && formikProps.errors.email}
        </Text>


    <View style={styles.champ2}>
        <Image
          style={styles.imageAdmin}
          source={require('../img/cadenasn.png')}
        />
        <Text style={styles.textAdmin}>Mot de passe</Text>
    </View>

    <TextInput 
        placeholder='Ecrivez votre Mot de passe' 
        placeholderTextColor='#808080'
        secureTextEntry={true}
        style={styles.textInput1}
        onChangeText= {this.onpasswordHandler}
        onBlur={formikProps.handleBlur('password')}
        
    />
        <Text style={{ color: 'red',marginLeft:10 }}>
              {formikProps.touched.password && formikProps.errors.password}
         </Text>
   
    <View style={styles.champ2}>
          <Image
            style={styles.imageAdmin}
            source={require('../img/cadenasn.png')}
         />
          <Text style={styles.textAdmin}>Confirmation de Mot de passe</Text>
   </View>

   <TextInput 
        placeholder='Confirmer votre mot de passe' 
        placeholderTextColor='#808080'
        style={styles.textInput1}
        secureTextEntry={true}
        onChangeText={formikProps.handleChange('password_conf')}
        onBlur={formikProps.handleBlur('password_conf')}

    />
            <Text style={{ color: 'red',marginLeft:10  }}>
              {formikProps.touched.password_conf && formikProps.errors.password_conf}
            </Text>


   
<View style={[globalStyles.vButton,{marginBottom:80,backgroundColor:'#367ce5',borderColor:'#367ce5',marginTop:10,alignItems:'center',alignContent:'center',marginLeft:0,justifyContent:'center',alignSelf:'center',marginRight:30}]}>
              {formikProps.isSubmitting ? (
                  <ActivityIndicator />
                  ) : (
                  <TouchableOpacity
                  onPress={() =>this.Submit()}>
                  <Text style={globalStyles.ajouter}>S'inscrire</Text>
                  </TouchableOpacity>
                   )}
</View>
     
    
    </React.Fragment>
)}
</Formik>

</View>

  );
  
}
}
  const styles=StyleSheet.create({
    
container:{
flex:1,
marginTop:35,
marginLeft:30,
},

Creer:{
  color:'#367ce5',
  fontSize:30,
  fontWeight:'bold'
},
sec:{
  color:'#367ce5',
},
imageAdmin:{
  height:26,
  width:20,
  borderRadius:15,
  marginRight:7,
},
champ:{
  flexDirection:'row',
   marginTop:20,
   padding:5,
},
champ2:{
  flexDirection:'row',
   marginTop:10,
   padding:5,
},
textInput1:{
  borderBottomWidth:1,
  height:40,
  width:220,
  marginLeft:10,
},
textAdmin:{
  marginTop:0,
  fontWeight:'bold',
  fontSize:18
},
mini3:{
  marginLeft:0,
 borderRadius:15,
  backgroundColor:'#367ce5',
marginTop:60,
padding:4,
},

textIdent:{
  marginTop:2,
  fontSize:18,
  color:'white',
  width:100,
  height:30,
  textAlign:'center',
  
},
cgu:{
  textAlign:'center',
  fontSize:12,
  color:'#303030',
  marginTop:20,
  padding:10,
  marginRight:30,
  


}
  });
  export default SignUpScreen;