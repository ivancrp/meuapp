import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar ,
  TouchableOpacity
} from 'react-native';



import Logo from '../components/Logo';
import Form from '../components/Formconsulta';

import {Actions} from 'react-native-router-flux';

export default class Consulta extends Component {

  login() {
      Actions.login();
  }

	render() {
		return(
			<View style={styles.container}>
				<Logo/>
				<Form type="Pesquisar"/>
				<View style={styles.signupTextCont}>
					<Text style={styles.signupText}>Já tem uma conta?</Text>
					<TouchableOpacity onPress={this.login}><Text style={styles.signupButton}> Sair</Text></TouchableOpacity>
				</View>
			</View>	
			)
	}
}

const styles = StyleSheet.create({
  container : {
    backgroundColor:'#ffffff',

    alignItems:'center',
    justifyContent :'center'
  },
  signupTextCont : {
  	flexGrow: 2,
    alignItems:'flex-end',
    justifyContent :'center',
    paddingVertical:16,
    flexDirection:'row'
  },
  signupText: {
  	color:'#0c30e3',//'#0c30e3', // 'rgba(255,255,255,0.6)',
    fontSize:16,
    flex: 1
  },
  signupButton: {
  	color:'#0c30e3',
  	fontSize:16,
  	fontWeight:'500'
  },

  logo: {
  	color:'#0c30e3',
  	fontSize:16,
  	fontWeight:'500'
  }
});