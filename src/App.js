import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './screens/Home';
import KeyScreen from './screens/Key';
const MainNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Key: { screen: KeyScreen },
}, {
  headerShown: false
});

const App = createAppContainer(MainNavigator);

export default App;