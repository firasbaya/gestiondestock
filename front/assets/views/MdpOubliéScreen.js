import React from 'react';
import {
  StyleSheet,
  TextInput,
  ActivityIndicator,
  Text,
  View,
  Alert,
  TouchableOpacity,
} from 'react-native';
import {globalStyles} from '../Model/globalStyles';
import { Formik } from 'formik';
import * as yup from 'yup';


const validationSchema = yup.object().shape({
    email:yup
    .string()
    .label('Email')
    .email('Format incorrecte.')
    .required('Ce champs est obligatoire.'),
});

class  MdpOubliéScreen extends React.Component {
  render(){
    const alert =() => {
      Alert.alert(
        //title
        'Récuperation',
        //body
        'Un mail de récuperation vous a été envoyé.',
        [
          {
            text: 'Confirmer',
            onPress: () => console.log('confirmer')
          },
        ],
        {cancelable: false},
        //clicking out side of alert will not cancel
      );
    
    }
      
    return (
    <View style={globalStyles.containerCenter}>
 
      <Text style={[globalStyles.titre,{marginTop:150}]}>Retrouvez Votre Compte</Text>


<Text style={styles.saisie}>Veuillez saisir votre adresse e-mail:</Text>
<Formik
  initialValues={{ email: '' }}
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

<TextInput 
        placeholder='Ecrivez votre Email' 
        placeholderTextColor='#808080'
        
        style={styles.textInput}
        onChangeText={formikProps.handleChange('email')}
        onBlur={formikProps.handleBlur('email')}
        keyboardType='email-address'
    />
        <Text style={{ color: 'red',marginLeft:10  }}>
              {formikProps.touched.email && formikProps.errors.email}
        </Text>


<View style={styles.vButton}>
{formikProps.isSubmitting ? (
                  <ActivityIndicator />
                  ) : (
                  <TouchableOpacity
                      onPress={alert}>
                    <Text style={styles.recup}>Récupérer</Text>
                  </TouchableOpacity>
                   )}
 <TouchableOpacity
  onPress={() => {this.props.navigation.navigate('AdminScreen')}}>
     <Text style={styles.annul}>Annuler</Text>
 </TouchableOpacity>
 </View>
 
 </React.Fragment>
)}
</Formik>
      </View>
  );}}

const styles=StyleSheet.create({


    saisie:{
        marginTop:120,
        fontWeight:'bold',
        fontSize:17,
    },
    textInput:{
        marginTop:20,
        borderWidth:1,
        textAlign:'center',
        width:240,
        height:35,
        letterSpacing:2,
    },
    vButton:{
    marginTop:50,
    flexDirection:'row',
    margin:10,
    },
    recup:{
    marginRight:20,
    backgroundColor:'#367ce5',
    color:'white',
    fontSize:18,
    width:150,
    textAlign:'center',
    height:30,
    borderRadius:15,
    },
    annul:{
        backgroundColor:'#367ce5',
        color:'white',
        fontSize:18,
        width:150,
        textAlign:'center',
        height:30,
        borderRadius:15,
    }

});
export default MdpOubliéScreen;