import React from 'react';
import { FlatList, ActivityIndicator, Text, View,StyleSheet,TextInput,TouchableOpacity  } from 'react-native';

export default class Formconsulta extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true,
      numProcesso:''
   
    }
   
  }
  login =()=>{
 processo = this.state.numProcesso
    return fetch('https://contexto-api.tce.ce.gov.br/processos/porNumero?numero='+processo)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson.data,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }

  render(){

    if(this.state.isLoading){
      return(
        <View>
         <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )
    }

    return(
      <View style={styles.container}>
       
       <View>
             <TextInput style={styles.inputBox} 
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="Consulta de Processo"
                placeholderTextColor = '#ffffff'
                selectionColor="#fff"
                keyboardType="default"
                value={this.state.numProcesso}
                onChangeText={(numProcesso)=> this.setState({numProcesso})}
              />

              <TouchableOpacity style={styles.button} onPress={this.componentDidMount}>
                 <Text style={styles.buttonText}>{this.props.type}</Text>
              </TouchableOpacity>  

       </View>

         
         
            
       <View>
              <FlatList style={{ marginTop: 30 }}
                contentContainerStyle={styles.listItem}
                data={this.state.dataSource}
                renderItem={({item}) =>
                
                <View>
                  <Text style={styles.textProcesso}>{item.nrProcesso} </Text>
                  <Text> {item.assunto}</Text>
                </View>
               }
               keyExtractor={id => id.toString ()}
        />
       </View>
        
     

    </View>
    );
  }

}
const styles = StyleSheet.create({
  container : {
    flex: 1,
    justifyContent: 'center',
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
  },
  listItem: {
    backgroundColor: '#EEE',
    marginTop: 20,
    padding: 30,
  },
  textProcesso: {
    fontWeight: 'bold',
    fontSize: 18
  },
  
});
