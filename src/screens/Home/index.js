import React, { useState } from "react";
import keys from "../../keys";
import { Text, View } from "react-native";
import styles from "./styles";

const HomeScreen = props => {
  const [current, setCurrent] = useState({});

  const handlePress = key => {
      props.navigation.navigate('Key', { key });
  }

  const keyButtons = Object.values(keys).map(key =>
    <View key={`button-${key.key}`} style={[styles.keyButton, key.keyStyles.button]}>
        <Text style={[styles.keyButtonText, key.keyStyles.text]} onPress={() => handlePress(key)}>{key.key}</Text>
    </View>
  );

  return <View style={styles.container}>
          <Text style={styles.mainTitle}>Circle of Fifths</Text>
          {keyButtons}
  </View>;
}

export default HomeScreen;