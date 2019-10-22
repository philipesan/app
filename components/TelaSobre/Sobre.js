import React, { Component } from 'react';
import {
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  Image,
  View,
} from 'react-native';
import PropTypes from 'prop-types';

export default class Sobre extends Component{
  render(){
    return (
      <View style={styles.container}>
        <Image source={require('./nergigante.gif')} />
        <Text style={styles.instructions}>Aplicativo feito por Victor Smirnov</Text>
        <Text style={styles.instructions}>RA1800337</Text>
      </View>
    );    
  }
}

AppRegistry.registerComponent('Sobre', () => Sobre);


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
});

