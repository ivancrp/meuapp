import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  StatusBar 
} from 'react-native';
import * as firebase from "firebase";


import Routes from './src/Routes';

var firebaseConfig = {
  apiKey: "AIzaSyC90MDJxhPwi56XqNVMtDjPGZc_9F8zF_4",
  authDomain: "meuapp-f6dae.firebaseapp.com",
  databaseURL: "https://meuapp-f6dae.firebaseio.com",
  projectId: "meuapp-f6dae",
  storageBucket: "meuapp-f6dae.appspot.com",
  messagingSenderId: "286566542488",
  appId: "1:286566542488:web:c1a12f879d9cb0f2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default class App extends Component {
  render() {

   

    return (
      <View style={styles.container}>
        <StatusBar
           backgroundColor="#ffffff"
        
           barStyle="light-content"
         />
        <Routes/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
  }
});