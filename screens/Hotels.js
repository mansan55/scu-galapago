import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { Container, Header, Content, Card, CardItem, Body, Text } from 'native-base';
import ItemComponent from '../components/ItemComponent.js';

import { db } from '../db';

let itemsRef = db.ref();

export default class HotelsScreen extends React.Component {
  static navigationOptions = {
    title: 'HotelsScreen',
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
        <View style={styles.container}>
            {
                (this.state.items.length > 0)
                ? <ItemComponent items={this.state.items} />
                : <Text>No items</Text>
            }
        </View>
      </ScrollView>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#263E3D',
  },
});
