
//Como executar: 
//Drawer navigator não funciona no simulador "Web".
//Selecionar o simulador "Android" e clicar em "Tap to play",
//Caso não hajam seções disponíveis, baixar o App Expo em
//um aparelho android e escanear o QR Code fornecido.

import React, { Component } from 'react';
import {
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';



export default class TelaInicial extends Component{
//Esconde o Navigator Header
  static navigationOptions = {
    title: 'Home',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  render(){
    return (
      <View style={styles.container}>        
        <Text style={styles.header}>Estética Avançada para Carros</Text>
      </View>
    );

  }
}

AppRegistry.registerComponent('TelaInicial', () => TelaInicial);


//Folha de estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#82bbe0',
  },
  instructions: {
    fontFamily: 'Roboto',
    fontSize: 21,
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  header: {
    fontFamily: 'Roboto',
    fontSize: 25,
    textAlign: 'center',
    fontStyle: 'strong',
    color: '#FFF',
    marginTop: 5,
    marginBottom: 5,
  },
});

