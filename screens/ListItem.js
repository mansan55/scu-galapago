import React from 'react';
import { View, Text, StyleSheet, ScrollView} from 'react-native';
import ItemComponent from '../components/ItemComponent';

import { db } from '../db';

let itemsRef = db.ref();

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#B6A6BB',
    }
  })

export default class ListItem extends React.Component {
  static navigationOptions = {
    title: 'ListItem',
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
                    this.state.items.length > 0
                    ? <ItemComponent items={this.state.items} />
                    : <Text>No items</Text>
                }
            </View>
          </ScrollView>
        )
    }
}
