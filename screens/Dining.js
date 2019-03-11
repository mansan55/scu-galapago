import React from 'react';
import { ScrollView, StyleSheet, Image } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { Container, Header, Content, Card, CardItem, Body,
        Text, Button, Icon, Left, Right, Fragment, Thumbnail,
        Item, Input
      } from 'native-base';


export default class DiningScreen extends React.Component {
  static navigationOptions = {
    title: 'DiningScreen',
  };

  render() {
    return (

      <Container style={styles.container}>
        <Content>

        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search restaurants..." />
            <Icon name="ios-restaurant" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>

          <Card style={styles.card}>
            <CardItem>
              <Left>
                <Thumbnail source={require('../assets/images/Canchalagua_logo.png')} />
                  <Body>
                    <Text>La Canchalagua</Text>
                    <Text note>Cafetería</Text>
                  </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={
                require('../assets/images/Canchalagua.png')
              } style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Text note>Cafe, Bar and Pizza all in one. Serving ceviche, soups, locally made wine,
                    and their signature canchalagua pizza</Text>
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
                    <Text>Floreana, Av 12 Febrero y Oswaldo Rosero</Text>
                </Button>
              </Right>
            </CardItem>
          </Card>

          <Card style={styles.card}>
            <CardItem>
              <Left>
                <Thumbnail />
                  <Body>
                    <Text>Devil's Crown</Text>
                    <Text note>Restaurante</Text>
                  </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={
                require('../assets/images/DevilsCrown.png')
              } style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Text note>Come one, come all to the Devil's Crown! Insert more interesting
                          description here!!</Text>
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
                    <Text>Floreana, Isla Floreana -12 De Febrero y Wittmer</Text>
                </Button>
              </Right>
            </CardItem>
          </Card>

        </Content>
      </Container>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    backgroundColor: '#263E3D',
  },
  card: {
    color: '#6BC9B3',
  },
});
