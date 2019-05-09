import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { Container, Header, Content, Card, CardItem, Body,
        Text, Button, Icon, Left, Right, Fragment, Thumbnail,
        Item, Input, Spinner
      } from 'native-base';
import ToursComponent from '../components/ToursComponent.js';

import { db } from '../db';

let itemsRef = db.ref();

export default class ToursScreen extends React.Component {
  static navigationOptions = {
    title: 'Touristic Attractions',
    header: null,
  };

  state = {
      items: []
  }

  componentDidMount() {
      itemsRef.on('value', (snapshot) => {
          let data = snapshot.val();
          let items = Object.values(data);
          this.setState({items});
       });
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Header searchBar rounded style={styles.searchbar}>
          
          <Icon name="ios-arrow-back" style={styles.arrowBack} onPress={() => this.props.navigation.navigate('Main')}/>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search tours..." />
            <Icon name="ios-menu" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header> 



        <View style={styles.container}>
            {
                (this.state.items.length > 0)
                ? <ToursComponent items={this.state.items} />
                : <Spinner />
            }
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  arrowBack: {
    paddingTop: 8,
    paddingHorizontal: 8, 

  },
  searchbar: {
    flex: 1,
  },

  spinner: {
    position: 'absolute',
    alignSelf: 'center',
    justifyContent: 'center',
  },

  container: {
    flex: 1,
    paddingTop: 0,
    backgroundColor: '#263E3D',
  },
});
