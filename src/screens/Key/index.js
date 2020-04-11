import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const KeyScreen = props => {
  const {key, scales, keyStyles} = props.navigation.getParam('key');
  const backgroundColor = backgroundColor => ({ backgroundColor });
  
  return <View style={[styles.container, backgroundColor(keyStyles.button.backgroundColor)]}>
      <Text style={styles.headerIntro}>Analicemos el tono</Text>
      <Text style={styles.headerKey}>{key}</Text>
  </View>
}

export default KeyScreen