import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {useNavigation} from "@react-navigation/native";

export default function Welcome() {
    const navigation = useNavigation();
    return (
      <View style = {styles.container}>
           <View style={styles.containerLogo}>
               <Animatable.Image
               animation= 'flipInY'
                   source={require('../../assets/logo3.png')}
                   style={{width: '100%'}}
                   resizeMode="contain"
               />
           </View>

           <Animatable.View delay= {600}animation='fadeInUp' style={styles.containerForm}>
               <Text style={styles.title}>A Hora é Agora!!!</Text>
                <TouchableOpacity 
                    style={styles.registerButton} 
                    activeOpacity={0.8}
                    >
                   <Text style = {styles.registerButtonText}>Cadastre-se</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.loginButton} 
                    activeOpacity={0.8}
                    onPress={()=> navigation.navigate('SignIn')}
                >
                   <Text style = {styles.loginButtonText}>Já tem uma conta? Faça o login.</Text>
                </TouchableOpacity>
                
           </Animatable.View>
      </View>

     );
}

const styles = StyleSheet.create({

    container: {
        flex:1,
        backgroundColor:'#ffffff'
    },

    containerLogo:{
        flex:2,
        backgroundColor:"#ffffff",
        justifyContent: 'center',
        alignItems:'center',
    },
    
    containerForm: {
        flex:1,
        backgroundColor: '#073170',
        borderTopRightRadius: 25,
        borderTopLeftRadius:25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },

    title: {
        color: '#ffffff',
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 40,
        textAlign: 'center',
    },

    registerButton:{
        position: 'absolute',
        width: '70%',
        bottom:'35%',
        alignSelf:'center',
        paddingVertical:8,
        borderRadius:50,
        backgroundColor:'#ffffff'
    },

    registerButtonText:{
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        color:'#073170'
    },

    loginButton:{
        position: 'absolute',
        bottom:'15%',
        alignSelf:'center',
    },

    loginButtonText:{
        fontSize: 15,
        textAlign: 'center',
        color:'#ffffff'
    }

})