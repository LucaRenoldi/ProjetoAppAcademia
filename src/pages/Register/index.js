import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet,TextInput, StatusBar} from 'react-native';
import * as Animatable from 'react-native-animatable'

export default function Register() {
 return (
   <View style={styles.container}>
        <View style={{backgroundColor:'#073170'}}>
            <Text style={{color:'#ffffff', fontSize:20, textAlign: 'center', padding:10}}>Cadastro</Text>
        </View>

        <Animatable.View animation='fadeInLeft'style={styles.containerForm}>
            <Text style={styles.title}>Email</Text>
        	<TextInput style={styles.input}
            placeholder='Digite seu email...'
            placeholderTextColor={'#073170'}
            autoComplete='email'/>

            <Text style={styles.title}>Username</Text>
        	<TextInput style={styles.input}
            placeholder='Crie um username...'
            placeholderTextColor={'#073170'}
            autoComplete='username'/>

            

    	    <Text style={styles.title}>Criar uma senha</Text>
        	<TextInput style={styles.input}
            placeholder='Crie uma senha...'
            placeholderTextColor={'#073170'}/>

            <Text style={styles.title}>Confime a senha</Text>
        	<TextInput style={styles.input}
            placeholder='confimar senha...'
            placeholderTextColor={'#073170'}/>

            <TouchableOpacity style={styles.RegisterButton}>
                <Text style={styles.registerText}>Confirmar</Text>
            </TouchableOpacity>
            
        </Animatable.View>
   </View>
   
  );
}

const styles = StyleSheet.create({

    container: {
        flex:1,
    },

    containerForm:{
        paddingStart:'5%',
        paddingEnd:'5%',
    },

    title:{
        marginTop: 60,
       fontSize:20,
       color:'#073170',
    },

    input:{
        borderEndColor: '#073170',
        borderBottomWidth:1,
        marginBottom:12,
        fontSize:12
    },

    RegisterButton:{
        position:'fixed',
        alignSelf: 'center',
        backgroundColor:'#073170',
        width:'90%',
        borderRadius: 50,
        paddingVertical: 8,
        bottom: -100,
      },
    
      registerText:{
        fontSize: 20,
        color:'#ffffff',
        textAlign: 'center',
        fontWeight: 'bold'
      }
})