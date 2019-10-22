import * as React from 'react';
import * as Handler from 'react-native-gesture-handler';
import { AppRegistry, Text, View, StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Constants from 'expo-constants';

// You can import from local files
import TelaInicial from './components/TelaInicial/TelaInicial';
import AgendaHorario from './components/AgendaHorario/AgendaHorario';
import Sobre from './components/TelaSobre/Sobre'

const RootStack = createStackNavigator(
  {
    Home: TelaInicial,
    AgendaHorario: AgendaHorario,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#82bbe0',
      },
      headerTintColor: 'white',
    },
  }
);

const NavDrawer = createDrawerNavigator({
  Home: {
    screen: TelaInicial,
  },
  Sobre: {
    screen: Sobre,
  },
});

const AppContainer = createAppContainer(NavDrawer);
const AppContainer2 = createAppContainer(RootStack);


export default class App extends React.Component {
  render() {
    return (<AppContainer />);
  }
}

AppRegistry.registerComponent('App', () => App);
