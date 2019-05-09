import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { Container, Header, Content, Card, CardItem, Body,
        Text, Button, Icon, Left, Right, Fragment, Thumbnail,
        Item, Input, Spinner
      } from 'native-base';
import HotelComponent from '../components/HotelComponent.js';

import { db } from '../db';

let itemsRef = db.ref();

export default class HotelsScreen extends React.Component {
  static navigationOptions = {
    title: 'HotelsScreen',
    header: null,
  };

  state = {
      items: [],
      text: '',
  }

  componentDidMount() {
      itemsRef.on('value', (snapshot) => {
          let data = snapshot.val();
          let items = Object.values(data);
          this.setState({items});
       });
  }

  searchFilterFunction = text => {    
    const newItems = this.items.filter(item => {      
      const itemData = item.NombreComercial.toUpperCase();
      const textData = text.toUpperCase();
      
      return itemData.indexOf(textData) > -1;    
    });    
    
    this.setState({ items: newItems });  
  };

  render() {
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Header searchBar rounded style={styles.searchbar} >
          
          <Icon name="ios-arrow-back" style={styles.arrowBack} onPress={() => this.props.navigation.navigate('Main')}/>
          
          <Text>{this.state.text}</Text>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search hotels & hostels..." onChangeText={text => this.searchFilterFunction(text)}/>
            <Icon name="ios-menu" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header> 



        <View style={styles.container}>
            {
                (this.state.items.length > 0)
                ? <HotelComponent items={this.state.items} />
                : <Spinner style={styles.spinner} />
            }
            <Text>{this.state.items.NombreComercial}</Text>
        </View>
      </ScrollView>

    )
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
