import React from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import { TextInput } from 'react-native-paper';
import { Title } from 'react-native-paper';
import {globalStyles} from '../Model/globalStyles';
import { Formik } from 'formik';
import * as yup from 'yup';
/* 
const CreateDépense = () => {
  const [Titre,setTitre] = useState("")
  const [Montant,setMontant] = useState("")
 
  const submitData = ()=> {
    //   voir send-data
    fetch ("http://localhost:3000/send-data",{
    method:"post",
    headers:{
      'Content-Type' : 'application/json'
    },
    body:JSON.stringify({
    Titre,
    Montant
    
    })
  })
  .then(res=>res.json())
  .then(data=>{
    console.log(data)
  })
}
} */

const validationSchema = yup.object().shape({
    Titre: yup
    .string()
    .label('')
    .required('Ce champs est obligatoire.'),
    Montant: yup
     
      .number()
      .typeError('Montant doit être un nombre')
      .min(0, 'Valeur minimal : 0.')
      .max(5000, 'Valeur Maximale 5000.')
      .label('')
      .required('Ce champs est obligatoire.'),

      
    
  });
class Dépense extends React.Component{
    render(){
      return (
        <View style={globalStyles.container}>
            <View style={[globalStyles.Header,{backgroundColor:'#367ce5',borderColor:'#367ce5'}]}>
                <Title style={[globalStyles.Title,{marginleft:12,letterSpacing:3}]}>Dépenses</Title>           
             </View>
          
          <View style={{margin:30}}>
          <Formik
             initialValues={{ Titre: '', Montant: '' }}
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
            <Text style={{fontSize:18,fontWeight:'bold',marginTop:20,marginBottom:10}}>Titre:</Text>
            
            <TextInput
            placeholder='Frais de réparation'
            /* label='Titre'
            value={Titre}
            onChangeText={text => setTitre(text)} */
            //onChangeText={formikProps.handleChange('Titre')}
            onBlur={formikProps.handleBlur('Titre')}
             />


                    <Text style={{ color: 'red' }}>
                        {formikProps.touched.Titre && formikProps.errors.Titre}
                    </Text>    
           
           
            <Text style={{fontSize:18,fontWeight:'bold',marginTop:25,marginBottom:10}}>Montant:</Text>
            
            <TextInput
            placeholder='0'
           /*  label='Montant'
            value={Montant}
            onChangeText={text => setMontant(text)} */
            //onChangeText={formikProps.handleChange('Montant')}
            onBlur={formikProps.handleBlur('Montant')}
            keyboardType='numeric'
            />
            <Text style={{ color: 'red' }}>
                        {formikProps.touched.Montant && formikProps.errors.Montant}
                    </Text>  


            </React.Fragment>
               )}
               </Formik>
            </View>
            
           
            <View style={[globalStyles.vButton,{backgroundColor:'#367ce5',borderColor:'#367ce5',marginTop:60}]}>
                   <TouchableOpacity
                        onPress={()=> alert('button clicked!')}>                 
                        <Text style={globalStyles.ajouter}>Ajouter</Text>
                   </TouchableOpacity>
              </View>
        </View>
    );
};}
export default Dépense;
