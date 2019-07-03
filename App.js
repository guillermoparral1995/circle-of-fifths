import React from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from './HomeScreen';
import KeyScreen from './KeyScreen';
const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Key: {screen: KeyScreen},
});

const App = createAppContainer(MainNavigator);

export default App;