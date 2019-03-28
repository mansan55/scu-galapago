
import React from 'react';
import { ScrollView, StyleSheet, Image } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { Container, Header, Content, Card, CardItem, Body,
        Text, Button, Icon, Left, Right, Fragment, Thumbnail,
        Item, Input
      } from 'native-base';

export default class ToursScreen extends React.Component {
  static navigationOptions = {
    title: 'ToursScreen',
  };

  render() {
    return (
      <Container style={styles.container}>
        <Content>

        <Header searchBar rounded>
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
                <Thumbnail source={require('../assets/images/logo.png')} />
                  <Body>
                    <Text>Albemarle Tours Cia. Ltda</Text>
                    <Text note>Agencia De Viaje</Text>
                  </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={
                require('../assets/images/isabela.jpg')
              } style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Text note>Take a tour on the beautiful island of Isabela. You can add more description here to
              really sell your point to the tourists!</Text>
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
                    <Text>Isabela, Calle Tero Real</Text>
                </Button>
              </Right>
            </CardItem>
          </Card>

          <Card style={styles.card}>
            <CardItem>
              <Left>
                <Thumbnail source={require('../assets/images/ArchiTravel_logo.jpg')} />
                  <Body>
                    <Text>Archi Travel</Text>
                    <Text note>Agencia De Viaje</Text>
                  </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={
                require('../assets/images/Architravel.jpg')
              } style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Text note>Archi Travel provides you with all of your needs for a tour of the
              island of Isabela. They are located just past the notable fountain landmark.</Text>
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
                    <Text>Isabela, Escalesia y Antonio Gil</Text>
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
    backgroundColor: '#6BC9B3',
  },
});
