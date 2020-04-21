import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import { MainStackNav } from './Navigation/MainStackNav';

class App extends React.Component {
  render() {
    return(
      <NavigationContainer>
        <MainStackNav />
      </NavigationContainer>
    )
  }
}

export default App;
