import React from 'react';
import {View, Text} from 'react-native';

export default function KeyScreen(props){
    return <View>
        <Text>{JSON.stringify(props)}</Text>
    </View>
}