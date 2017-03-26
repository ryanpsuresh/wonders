import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Button from 'apsl-react-native-button';
import { StackNavigator } from 'react-navigation';
import { Text, View, StyleSheet, Image } from 'react-native';

const images = {
  'world': require('../assets/giphy.gif'),
  'world2': require('../assets/giphy2.gif'),
  'world3': require('../assets/giphy3.gif'),
  'world4': require('../assets/giphy4.gif'),
  'world5': require('../assets/giphy5.gif'),
  'world6': require('../assets/giphy6.gif'),
  'world7': require('../assets/giphy7.gif'),
}

export class Welcome extends React.Component {
  static navigationOptions = {
    header: {
      style: { position: 'absolute' },
    }
  };
  render() {
    const { navigate } = this.props.navigation; 
    return (
       <View style={{flex: 1}}>
        <Image
          source={images.world5}
          resizeMode='cover'
          style={styles.container}
        >
          <View style={styles.titleContianer}>
            <Text style={styles.title}>
              Explorer
            </Text>
          </View>
          <View style={styles.lastWorkoutContainer}>
            <Text style={styles.lastWorkoutTitle}>
              Discover the wonders of the world in the palm of your hand
            </Text>
          </View>
          <View style={{padding: 30 }}>
            <Button
              onPress={() => navigate('Places')}
              title="Places"
              style={styles.button}
              textStyle={styles.buttonText}
              children={'Start Button'}
            />
          </View>
        </Image>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: null,
    height: null
  },
  titleContianer: {
    backgroundColor: 'transparent', 
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.2
  },
  title: {
    backgroundColor: 'transparent',
    fontSize: 48,
    fontWeight: '500',
    color: '#F3F3F3',
    textAlign: 'center'
  },
  lastWorkoutContainer: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    flex: 0.3
  },
  lastWorkoutTitle: {
    fontSize: 30,
    alignItems: 'center',
    textAlign: 'center',
    margin: 20,
    fontWeight: '100',
    color: '#F3F3F3'
  },
  button: {
    backgroundColor: 'transparent',
    borderColor: '#EADCDC',
    padding: 10,
    borderRadius: 10
  },
  buttonText: {
    color: '#EADCDC'
  }
});
