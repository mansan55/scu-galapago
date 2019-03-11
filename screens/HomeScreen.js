import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Alert,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  Container, Header, Content, Button, Text
} from 'native-base';

import { WebBrowser } from 'expo';
// Manuel added this
import { createStackNavigator, createAppContainer, } from 'react-navigation';
import { MonoText } from '../components/StyledText';


export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (

      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Image
              source={
                  require('../assets/images/GO.png')
              }
              style={styles.welcomeImage}
            />
          </View>

          <View style={styles.getStartedContainer}>

            <Text style={styles.getStartedText}>
              GalápaGo!
            </Text>
          </View>

          <View style={styles.contentContainer}>
            <Button
              style={styles.button}
              onPress={() => this.props.navigation.navigate('Tour')}
              ><Text>Tourist Attractions</Text>
            </Button>

            <Button
              style={styles.button}
              onPress={() => this.props.navigation.navigate('Dining')}
              ><Text>Dining</Text>
            </Button>

            <Button
              style={styles.button}
              onPress={() => this.props.navigation.navigate('Hotel')}
              ><Text>Hotels & Hostels</Text>
            </Button>

          </View>

        </ScrollView>

      </View>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use useful development
          tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#7CC785',
    paddingHorizontal: 10,
    paddingVertical: 10,
    margin: 20,
    alignItems: 'center',
    alignSelf: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#263E3D',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
    alignItems: 'center',
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
    paddingVertical: 10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
    paddingVertical: 5,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 40,
    color: '#11B4B1',
    lineHeight: 40,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
