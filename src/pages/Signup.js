import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar ,
  TouchableOpacity
} from 'react-native';



import Logo from '../components/Logo';
import Form from '../components/Formcadastro';

import {Actions} from 'react-native-router-flux';

export default class Signup extends Component {

  consulta() {
      Actions.consulta();
  }

	render() {
		return(
			<View style={styles.container}>
				<Logo/>
        <Text style={styles.cadastro}>CADASTRO DE USUÁRIOS</Text>
				<Form type="Cadastrar"/>
				<View style={styles.signupTextCont}>
					<Text style={styles.signupText}>Já tem uma conta?</Text>
					<TouchableOpacity onPress={this.consulta}><Text style={styles.signupButton}> Proxima</Text></TouchableOpacity>
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
  	color:'#0c30e3',//'#0c30e3', // 'rgba(255,255,255,0.6)',
  	fontSize:16
  },
  signupButton: {
  	color:'#0c30e3',
  	fontSize:16,
  	fontWeight:'500'
  },
  cadastro: {
    fontSize:25,
    fontWeight:'500',
    color:'#1c313a',
    textAlign:'center'
  },
});