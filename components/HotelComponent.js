// HotelComponent.js

import React, { Component } from 'react';
import {  View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

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
    }
});

var busType;

export default class HotelComponent extends Component {

  static propTypes = {
      items: PropTypes.array.isRequired
  };

  render() {
    return (
      <View style={styles.itemsList}>
        {this.props.items.map((item, index) => {
            if(item.Clasificación === 'Hostal'){
              return (
                <View key={index}>
                    <Text style={styles.itemtext}>{item.Actividad}</Text>
                    <Text style={styles.itemtext}>{item.Clasificación}</Text>
                </View>
                
              )
            }
        })}
      </View>
    );
  }
}
