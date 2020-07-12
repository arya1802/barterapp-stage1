import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity,TextInput, Alert } from 'react-native';
import db from '../config';
import firebase from 'firebase';

export default class WelcomeScreen extends Component {
  constructor(){
    super()
    this.state={
      emailId : '',
      password: ''
    }
  }

  userLogin = (emailId, password)=>{
    firebase.auth().signInWithEmailAndPassword(emailId, password)
    .then(()=>{
      return Alert.alert("LOGIN SUCCESSFULL")
    })
    .catch((error)=> {
      var errorCode = error.code;
      var errorMessage = error.message;
      return Alert.alert(errorMessage)
    })
  }

  userSignUp = (emailId, password) =>{
    firebase.auth().createUserWithEmailAndPassword(emailId, password)
    .then((response)=>{
      return Alert.alert("SIGNUP SUCCESFULL")
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      return Alert.alert(errorMessage)
    });
  }


  render(){
    return(
      <View style={styles.container}>
      <View style={styles.profileContainer}>
        
          <Text style={styles.title}>MR.BARTER</Text>
          <Text style={styles.subtitle}>exchange buxchange boom</Text>
        </View>
       
        <View style={styles.buttonContainer}>
          <TextInput
          style={styles.loginBox}
          placeholder="abcdefg@bartersys.com"
          placeholderTextColor = "#00868B"
          keyboardType ='email-address'
          onChangeText={(text)=>{
            this.setState({
              emailId: text
            })
          }}
        />

        <TextInput
          style={styles.loginBox}
          secureTextEntry = {true}
          placeholder="password"
          placeholderTextColor = "#00868B"
          onChangeText={(text)=>{
            this.setState({
              password: text
            })
          }}
        />
          <TouchableOpacity
            style={[styles.button,{marginBottom:20, marginTop:20}]}
            onPress = {()=>{this.userLogin(this.state.emailId, this.state.password)}}
            >
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={()=>{this.userSignUp(this.state.emailId, this.state.password)}}
            >
            <Text style={styles.buttonText}>SIGNUP</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#BFEFFF'
  },
  profileContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  title :{
    fontSize:55,
    fontWeight:'400',
    paddingBottom:30,
    color : '#00868B'
  },
  subtitle :{
    fontSize:15,
    fontWeight:'200',
    paddingBottom:20,
    color : '#00868B'
  },
  loginBox:{
    width: 300,
    height: 40,
    borderWidth: 1.5,
    borderColor : '#00688B',
    fontSize: 20,
    margin:10,
    paddingLeft:10
  },
  button:{
    width:300,
    height:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:25,
    backgroundColor:"#00688B",
    shadowColor: "#fff",
    shadowOffset: {
       width: 0,
       height: 8,
    },
    shadowOpacity: 0.30,
    shadowRadius: 10.32,
    elevation: 16,
  },
  buttonText:{
    color:'#BFEFFF',
    fontWeight:'250',
    fontSize:20
  },
  buttonContainer:{
    flex:1,
    alignItems:'center'
  }
})
