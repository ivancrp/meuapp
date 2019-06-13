import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar ,
  TouchableOpacity
} from 'react-native';

import Logo from '../components/Logo';
import Form from '../components/Forms';

import {Actions} from 'react-native-router-flux';

export default class Login extends Component {



	signup() {
		Actions.signup()
	}

	render() {
		return(
			<View style={styles.container}>
				<Logo/>
        <Text style={styles.login}>LOGIN</Text>
				<Form type="Entrar"/>
				<View style={styles.signupTextCont}>
					<Text style={styles.signupText}>Não tem uma conta?</Text>
					<TouchableOpacity onPress={this.signup}><Text style={styles.signupButton}> Cadastre-se</Text></TouchableOpacity>
				</View>
			</View>	
			)
	}
}
const styles = StyleSheet.create({
  container : {
    backgroundColor:'#ffffff',
    flex: 1,
    alignItems:'center',
    justifyContent :'center'
  },
  signupTextCont : {
  	flexGrow: 1,
    alignItems:'flex-end',
    justifyContent :'center',
    paddingVertical:16,
    flexDirection:'row'
  },
  signupText: {
  	color:'#0c30e3', //'rgba(255,255,255,0.6)',
  	fontSize:16
  },
  signupButton: {
  	color:'#0c30e3',
  	fontSize:16,
  	fontWeight:'500'
  },
  login: {
    fontSize:25,
    fontWeight:'500',
    color:'#1c313a',
    textAlign:'center'
  },
});