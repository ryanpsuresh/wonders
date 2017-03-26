import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Button from 'apsl-react-native-button';
import { StackNavigator } from 'react-navigation';
import { Text, View, StyleSheet, Image } from 'react-native';

export class Welcome extends React.Component {
  static navigationOptions = {
    header: {
      style: { position: 'absolute' },
    }
  };
}
