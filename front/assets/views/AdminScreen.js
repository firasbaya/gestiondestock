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
import { globalStyles } from '../Model/globalStyles';


const validationSchema = yup.object().shape({
  email: yup
  .string('')
  .email('Format incorrecte')
  .label('Email Administrateur')
  .required('Ce champs est obligatoire.'),
  password: yup
    .string()
    .label('Mot de passe')
    .required('Ce champs est obligatoire.')
});

class AdminScreen extends React.Component{
  constructor(props){
		super(props)
		this.state={
			email:'',
			password:''
		}
	}
  login = () =>{
		const {email,password} = this.state;
		let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
		if(email==""){
			//alert("Please enter Email address");
		  this.setState({email:'Entrez votre E-mail'})
			
		}
		
		else if(reg.test(email) === false)
		{
		//alert("Email is Not Correct");
		this.setState({email:'Email incorrecte'})
		return false;
		  }

		else if(password==""){
		this.setState({email:'Entrez votre mot de passe'})
		}
		else{
		
		fetch('http://192.168.1.9:8080/api/auth/signin',{
			method:'post',
      method:'no-cors',
			header:{
				'Accept':'application/json',
				'Content-type':'application/json'
			},
			body:JSON.stringify({
				// we will pass our input data to server
				email,
				password
			})
			
		})
		.then((response) => response.json())
		 .then((responseJson)=>{
			 if(responseJson == "ok"){
				 // redirect to profile page
				 alert("Successfully Login");
				 this.props.navigation.navigate("Home");
			 }else{
				 alert("Wrong Login Details");
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
      initialValues={{ email: '', password: '' }}
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
         
          <Text style={globalStyles.titre}>Administrateur</Text>
          </View>
              <View style={globalStyles.mini}>
                    <Image
                      style={globalStyles.imageAdmin}
                      source={require('../img/admin.png')}
                    />
           
                <Text style={globalStyles.textAdmin}>Email</Text>
           
              </View>
        
            <TextInput
              placeholder="Ecrivez votre Email"
              style={globalStyles.textInput1}
              onChangeText={email => this.setState({email})}
              onBlur={formikProps.handleBlur('email')}
              keyboardType='email-address'
            />

            <Text style={{ color: 'red' }}>
              {formikProps.touched.email && formikProps.errors.email}
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
                    //onPress={this.login}
                   onPress={()=>this.props.navigation.navigate('Home')}
                   >
                      <Text style={globalStyles.textIdent}>S'identifier</Text>
                    </TouchableOpacity>
                   )}

          </View>
          
          <TouchableOpacity
             onPress={() => {this.props.navigation.navigate('MdpOubliéScreen')}}>
              <Text style={globalStyles.guide}>Mot de passe oublié?</Text>
          </TouchableOpacity>

      <TouchableOpacity
          onPress={() => {this.props.navigation.navigate('SignUpScreen')}}>
          <Text style={[globalStyles.create,{marginTop:11}]}>Créer un compte.</Text>
      </TouchableOpacity>
      
        </React.Fragment>
      )}
      
    </Formik>
  </SafeAreaView>
);}}

export default AdminScreen;