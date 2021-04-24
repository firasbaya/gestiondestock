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
              onChangeText={formikProps.handleChange('Email')}
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
              onChangeText={formikProps.handleChange('password')}
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
                    onPress={() => {this.props.navigation.navigate('HomeMag')}}>
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