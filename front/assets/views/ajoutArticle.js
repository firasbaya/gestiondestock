import React,{useState} from 'react';
import {
  TextInput,
  Image,
  Text,
  View,
  Button,
  Alert,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Formik } from 'formik';
import * as yup from 'yup';
import {globalStyles} from '../Model/globalStyles';



       
const validationSchema = yup.object().shape({
    Designation: yup
      .string()
      .label('')
      .required('Ce champs est obligatoire.'),
    Marque: yup
      .string()
      .label('')
      .required('Ce champs obligatoire.'),
    Categorie: yup
      .string()
      .label('')
      .required('Ce champs est obligatoire.'),
    Id_fournisseur: yup
      .string()
      .label('ID Fournisseur')
      .required('Ce champs est obligatoire.'),
    PrixAchat: yup
      .number()
      .typeError('Prix Achat doit être un nombre')
      .min(0, 'Valeur minimal : 0.')
      .max(5000, 'Valeur Maximale 5000.')
      .required('Ce champs est obligatoire.'),
      
    PrixVente: yup
      .number()
      .typeError('Prix Vente doit être un nombre')
      .min(0, 'Valeur minimal : 0.')
      .max(5000, 'Valeur Maximale 5000.')
      .required('Ce champs est obligatoire.'),
    MaxRemise: yup
     .number()
     .typeError('Max remise doit être un nombre')
     .min(0, 'Valeur minimal : 0.')
     .max(5000, 'Valeur Maximale 5000.')
     .required('Ce champs est obligatoire.'),
    QuantiteAlerte: yup
     .number()
     .typeError('Quantité d"alerte doit être un nombre')
     .min(0, 'Valeur minimal : 0.')
     .max(5000, 'Valeur Maximale 5000.')
     .required('Ce champs est obligatoire.'),
     QuantiteArticle: yup
     .number()
     .typeError('Quantité doit être un nombre')
     .min(0, 'Valeur minimal : 0.')
     .max(5000, 'Valeur Maximale 5000.')
     .required('Ce champs est obligatoire.'),
 

  });


  class ajoutArticle extends React.Component{

    constructor(props) {
      super(props);
  
      this.state = {
        Designation:'',
        Marque:'',
        Categorie:'',
        Id_fournisseur:'',
        PrixAchat:'',
        PrixVente:'',
        MaxRemise:'',
        QuantiteAlerte:'',
        QuantiteArticle:''
      };
      this.Submit=this.Submit.bind(this);
    this.onDesginationHandler= (Designation) => this.setState({Designation});
    this.onMarqueHandler= (Marque) => this.setState({Marque});
    this.onId_fournisseurHandler= (Id_fournisseur) => this.setState({Id_fournisseur});
    this.onCategorieHandler= (Categorie)=> this.setState({Categorie});
    this.onPrixAchatHandler= (PrixAchat)=> this.setState({PrixAchat});
    this.onPrixVenteHandler= (PrixVente) => this.setState({PrixVente});
    this.onMaxRemiseHandler= (MaxRemise) => this.setState({MaxRemise});
    this.onQuantiteAlerteHandler= (QuantiteAlerte) => this.setState({QuantiteAlerte});
    this.onQuantiteArticleHandler= (QuantiteArticle) => this.setState({QuantiteArticle});
    }
    Submit (){
      const  objet={   
      Designation:this.state.Designation,
      Marque:this.state.Marque,
      Categorie:this.state.Categorie,
      Id_fournisseur:this.state.Id_fournisseur,
      PrixAchat:this.state.PrixAchat,
      PrixVente:this.state.PrixVente,
      MaxRemise:this.state.MaxRemise,
      QuantiteAlerte:this.state.QuantiteAlerte,
      QuantiteArticle:this.state.QuantiteArticle,
   }
   Alert.alert(
    "",
    "L'article" + " " + objet.Designation + " " + 'a bien été ajouté.' ,
    [
      
      { text: "OK", onPress: () => console.log("OK Pressed") }
    ]
  );
       
   fetch('http://192.168.1.9:8080/api/articles',{
    method:'post',
    mode:'no-cors',
    headers:{
      'Accept':'application/json',
      'Content-Type':'application/json'
    },
    body:JSON.stringify({
      Designation:objet.Designation,
      Marque:objet.Marque,
      Categorie:objet.Categorie,
      Id_fournisseur:objet.Id_fournisseur,
      PrixAchat:objet.PrixAchat,
      PrixVente:objet.PrixVente,
      MaxRemise:objet.MaxRemise,
      QuantiteAlerte:objet.QuantiteAlerte,
      QuantiteArticle:objet.QuantiteArticle
    })

  })}
    render(){
   
      return (
        
<View style={globalStyles.container}>
 
    <ScrollView>
    <Formik
      initialValues={{ Designation: '' ,Marque:'',Categorie:'',Id_fournisseur:'',PrixAchat:'',
      PrixVente:'',MaxRemise:'',QuantiteAlerte:'',QuantiteArticle:''}}
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
        
           {/*  <View style={globalStyles.H}>
                <Image
                      style={globalStyles.icon}
                      source={require('../img/tag.png')}
                />
                <Text style={globalStyles.sousTitre}>ID Article</Text>
            </View> */}

          {/*   <TextInput
            placeholder='w203'
            style={globalStyles.TextInput}
             //label='idA'
            //value={idA}
            //onChangeText={text => setidA(text)} 
            //onChangeText={formikProps.handleChange('idA')}
            onBlur={formikProps.handleBlur('idA')}
            autoFocus/> */}
            {/* <Text style={{ color: 'red' }}>
              {formikProps.touched.IdA && formikProps.errors.IdA}
            </Text> */}    
        <View style={[globalStyles.E,{marginTop:30}]}>
            <View style={globalStyles.H}>
                <Image
                      style={globalStyles.icon}
                      source={require('../img/tampon.png')}
                />
                <Text style={globalStyles.sousTitre}>Désignation</Text>
            </View>
            <TextInput
            style={globalStyles.TextInput}
           label='Designation'
           placeholder='c200'
           onChangeText={this.onDesginationHandler} 
            //onChangeText={formikProps.handleChange('Designation')}
            onBlur={formikProps.handleBlur('Designation')}
            />
            <Text style={{ color: 'red' }}>
              {formikProps.touched.Designation && formikProps.errors.Designation}
            </Text>      
        </View>
        <View style={globalStyles.E}>
            <View style={globalStyles.H}>
                <Image
                      style={globalStyles.icon}
                      source={require('../img/brand.png')}
                />
                <Text style={globalStyles.sousTitre}>Marque</Text>
            </View>
            <TextInput
            placeholder='Mercedes'
            style={globalStyles.TextInput}
           label='Marque'
           onChangeText={this.onMarqueHandler} 
                       //onChangeText={formikProps.handleChange('Marque')}
            onBlur={formikProps.handleBlur('Marque')}
            />

            <Text style={{ color: 'red' }}>
              {formikProps.touched.Marque && formikProps.errors.Marque}
            </Text>      
        </View>

        <View style={globalStyles.E}>
            <View style={globalStyles.H}>
                <Image
                      style={globalStyles.icon}
                      source={require('../img/cpla.png')}
                />
                <Text style={globalStyles.sousTitre}>Catégorie</Text>
            </View>
            <TextInput
            placeholder='Véhicule'
            style={globalStyles.TextInput}
            label='Categorie'
            onChangeText={this.onCategorieHandler}          
              // onChangeText={formikProps.handleChange('Categorie')}
            onBlur={formikProps.handleBlur('Categorie')}
             />
            <Text style={{ color: 'red' }}>
              {formikProps.touched.Categorie && formikProps.errors.Categorie}
            </Text>      
        </View>
       
        <View style={globalStyles.E}>
            <View style={globalStyles.H}>
                <Image
                    style={globalStyles.icon}
                      source={require('../img/venven.png')}
                />
                <Text style={globalStyles.sousTitre1}>CIN Fournisseur</Text>
            </View>
            <TextInput
            placeholder='12476625'
            style={globalStyles.TextInput}
           label='Id_fournisseur'
           onChangeText={this.onId_fournisseurHandler} 
            //onChangeText={formikProps.handleChange('IdF')}
            onBlur={formikProps.handleBlur('Id_fournisseur')}
            />
            <Text style={{ color: 'red' }}>
              {formikProps.touched.Id_fournisseur && formikProps.errors.Id_fournisseur}
            </Text>      
     </View>
       
        <View style={globalStyles.E}>
            <View style={globalStyles.H}>
                <Image
                      style={globalStyles.icon}
                      source={require('../img/price.png')}
                />
                <Text style={globalStyles.sousTitre}>Prix Achat</Text>
            </View>
            <TextInput
            placeholder='0'
            style={globalStyles.TextInput}
            label='PrixAchat'
            onChangeText={this.onPrixAchatHandler} 
            //onChangeText={formikProps.handleChange('PrixAchat')}
            onBlur={formikProps.handleBlur('PrixAchat')}
            keyboardType='numeric'
            /> 
            <Text style={{ color: 'red' }}>
              {formikProps.touched.PrixAchat && formikProps.errors.PrixAchat}
            </Text>     
        </View>

        <View style={globalStyles.E}>
            <View style={globalStyles.H}>
                <Image
                      style={globalStyles.icon}
                      source={require('../img/price.png')}
                />
                <Text style={globalStyles.sousTitre}>Prix Vente</Text>
            </View>
            <TextInput
            placeholder='0'
            style={globalStyles.TextInput}
             label='PrixVente'
             onChangeText={this.onPrixVenteHandler} 
            //onChangeText={formikProps.handleChange('PrixVente')}
            onBlur={formikProps.handleBlur('PrixVente')}
            keyboardType='numeric'
            /> 
            <Text style={{ color: 'red' }}>
              {formikProps.touched.prixVente&& formikProps.errors.prixVente}
            </Text>     
        </View>


        <View style={globalStyles.E}>
            <View style={globalStyles.H}>
                <Image
                      style={globalStyles.icon}
                      source={require('../img/dis.png')}
                />
                <Text style={globalStyles.sousTitre}> Remise</Text>
            </View>
            <TextInput
            placeholder='0'
            style={globalStyles.TextInput}
           label='MaxRemise'
           onChangeText={this.onMaxRemiseHandler} 
                       //onChangeText={formikProps.handleChange('MaxRemise')}
            onBlur={formikProps.handleBlur('MaxRemise')}
            keyboardType='numeric'
            /> 
            <Text style={{ color: 'red' }}>
              {formikProps.touched.MaxRemise && formikProps.errors.MaxRemise}
            </Text>     
        </View>
        <View style={globalStyles.E}>
            <View style={globalStyles.H}>
                <Image
                      style={globalStyles.icon}
                      source={require('../img/alert.png')}
                />
                <Text style={globalStyles.sousTitre}>Quantité d'alerte</Text>
            </View>
            <TextInput
            placeholder='0'
            style={globalStyles.TextInput}
            label='QuantiteAlerte'
            onChangeText={this.onQuantiteAlerteHandler} 
            //onChangeText={formikProps.handleChange('QuantiteAlerte')}
            onBlur={formikProps.handleBlur('QuantiteAlerte')}
            keyboardType='numeric'
            /> 
            <Text style={{ color: 'red' }}>
              {formikProps.touched.QuantiteAlerte && formikProps.errors.QuantiteAlerte}
            </Text>     
        </View>
        
        <View style={globalStyles.E}>
            <View style={globalStyles.H}>
                <Image
                      style={globalStyles.icon}
                      source={require('../img/lalaw.png')}
                />
                <Text style={globalStyles.sousTitre}>Quantité</Text>
            </View>
            <TextInput
            placeholder='0'
            style={globalStyles.TextInput}
           label='QuantiteArticle'
            onChangeText={this.onQuantiteArticleHandler} 
            //onChangeText={formikProps.handleChange('QuantiteArticle')}
            onBlur={formikProps.handleBlur('QuantiteArticle')}
            keyboardType='numeric'
            /> 
            <Text style={{ color: 'red' }}>
              {formikProps.touched.QuantiteArticle && formikProps.errors.QuantiteArticle}
            </Text>     
        </View>
        
        

      
        </React.Fragment>
      )}
      
    </Formik>
        <View style={{fontSize:20}}>
    <Button title='Ajouter' 
                onPress={() => this.Submit()}
               color='#E8B200'
               
/>
  </View>
    </ScrollView>
</View>
    )}}

    export default ajoutArticle;