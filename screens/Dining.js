import React from 'react';
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { Container, Header, Content, Card, CardItem, Body,
        Text, Button, Icon, Left, Right, Fragment, Thumbnail,
        Item, Input, Spinner
      } from 'native-base';
import DiningComponent from '../components/DiningComponent.js';

import { db } from '../db';

let itemsRef = db.ref();

export default class DiningScreen extends React.Component {
  static navigationOptions = {
    title: 'DiningScreen',
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
            <Input placeholder="Search restaurants and bars..." />
            <Icon name="ios-menu" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header> 



        <Card style={styles.card}>
          <CardItem>
            <Left>
              <Thumbnail source={require('../assets/images/elbarquero_logo.jpeg')} />
              <Body>
                <Text>El Barquero</Text>
                <Text note>Bar</Text>
              </Body>
            </Left>
          </CardItem> 
          <CardItem cardBody>
            <Image source={
              require('../assets/images/elbarquero.jpg')
              } style={{height: 200, width: null, flex: 1}}/>
          </CardItem>
          <CardItem>
            <Text note>We welcome anybody that would enjoy an open air bar that offers: Extensive variety of 
                      cocktails and the coldest beers in the island, Pool table, Karaoke, hoola hoops, good 
                      music collection, snacks and even Wi-Fi. Besides, don´t miss the chance to check out our 
                      autograph albums of celebrities from all parts of the world that have visited the Galapagos 
                      in the last 20 years!
            </Text>
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent>
                <Icon active name="wallet" />
              </Button>

              <Button transparent>
                <Icon active name="wifi" />
              </Button>
            </Left>
            <Right>
              <Button transparent>
                <Icon active name="pin" />
                  <Text>Ignacio Hernandez y Manuel Julian Cobos</Text>
              </Button>
            </Right>
          </CardItem>
        </Card>



        <Card style={styles.card}>
          <CardItem>
            <Left>
              <Thumbnail source={require('../assets/images/iguanarock_logo.jpg')} />
              <Body>
                <Text>Iguana Rock Bar</Text>
                <Text note>Bar</Text>
              </Body>
            </Left>
          </CardItem> 
          <CardItem cardBody>
            <Image source={
              require('../assets/images/iguanarock.jpg')
              } style={{height: 200, width: null, flex: 1}}/>
          </CardItem>
          <CardItem>
            <Text note>Iguana Rock draws a festive, dance-loving crowd on weekends, 
                      and remains a laid-back spot during the week. It has a pool table, 
                      salsa beats and even gets an off-island band or two.
            </Text>
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent>
                <Icon active name="wallet" />
              </Button>

              <Button transparent>
                <Icon active name="wifi" />
              </Button>
            </Left>
            <Right>
              <Button transparent>
                <Icon active name="pin" />
                  <Text>Direction</Text>
              </Button>
            </Right>
          </CardItem>
        </Card>



        <Card style={styles.card}>
          <CardItem>
            <Left>
              <Thumbnail source={require('../assets/images/calipso_logo.jpeg')} />
              <Body>
                <Text>Calipso</Text>
                <Text note>Restaurant</Text>
              </Body>
            </Left>
          </CardItem> 
          <CardItem cardBody>
            <Image source={
              require('../assets/images/calipso.jpg')
              } style={{height: 200, width: null, flex: 1}}/>
          </CardItem>
          <CardItem>
            <Text note>A restaurant and bar hybrid famous for their homemade pizzas and welcoming staff.
            </Text>
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent>
                <Icon active name="wallet" />
              </Button>

              <Button transparent>
                <Icon active name="wifi" />
              </Button>
            </Left>
            <Right>
              <Button transparent>
                <Icon active name="pin" />
                  <Text>Av. Charles Darwin y Manuel J Cobos</Text>
              </Button>
            </Right>
          </CardItem>
        </Card>



        <Card style={styles.card}>
          <CardItem>
            <Left>
              <Thumbnail source={require('../assets/images/cangrejo_logo.jpeg')} />
              <Body>
                <Text>El Cangrejo Loco</Text>
                <Text note>Restaurant</Text>
              </Body>
            </Left>
          </CardItem> 
          <CardItem cardBody>
            <Image source={
              require('../assets/images/cangrejoloco.jpg')
              } style={{height: 200, width: null, flex: 1}}/>
          </CardItem>
          <CardItem>
            <Text note>A seafood restaurant with outdoor seating near the beach.
            </Text>
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent>
                <Icon active name="wallet" />
              </Button>

              <Button transparent>
                <Icon active name="wifi" />
              </Button>
            </Left>
            <Right>
              <Button transparent>
                <Icon active name="pin" />
                  <Text>Española y Alsacio Northia</Text>
              </Button>
            </Right>
          </CardItem>
        </Card>



        <Card style={styles.card}>
          <CardItem>
            <Left>
              <Thumbnail source={require('../assets/images/dreams.png')} />
              <Body>
                <Text>Galapagos Dreams</Text>
                <Text note>Restaurant</Text>
              </Body>
            </Left>
          </CardItem> 
          <CardItem cardBody>
            <Image source={
              require('../assets/images/dreams.jpeg')
              } style={{height: 200, width: null, flex: 1}}/>
          </CardItem>
          <CardItem>
            <Text note>A restaurant serving a range of foods, including International, 
                      Pizza, Fast Food, South American, and Ecuadorean
            </Text>
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent>
                <Icon active name="wallet" />
              </Button>

              <Button transparent>
                <Icon active name="wifi" />
              </Button>
            </Left>
            <Right>
              <Button transparent>
                <Icon active name="pin" />
                  <Text>Av. Charles Darwin y 12 De Febrero</Text>
              </Button>
            </Right>
          </CardItem>
        </Card>

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
