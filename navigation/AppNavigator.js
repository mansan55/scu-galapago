import React from 'react';
import { createAppContainer, createSwitchNavigator , createStackNavigator} from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import ToursScreen from '../screens/Tours.js';
import HotelsScreen from '../screens/Hotels.js';
import DiningScreen from '../screens/Dining.js';
import HomeScreen from '../screens/HomeScreen.js';
import ListItem from '../screens/ListItem.js';
import SettingsScreen from '../screens/SettingsScreen.js';
import Screens from '../screens/Screens.js';

export default createAppContainer(createStackNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Onboarding: Screens,
  Main: HomeScreen,
  Tour: ToursScreen,
  Hotel: HotelsScreen,
  Dining: DiningScreen,
  List: ListItem,
  Settings: SettingsScreen,
}));
