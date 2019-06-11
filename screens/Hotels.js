import React from 'react';
import { View, ScrollView, StyleSheet, Image } from 'react-native';
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
    
    this.setState({ items: this.items });  
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



        <Card style={styles.card}>
          <CardItem>
            <Left>
              <Thumbnail source={require('../assets/images/micaleta_logo.png')} />
              <Body>
                <Text>Mi Caleta Inn</Text>
                <Text note>Hostel</Text>
              </Body>
            </Left>
          </CardItem> 
          <CardItem cardBody>
            <Image source={
              require('../assets/images/micaleta.jpg')
              } style={{height: 200, width: null, flex: 1}}/>
          </CardItem>
          <CardItem>
            <Text note>The inn is divided into two bodies, one is the main house with three bedrooms three bathrooms, 
                      living, dining, large kitchen fully equipped. Also, there are three suites. Double room suite, 
                      one for two singles with the possibility of adding a couple of inflatable mattresses in case four 
                      friends want to share one large bedroom or if there is a large family
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
                  <Text>Manuel Agama S/N y Entre Alsacio Northia Y Loja</Text>
              </Button>
            </Right>
          </CardItem>
        </Card>



        <Card style={styles.card}>
          <CardItem>
            <Left>
              <Thumbnail source={require('../assets/images/maremio_logo.png')} />
              <Body>
                <Text>Mare Mio</Text>
                <Text note>Hotel</Text>
              </Body>
            </Left>
          </CardItem> 
          <CardItem cardBody>
            <Image source={
              require('../assets/images/maremio.jpg')
              } style={{height: 200, width: null, flex: 1}}/>
          </CardItem>
          <CardItem>
            <Text note>Located in Puerto Baquerizo Moreno, Mare Mio has accommodations with a garden. 
                      Complimentary WiFi is featured. All units include a fully equipped kitchen, 
                      allowing guests to prepare their own meals. A flat-screen TV with satellite 
                      channels and DVD player are available in some units.
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
                  <Text>Avenida Armada Nacional S/N y Juan Liger</Text>
              </Button>
            </Right>
          </CardItem>
        </Card>



        <Card style={styles.card}>
          <CardItem>
            <Left>
              
              <Body>
                <Text>Darling</Text>
                <Text note>Hostel</Text>
              </Body>
            </Left>
          </CardItem> 
          <CardItem cardBody>
            <Image source={
              require('../assets/images/darling.jpg')
              } style={{height: 200, width: null, flex: 1}}/>
          </CardItem>
          <CardItem>
            <Text note>Located in Puerto Baquerizo Moreno, 0.6 mi from San Cristóbal, Casa de Huespedes "Darling" 
                      features air-conditioned rooms with free WiFi. Free private parking is available on site.
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
              <Thumbnail source={require('../assets/images/mabell_logo.png')} />
              <Body>
                <Text>Casa Mabell</Text>
                <Text note>Hostel</Text>
              </Body>
            </Left>
          </CardItem> 
          <CardItem cardBody>
            <Image source={
              require('../assets/images/mabell.jpg')
              } style={{height: 200, width: null, flex: 1}}/>
          </CardItem>
          <CardItem>
            <Text note>Casa Mabell is hosting a comfortable house to begin their adventures in the beautiful Galapagos Islands. 
                      Administered by the Owner who willingly stands ready to provide the best service for you and your family.
            </Text>
          </CardItem>
          <CardItem>
            <Left>
            </Left>
            <Right>
              <Button transparent>
                <Icon active name="pin" />
                  <Text>Hernan Melville S/N y Alsacio Northia</Text>
              </Button>
            </Right>
          </CardItem>
        </Card>



        <Card style={styles.card}>
          <CardItem>
            <Left>
              <Thumbnail source={require('../assets/images/lewis_logo.png')} />
              <Body>
                <Text>Casa de Lewis</Text>
                <Text note>Hostel</Text>
              </Body>
            </Left>
          </CardItem> 
          <CardItem cardBody>
            <Image source={
              require('../assets/images/lewis.jpg')
              } style={{height: 200, width: null, flex: 1}}/>
          </CardItem>
          <CardItem>
            <Text note>Casa de Lewis is located in San Cristóbal, 1312 feet from Playa de Oro Beach. 
                    Free WiFi access is available in public areas.
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
