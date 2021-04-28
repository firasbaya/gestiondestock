import React from 'react';
import {
  TextInput,
  Image,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import { SafeAreaView } from 'react-native';
import { globalStyles } from '../Model/globalStyles';



class AdminScreen extends React.Component{
  constructor(props){
		super(props)
		this.state={
			email:'',
			password:'',
      dataSource : [],
		}
    this.login = this.login.bind(this)
	}
  login = async() =>{
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
  
		await fetch('http://192.168.1.10:8080/api/auth/signin',{
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
          this.props.navigation.navigate("Home");
      }
       
		 })
		 .catch((error)=>{
		 console.error(error);
		 });
		}
		
		
  }
  render(){
    return (
  <View style={globalStyles.containerCenter}>

    
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
              keyboardType='email-address'
            />

             
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
              secureTextEntry
            />


          <View style={globalStyles.mini3}>
                          
                    <TouchableOpacity
                   onPress={()=>this.login()}
                   >
                      <Text style={globalStyles.textIdent}>S'identifier</Text>
                    </TouchableOpacity>
          </View>
          
          <TouchableOpacity
             onPress={() => {this.props.navigation.navigate('MdpOubliéScreen')}}>
              <Text style={globalStyles.guide}>Mot de passe oublié?</Text>
          </TouchableOpacity>

      <TouchableOpacity
          onPress={() => {this.props.navigation.navigate('SignUpScreen')}}>
          <Text style={[globalStyles.create,{marginTop:11}]}>Créer un compte.</Text>
      </TouchableOpacity>
      

  </View>
);}}

export default AdminScreen;