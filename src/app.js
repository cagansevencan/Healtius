import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {ThemeProvider} from 'styled-components';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Main from './MainStack';
import theme from './utils/theme';







function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <Main />
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

export default App;
