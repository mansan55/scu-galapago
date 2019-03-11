import React from 'react';
import { createAppContainer, createSwitchNavigator , createStackNavigator} from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import ToursScreen from '../screens/Tours.js';
import HotelsScreen from '../screens/Hotels.js';
import DiningScreen from '../screens/Dining.js';

export default createAppContainer(createStackNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Main: MainTabNavigator,
  Tour: ToursScreen,
  Hotel: HotelsScreen,
  Dining: DiningScreen,
}));


