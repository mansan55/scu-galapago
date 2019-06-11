import React from 'react';
import { View, ScrollView, StyleSheet, Image } from 'react-native';
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



        <Card style={styles.card}>
          <CardItem>
            <Left>
              <Thumbnail source={require('../assets/images/galeducation_logo.jpeg')} />
              <Body>
                <Text>GalEducation</Text>
                <Text note>Travel Agency</Text>
              </Body>
            </Left>
          </CardItem> 
          <CardItem cardBody>
            <Image source={
              require('../assets/images/galeducation.jpeg')
              } style={{height: 200, width: null, flex: 1}}/>
          </CardItem>
          <CardItem>
            <Text note>Travel to Ecuador & stay at Galeducation S.A. exchanging your skills for accommodation. 
                      Work exchange with Worldpackers.
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
                  <Text>José De Villamil y Av. Charles Darwin</Text>
              </Button>
            </Right>
          </CardItem>
        </Card>



        <Card style={styles.card}>
          <CardItem>
            <Left>
              <Thumbnail source={require('../assets/images/wreckbay_logo.jpeg')} />
              <Body>
                <Text>Wreck Bay Diving Center</Text>
                <Text note>Travel Agency</Text>
              </Body>
            </Left>
          </CardItem> 
          <CardItem cardBody>
            <Image source={
              require('../assets/images/wreckbay.jpg')
              } style={{height: 200, width: null, flex: 1}}/>
          </CardItem>
          <CardItem>
            <Text note>Wreck Bay Diving Center is located in San Cristobal. 
                      Plan your visit to Wreck Bay Diving Center and a wealth of other attractions, 
                        well-known and undiscovered
            </Text>
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent>
                <Icon active name="wallet" />
              </Button>

            </Left>
            <Right>
              <Button transparent>
                <Icon active name="pin" />
                  <Text>Av. Teodoro Wolf y Charles Darwin</Text>
              </Button>
            </Right>
          </CardItem>
        </Card>


        <Card style={styles.card}>
          <CardItem>
            <Left>
              <Thumbnail source={require('../assets/images/galakiwi_logo.jpg')} />
              <Body>
                <Text>Galakiwi</Text>
                <Text note>Tour Operator</Text>
              </Body>
            </Left>
          </CardItem> 
          <CardItem cardBody>
            <Image source={
              require('../assets/images/galakiwi.jpg')
              } style={{height: 200, width: null, flex: 1}}/>
          </CardItem>
          <CardItem>
            <Text note>Galakiwi has grown to become the premier land based tour operator in the Galapagos Islands. 
                      Founded by Kiwis, we started back in 2004 to meet the demand for adventurous land tours in 
                      the Galapagos and our motto was simple: Galapagos Adventure. Kiwi Spirit. 
            </Text>
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent>
                <Icon active name="wallet" />
              </Button>

            </Left>
            <Right>
              <Button transparent>
                <Icon active name="pin" />
                  <Text>Av. Charles Darwin y Hernan Melville</Text>
              </Button>
            </Right>
          </CardItem>
        </Card>


        <Card style={styles.card}>
          <CardItem>
            <Left>
              <Thumbnail source={require('../assets/images/evolution_logo.png')} />
              <Body>
                <Text>Galapagos Blue Evolution</Text>
                <Text note>Tour Operator</Text>
              </Body>
            </Left>
          </CardItem> 
          <CardItem cardBody>
            <Image source={
              require('../assets/images/evolution.jpg')
              } style={{height: 200, width: null, flex: 1}}/>
          </CardItem>
          <CardItem>
            <Text note>Owner Joselo's dream was achieved in 2007 when he opened GALAPOS BLUE EVOLUTION.  
                       In 2011 he obtained his Diver Instructor license. Now, it's his fulltime job to be a 
                       dive instructor and show all the world the wonders of the Galapagos Islands.
            </Text>
          </CardItem>
          <CardItem>
            <Left>
            </Left>
            <Right>
              <Button transparent>
                <Icon active name="pin" />
                  <Text>Hernan Melville S/N y Ignacio Hernandez</Text>
              </Button>
            </Right>
          </CardItem>
        </Card>

        <Card style={styles.card}>
          <CardItem>
            <Left>
              <Thumbnail source={require('../assets/images/fishing_logo.png')} />
              <Body>
                <Text>Galápagos Eco Fishing</Text>
                <Text note>Travel Agency</Text>
              </Body>
            </Left>
          </CardItem> 
          <CardItem cardBody>
            <Image source={
              require('../assets/images/fishing.png')
              } style={{height: 200, width: null, flex: 1}}/>
          </CardItem>
          <CardItem>
            <Text note>GALAPAGOS ECO FISHING is a travel agency dedicated in giving the tourits an 
                      experience of a life time! We have fishing tours, the famous 360° tour all 
                      around the island, daily tours to the Kicker Rock and Punta Pitt, Isla Lobos, 
                      Bartolome, Seymour Norte, Floreana, Espanola, plus ferry tickets, and much more!
            </Text>
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent>
                <Icon active name="wallet" />
              </Button>
            </Left>
            <Right>
              <Button transparent>
                <Icon active name="pin" />
                  <Text>Av. Charles Darwin y Hernan Melville</Text>
              </Button>
            </Right>
          </CardItem>
        </Card>

        <Card style={styles.card}>
          <CardItem>
            <Left>
              <Thumbnail source={require('../assets/images/lavawavesurf_logo.jpg')} />
              <Body>
                <Text>Lavawave Surf</Text>
                <Text note>Classification</Text>
              </Body>
            </Left>
          </CardItem> 
          <CardItem cardBody>
            <Image source={
              require('../assets/images/lavawavesurf.jpg')
              } style={{height: 200, width: null, flex: 1}}/>
          </CardItem>
          <CardItem>
            <Text note>Lavawave Surf is a travel agency located in Puerto Baquerizo Moreno. It offers land and water 
                      adventure tours focused primarily on surfing in the Galapagos Islands. 
                      Our packages include the best day tours, accommodations and surf lessons, 
                      so that our clients experience Galapagos through its unique island culture, 
                      sports, and adventure.
            </Text>
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent>
                <Icon active name="wallet" />
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
