import 'react-native-gesture-handler';
import * as React from 'react';
import {View, Text} from 'react-native';

export default function TermScreen(props) {
  if (props.authState === 'signedIn') {
    return <Text>Terms Screen</Text>;
  } else {
    return <></>;
  }
}
