import React from 'react';
import {
  TextInput,
  Image,
  ActivityIndicator,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import { SafeAreaView } from 'react-native';
import {globalStyles} from '../Model/globalStyles';

const validationSchema = yup.object().shape({
  Email: yup
  .string('')
  .email()
  .label('Email Magasinier')
  .required('Ce champs est  obligatoire.'),
  password: yup
    .string()
    .label('Mot de passe')
    .required('Ce champs est obligatoire.')
});

class MagasinierScreen extends React.Component{
  constructor(props){
		super(props)
		this.state={
			email:'',
			password:''
		}
    this.login = this.login.bind(this)
	}

  login = async () =>{
		const {email,password} = this.state;
		let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
    if(email==""){
			alert("Please enter Email address");
		  this.setState({email:'Entrez votre E-mail'})
			
		}
		
		else if(reg.test(email) === false)
		{
		alert("Email is Not Correct");
		this.setState({email:'Email incorrecte'})
		return false;
		  }

		else if(password===""){
		this.setState({email:'Entrez votre mot de passe'})
		}
		else{
  
		await fetch('http://192.168.1.2:8080/api/auth/signin',{
      method:'post',
      mode:'no-cors',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
			body:JSON.stringify({
				// we will pass our input data to server
				email ,
				password 
			})
			
		})
		.then((response) => response.json())
		 .then((responseJson)=>{
        console.log(responseJson.message)
        if (responseJson.message === "User Not found.")
        {
          alert("Verify email")
        }
       else if (responseJson.message === "Invalid Password!")
        {
          alert("Verify password")
        }
       else
      {
          // redirect to profile page
          alert("Successfully Login");
          this.props.navigation.navigate("HomeMag");
      }
       
		 })
		 .catch((error)=>{
		 console.error(error);
		 });
		}
		
		
  }
 
  render(){
    return (
  <SafeAreaView style={globalStyles.containerCenter}>
    
    <Formik
      initialValues={{ Email: '', password: '' }}
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
         <View>
         
          <Text style={globalStyles.titre}>Magasinier</Text>
          </View>
              <View style={globalStyles.mini}>
                    <Image
                      style={globalStyles.imageAdmin}
                      source={require('../img/admin.png')}
                    />
           
                <Text style={globalStyles.textAdmin}>Email Magasinier</Text>
           
              </View>
        
            <TextInput
              placeholder="Ecrivez votre Email"
              style={globalStyles.textInput1}
              keyboardType='email-address'
              onChangeText={email => this.setState({email})}
              onBlur={formikProps.handleBlur('Email')}
              
            />

            <Text style={{ color: 'red' }}>
              {formikProps.touched.Email && formikProps.errors.Email}
            </Text>
          

          <View style={globalStyles.mini2}>
              <Image
                style={globalStyles.imageAdmin}
                source={require('../img/cadenasn.png')}
              />
                <Text style={globalStyles.textAdmin}>Mot de passe</Text>
          </View>
            
            <TextInput
              placeholder="Mot de passe"
              style={globalStyles.textInput1}
              onChangeText={password => this.setState({password})}
              onBlur={formikProps.handleBlur('password')}
              secureTextEntry
            />

            <Text style={{ color: 'red' }}>
              {formikProps.touched.password && formikProps.errors.password}
            </Text>
          
          

          <View style={globalStyles.mini3}>
              
              {formikProps.isSubmitting ? (
                  <ActivityIndicator />
                  ) : (
                    <TouchableOpacity
                    onPress={()=>this.login()}>
                    <Text style={globalStyles.textIdent}>S'identifier</Text>
                    </TouchableOpacity>
                   )}

          </View>
        
        </React.Fragment>
      )}
      
    </Formik>
  </SafeAreaView>
);}}
export default MagasinierScreen;