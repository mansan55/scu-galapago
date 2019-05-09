// DiningComponent.js

import React, { Component } from 'react';
import {  View, StyleSheet, Image} from 'react-native';
import PropTypes from 'prop-types';
import { Container, Header, Content, Card, CardItem, Body,
        Text, Button, Icon, Left, Right, Fragment, Thumbnail,
        Item, Input
      } from 'native-base';

const styles = StyleSheet.create({
    itemsList: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    itemtext: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
    },
    container: {
        flex: 1,
        paddingTop: 0,
        backgroundColor: '#263E3D',
    },
    card: {
        color: '#666666',
        paddingTop: 0,
    },

});

var busType;

export default class DiningComponent extends Component {

  static propTypes = {
      items: PropTypes.array.isRequired
  };

  render() {
    return (
      <View style={styles.itemsList}>
        {this.props.items.map((item, index) => {
            if(item.Clasificación === 'Restaurante' || item.Clasificación === 'Bar'
              || item.Clasificación === 'Cafetería' || item.Clasificación === 'Discoteca'
              || item.Clasificación === 'Fuente de soda'){
              return (
                <View key={index}>

                  <Card style={styles.card}>
                    <CardItem style={styles.carditem}>
                      <Left>
                        <Thumbnail source={require('../assets/images/placeholder.jpg')} />
                          <Body>
                            <Text>{item.NombreComercial}</Text>
                            <Text note>{item.Clasificación}</Text>
                          </Body>
                      </Left>
                    </CardItem> 
                    <CardItem cardBody>
                      <Image source={
                        require('../assets/images/placeholder.jpg')
                      } style={{height: 200, width: null, flex: 1}}/>
                    </CardItem>
                    <CardItem>
                      <Text note>This is where descriptions for each restaurant goes.
                                  It will describe the types of foods that a restaurant
                                  might have, and any other features that we can confirm.
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
                            <Text>{item.DireccionSiit}</Text>
                        </Button>
                      </Right>
                    </CardItem>
                  </Card>
                </View>
                
              )
            }
        })}
      </View>
    );
  }
}

