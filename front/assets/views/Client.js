import React,{useState} from 'react';
import {
  TextInput,
  Image,
  Text,
  Alert,
  View,
  Button,
  Keyboard,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Formik } from 'formik';
import * as yup from 'yup';
import {globalStyles} from '../Model/globalStyles';

 const validationSchema = yup.object().shape({
    Cin:yup
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
      /* Crédit:yup
      .number()
      .typeError('Crédit doit être un nombre')
      .required('Ce champs est obligatoire.'), */
  });


  class Client extends React.Component{
    
    constructor(props) {
      super(props);
     
      this.state = {
      Cin:'',
      Nom:'',
      Adresse:'',
      Telephone:'',
      Email:'',
      //Crédit:'',
      };
    
      this.Submit=this.Submit.bind(this);
      this.onCinHandler=(Cin) => this.setState({Cin})
    this.onNomHandler= (Nom) => this.setState({Nom});
    this.onAdresseHandler= (Adresse) => this.setState({Adresse});
    this.onTelephoneHandler= (Telephone) => this.setState({Telephone});
    this.onEmailHandler= (Email)=> this.setState({Email});
  // this.onCréditHandler=(Crédit)=> this.setState({Crédit});
    }
    
    Submit (){
      const objet={   
      Cin:this.state.Cin,
      Nom:this.state.Nom,
      Adresse:this.state.Adresse,
      Telephone:this.state.Telephone,
      Email:this.state.Email,
      //Crédit:this.state.Crédit,
  
   }
   
   //alert(JSON.stringify(objet));
   Alert.alert(
    "",
    "Le Client" + " " + objet.Nom + ' a bien été ajouté.' ,
    [
      
      { text: "OK", onPress: () => console.log("OK Pressed") }
    ]
  );
    

  fetch('http://192.168.1.9:8080/api/clients',{
    method:'post',
    mode:'no-cors',
    headers:{
      'Accept':'application/json',
      'Content-Type':'application/json'
    },
    body:JSON.stringify({
      Cin:objet.Cin,
      Nom:objet.Nom,
      Adresse:objet.Adresse,
      Telephone:objet.Telephone,
      Email:objet.Email,
      //Crédit:objet.Crédit,
    })

  })}

    render(){
      return (
<View style={globalStyles.container}>
      
      
    <ScrollView>
    <Formik
      initialValues={{Cin:'',Nom:'' ,Adresse:'',Téléphone:'',Email:''}}
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
                <Text style={globalStyles.sousTitre}>Numéro CIN</Text>
            </View>

            <TextInput
            placeholder='12834689'
             label='Cin'
            style={globalStyles.TextInput}
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
            placeholder='Khaled'
            label='Nom'
            onChangeText={this.onNomHandler}
            style={globalStyles.TextInput}
            //onChangeText={formikProps.handleChange('Nom')}
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
             label='Adresse'
            
            onChangeText={this.onAdresseHandler} 
            //onChangeText={formikProps.handleChange('Adresse')}
            onBlur={formikProps.handleBlur('Adresse')}
          />

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
            label='Téléphone'
            onChangeText={this.onTelephoneHandler} 
            //onChangeText={formikProps.handleChange('Téléphone')}
            onBlur={formikProps.handleBlur('Téléphone')}
            keyboardType='numeric'
            />
            <Text style={{ color: 'red' }}>
              {formikProps.touched.Téléphone && formikProps.errors.Téléphone
              }
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
             label='Email'
            onChangeText={this.onEmailHandler} 
            //onChangeText={formikProps.handleChange('Email')}
            onBlur={formikProps.handleBlur('Email')}
            keyboardType='email-address'
            />
            <Text style={{ color: 'red' }}>
              {formikProps.touched.Email && formikProps.errors.Email}
            </Text>      
     </View>
     
       
       
        </React.Fragment>
      )}
      
    </Formik>
        
  
      
    <Button title='Ajouter' 
                 onPress={() =>this.Submit()} 
                style={{fontSize:25}}
                      />
    </ScrollView>
    

</View>
    )}
            }
    
    export default Client;