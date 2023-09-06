import React from 'react';
import { StyleSheet,View, Text, TextInput,TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable'

export default function SignIn() {
  return (
    <View style={styles.container}>
      <View style={styles.image}>
      <Animatable.Image
        animation='fadeIn' delay={500}
        source={require('../../assets/logoFundoBranco.png')}
      />
      </View>
      <Animatable.View animation='fadeInUp' delay={500} style={styles.containerForm}>
        <Text style={styles.title}>Email</Text>
        <TextInput
          placeholder='Digite seu email'
          placeholderTextColor={'#fff'}
          keyboardType='email-address'
          style={styles.input}
        />
        <Text style={styles.title}>Senha</Text>
        <TextInput
          placeholder='Digite sua senha'
          placeholderTextColor={'#fff'}
          secureTextEntry={true}
          style={styles.input}
        />

        <TouchableOpacity style={styles.signInButton}>
          <Text style={styles.signInText}>Entrar</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}



const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:'#ffffff'
  },

  image:{
    flex:1,
    backgroundColor:"#ffffff",
    justifyContent: 'center',
    alignItems:'center'
  },

  containerForm:{
    flex:1,
    backgroundColor:'#073170',
    borderTopRightRadius: 25,
    borderTopLeftRadius:25,
    paddingStart: '5%',
    paddingEnd: '5%'
  },

  title:{
    color:'#ffffff',
    fontSize:30,
    marginTop:28
  },

  input:{
    height:40,
    color: '#ffffff',
    borderBottomWidth: 1,
    borderColor: '#ffffff',
    marginBottom:12,
    fontSize:12
  },
  
  signInButton:{
    position:'fixed',
    alignSelf: 'center',
    backgroundColor:'#ffffff',
    width:'70%',
    borderRadius: 50,
    paddingVertical: 8,
    bottom: -60,
  },

  signInText:{
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold'
  }
})