import React, { Component } from 'react';
import {  StyleSheet,  Text,  View,  TextInput,  TouchableOpacity } from 'react-native';
import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';

export default class Formcadastro extends Component {

  state = { email: '', password: ''}

  handleSignUp = async() => {
   try {
    const user = await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password);
    console.log('Usu: ' + user.value)
   } catch(err) {
    console.log(err)
   }
    
  
   /*  Actions.login()

      .catch(error => this.setState({ errorMessage: error.message })) */
  }


	render(){
		return(
		<View style={styles.container}>
          
             <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Email"
              placeholderTextColor = "#ffffff"
              selectionColor="#fff"
              keyboardType="email-address"
              onSubmitEditing={()=> this.email.focus()}
             value={this.state.email}
            onChangeText={email => this.setState({email})}
              title='email'
              />
          <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)'  
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor = "#ffffff"
            ref={(input) => this.password = input}
             value={this.state.password}
              onChangeText={password => this.setState({password})}
              title='password'
              />  
          
           <TouchableOpacity style={styles.button} onPress={this.handleSignUp}>
             <Text style={styles.buttonText}>{this.props.type}</Text>
           </TouchableOpacity>  

        </View>
			)
	}
}

const styles = StyleSheet.create({
  container : {
    flexGrow: 1,
    justifyContent:'center',
    alignItems: 'center'
  },

  inputBox: {
    width:300,
    backgroundColor:'#B7D7F2',//'rgba(255, 255,255,0.2)',
    borderRadius: 25,
    paddingHorizontal:16,
    fontSize:16,
    color:'#000000',
    marginVertical: 12,
    height:42
    
  },
  button: {
    width:300,
    backgroundColor:'#1c313a',
     borderRadius: 25,
      marginVertical: 10,
      paddingVertical: 13
  },
  buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center'
  }
  
});

/*  <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)'  
              placeholder="Confirmar Password"
              secureTextEntry={true}
              placeholderTextColor = '#ffffff'//"#0c30e3"
              ref={(input) => this.password = input}
             /* value={this.state.password}
              onChangeText={password => this.setState({password})} />  */
             
 