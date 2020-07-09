import {StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import LoginView from './views/loginScreen';


const HomeStack = createStackNavigator();




function MainPageStack() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name={'Login'} component={LoginView} />
    </HomeStack.Navigator>
  );
}

function MainStack() {
  return (
    <NavigationContainer>
      <MainPageStack />
    </NavigationContainer>
  );
}

export default MainStack;
