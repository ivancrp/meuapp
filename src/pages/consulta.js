import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar ,
  TouchableOpacity
} from 'react-native';



import Logo from '../../src/components/Logo'
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
				<Form type="Pesquisar" style={{flex:2}}/>
       
				<View style={styles.signupTextCont}> 
					<TouchableOpacity onPress={this.login}>
            <Text style={styles.signupButton}> Já tem uma, Sair</Text>
          </TouchableOpacity>
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
  signupTextCont : { //signupTextCont
  	flexGrow:1,
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
  
});