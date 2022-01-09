import * as React from 'react';
import { View, Text } from 'react-native';

const KeyPage = ({ route }) => {
    return <View style={{ backgroundColor: 'gray' }}>
        <Text style={{ fontSize: 60 }}>{route.params.title}</Text>
    </View>
}

export default KeyPage;