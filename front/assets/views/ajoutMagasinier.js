import React from 'react';
import {
  TextInput,
  Image,
  Text,
  View,
  Button,
  Alert
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Formik } from 'formik';
import * as yup from 'yup';
import {globalStyles} from '../Model/globalStyles';

const validationSchema = yup.object().shape({
    Cin: yup
    .number()
    .typeError('Cin doit être un nombre')
    .required('Ce champs est obligatoire.'),
    Nom: yup
      .string()
      .label('')
      .required('Ce champs est obligatoire.'),
    Adresse: yup
      .string()
      .label('')
      .required('Ce champs est obligatoire.'),
     Téléphone: yup
      .string()
      .label('')
      .required('Ce champs est obligatoire.'),
    Email: yup
      .string()
      .email('Email non valide')
      .label('')
      .required('Ce champs est obligatoire.'),
    Password:yup
      .string()
      .label('Mot de passe')
      .required('Mot de passe obligatoire.')
      .min(5,'Votre mot de passe est trop court') 
      .max(20,'Vous ne pouvez pas dépassser 20 lettres'),
  });



  class ajoutMagasinier extends React.Component{
    constructor(props) {
      super(props);
  
      this.state = {
        email:'',
        password:'',
        nom:'',
        cin:'',
        telephone:'',
        adresse:'',
       
      };
      this.Submit=this.Submit.bind(this);
    this.onCinHandler= (cin) => this.setState({cin});
    this.onNomHandler= (nom) => this.setState({nom});
    this.onAdresseHandler= (adresse) => this.setState({adresse});
    this.onTéléphoneHandler= (telephone)=> this.setState({telephone});
    this.onEmailHandler= (email)=> this.setState({email});
    this.onPasswordHandler= (password) => this.setState({password});
   
    }
    Submit (){
      const  objet={   
        email:this.state.email,
        password:this.state.password,
        nom:this.state.nom,
        cin:this.state.cin,
        telephone:this.state.telephone,
      adresse:this.state.adresse,
      
   }
   Alert.alert(
    "",
    "Le magasinier" + " " + objet.nom + " " + 'a bien été ajouté.' ,
    [
      
      { text: "OK", onPress: () => console.log("OK Pressed") }
    ]
  );
   fetch('http://192.168.1.9:8080/api/auth/signup',{
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
      cin:objet.cin,
      telephone:objet.telephone,
      adresse:objet.adresse,
     
    })

  })}
    render(){
      return (

<View style={globalStyles.container}>
  
    <ScrollView>
    <Formik
      initialValues={{ Cin: '', Nom: '' ,Adresse:'',Téléphone:'',Email:'',Password:''}}
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
        
        <View style={globalStyles.Body}>
            <View style={globalStyles.H}>
                <Image
                      style={globalStyles.icon}
                      source={require('../img/card.png')}
                />
                <Text style={globalStyles.sousTitre}>CIN Magasinier</Text>
            </View>

            <TextInput
            placeholder='12284890'
            style={globalStyles.TextInput}
            /* label='Cin'
            value={Cin}
            onChangeText={text => setCin(text)} */
            //onChangeText={formikProps.handleChange('Cin')}
            onChangeText={this.onCinHandler} 
            onBlur={formikProps.handleBlur('Cin')}
            keyboardType='numeric'
            />
            <Text style={{ color: 'red' }}>
              {formikProps.touched.Cin && formikProps.errors.Cin}
            </Text>    
        </View>

        <View style={globalStyles.E}>
            <View style={globalStyles.H}>
                <Image
                      style={globalStyles.icon}
                      source={require('../img/bus.png')}
                />
                <Text style={globalStyles.sousTitre}>Nom</Text>
            </View>
            <TextInput
            placeholder='Emira'
            style={globalStyles.TextInput}
            /* label='Nom'
            value={Nom}
            onChangeText={text => setNom(text)} */
            //onChangeText={formikProps.handleChange('Nom')}
            onChangeText={this.onNomHandler} 
            onBlur={formikProps.handleBlur('Nom')}
            />
            <Text style={{ color: 'red' }}>
              {formikProps.touched.Nom && formikProps.errors.Nom}
            </Text>      
        </View>
        <View style={globalStyles.E}>
            <View style={globalStyles.H}>
                <Image
                      style={globalStyles.icon}
                      source={require('../img/placeholder.png')}
                />
                <Text style={globalStyles.sousTitre}>Adresse</Text>
            </View>
            <TextInput
            placeholder='30 Rue la douceur'
            style={globalStyles.TextInput}
            /* label='Adresse'
            value={Adresse}
            onChangeText={text => setAdresse(text)} */
            //onChangeText={formikProps.handleChange('Adresse')}
            onChangeText={this.onAdresseHandler} 
            onBlur={formikProps.handleBlur('Adresse')}/>

            <Text style={{ color: 'red' }}>
              {formikProps.touched.Adresse && formikProps.errors.Adresse}
            </Text>      
        </View>

        <View style={globalStyles.E}>
            <View style={globalStyles.H}>
                <Image
                      style={globalStyles.icon}
                      source={require('../img/phone.png')}
                />
                <Text style={globalStyles.sousTitre}>Téléphone</Text>
            </View>
            <TextInput
            placeholder='53570050'
            style={globalStyles.TextInput}
            /* label='Téléphone'
            value={Téléphone}
            onChangeText={text => setTéléphone(text)} */
            //onChangeText={formikProps.handleChange('Téléphone')}
            onChangeText={this.onTéléphoneHandler} 
            onBlur={formikProps.handleBlur('Téléphone')}
            
            keyboardType='numeric'

            />
            <Text style={{ color: 'red' }}>
              {formikProps.touched.Téléphone && formikProps.errors.Téléphone}
            </Text>      
        </View>
       
        <View style={globalStyles.E}>
            <View style={globalStyles.H}>
                <Image
                    style={globalStyles.icon}
                      source={require('../img/gmail.png')}
                />
                <Text style={globalStyles.sousTitre1}>E-mail</Text>
            </View>
            <TextInput
            placeholder='FamilyBusiness@gmail.com'
            style={globalStyles.TextInput}
           /*  label='Email'
            value={Email}
            onChangeText={text => setEmail(text)} */
            //onChangeText={formikProps.handleChange('Email')}
            onChangeText={this.onEmailHandler} 
            onBlur={formikProps.handleBlur('Email')}
            keyboardType='email-address'
            />
            <Text style={{ color: 'red' }}>
              {formikProps.touched.Email && formikProps.errors.Email}
            </Text>      
     </View>

     <View style={globalStyles.E}>
            <View style={globalStyles.H}>
                <Image
                    style={globalStyles.icon}
                      source={require('../img/password.png')}
                />
                <Text style={globalStyles.sousTitre1}>Mot de passe</Text>
            </View>
            <TextInput
            placeholder='************'
            style={globalStyles.TextInput}
           /*  label='Password'
            value={Password}
            onChangeText={text => setPassword(text)} */
            //onChangeText={formikProps.handleChange('Password')}
            onChangeText={this.onPasswordHandler} 
            onBlur={formikProps.handleBlur('Password')}
            secureTextEntry
          />
            <Text style={{ color: 'red' }}>
              {formikProps.touched.Password && formikProps.errors.Password}
            </Text>      
     </View>
       
       
       
        </React.Fragment>
      )}
      
    </Formik>
        
  
    <Button title='Ajouter' 
                 onPress={() => this.Submit()}
                  color='#FFA500'
                      />
    </ScrollView>
</View>
    )}
      }
    
    export default ajoutMagasinier;