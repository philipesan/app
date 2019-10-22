import React, { Component } from 'react';
import {
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  Button,
} from 'react-native';
import PropTypes from 'prop-types';

export default class AgendaHorario extends Component{
//Toolbar
  static navigationOptions = ({navigation, navigationOptions}) => {
    return {
      headerTitleStyle: {
        flex: 1,
        color: '#fff',
        textAlign: 'center',
        alignSelf: 'center',
        fontWeight: 'normal',
      },

      headerStyle: {
        backgroundColor: '#b5259e',
      },
    }
  }
  
  render(){
    return (
      <View style={styles.container}>
        <Text>Escolha um horario</Text> 
      </View>
    );

  }
}

AppRegistry.registerComponent('AgendaHorario', () => AgendaHorario);

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

