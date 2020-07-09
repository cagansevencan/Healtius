import {StyleSheet, Text, View} from 'react-native';
import * as React from 'react';
import TermScreen from './termScreen';
import Box from '../components/box';
import SafeAreaView from 'react-native-safe-area-view';

import Amplify from 'aws-amplify';
import awsconfig from '../../aws-exports';
import {
  Authenticator,
  SignIn,
  SignUp,
  ConfirmSignUp,
  ConfirmSignIn,
  ForgotPassword,
} from 'aws-amplify-react-native';

Amplify.configure(awsconfig); //Configure our app to connect to our API

//console.disableYellowBox = true; //For dismiss box

function LoginView() {
  return (
    <Box as={SafeAreaView} flex={1}>
      <Authenticator
        usernameAttributes={'email'}
        hideDefault={true}
        authState="signIn"
        onStateChange={authState => console.log('authstate ...', authState)}>
        <TermScreen />
        <SignUp />
        <SignIn />
        <ConfirmSignUp />
        <ConfirmSignIn />
        <ForgotPassword />
      </Authenticator>
    </Box>
  );
}

export default LoginView;
