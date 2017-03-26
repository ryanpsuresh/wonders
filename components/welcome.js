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
    )
  }
}
