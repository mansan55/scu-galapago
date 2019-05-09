import React, { Component } from 'react';
import {
  StyleSheet,   // CSS-like styles
  Text,         // Renders text
  View,         // Container component
  Image,
  StatusBar
} from 'react-native';
import { createStackNavigator, createAppContainer, } from 'react-navigation';
import Swiper from './Swiper';
import Button from './Button.js';
//import Button from 'native-base';

export default class Screens extends Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    
    return (

    <Swiper>

      {/* First screen */}
      <View style={[styles.slide, {backgroundColor: '#666666'}]}>
        
        <Image source={require('../assets/images/turtle_underwater.jpg')} style={styles.backgroundImage} />
        <Image
              source={
                  require('../assets/images/FullLogo.png')
              }
              style={styles.welcomeImage}
            />
        <Text style={styles.text}>The ecotourist app serving the island of San Cristóbal</Text>
      </View>
      {/* Second screen */}
      <View style={[styles.slide, { backgroundColor: '#4AAFEE' }]}>
        <Image source={require('../assets/images/booby.jpg')} style={styles.backgroundImage} />
        <Text style={styles.headerTwo}>Conserve the Island</Text>
        <Text style={styles.text}>
          As you enjoy the island, please help conservation efforts by properly
          disposing of your trash and interacting with wildlife in appropriate settings
        </Text>
      </View>
      {/* Third screen */}
      <View style={[styles.slide, { backgroundColor: '#FC515B' }]}>
        <Image source={require('../assets/images/iguana.jpg')} style={styles.backgroundImage} />
        <Text style={styles.headerThree}>Share your Experiences</Text>
        <Text style={styles.text}>
          Upon your return, share not only your pictures but your experiences of helping 
          San Cristóbal through your mindfulness
        </Text>
        <Button text="Start Now" style={styles.button} onPress={() => this.props.navigation.navigate('Main')}/>
        
      </View>
    </Swiper>
    );
  }
}

const styles = StyleSheet.create({
  welcomeImage: {
    height: 100,
    width: 320,
    alignSelf: 'center',
  },
  button: {
    
  },
  // Slide styles
  slide: {
    flex: 1,                    // Take up all screen
    justifyContent: 'center',   // Center vertically
    alignItems: 'center',       // Center horizontally
  },
  // Header styles
  headerOne: {
    color: '#FFFFFF',
    fontFamily: 'Avenir',
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 0,
    textAlign: 'center',
    position: 'absolute',
    bottom: 360,
    paddingBottom: 0,

  },
  headerTwo: {
    color: '#FFFFFF',
    fontFamily: 'Avenir',
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 0,
    textAlign: 'center',
    position: 'absolute',
    bottom: 360,
    paddingBottom: 35,

  },
  headerThree: {
    color: '#FFFFFF',
    fontFamily: 'Avenir',
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 0,
    textAlign: 'center',
    position: 'absolute',
    bottom: 360,
    paddingBottom: 50,

  },
  // Text below header
  text: {
    color: '#FFFFFF',
    fontFamily: 'Avenir',
    fontSize: 18,
    marginHorizontal: 20,
    textAlign: 'center',
    
  },
  backgroundImage: {
    position: 'absolute',
    flex: 1,
    height: '100%',
    width: '100%',
  },
});