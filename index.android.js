/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import GroceryApp from './components/GroceryApp';
import NativeBase from './components/NativeBase';

export default class groceryApp extends Component {
  render() {
    return (
      <NativeBase />
    );
  }
}


AppRegistry.registerComponent('groceryApp', () => groceryApp);
