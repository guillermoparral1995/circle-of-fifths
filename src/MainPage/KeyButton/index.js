import * as React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

const onPress = (navigation, title) => {
    navigation.navigate('Key', { title })
}

const KeyButton = ({ angle, title, navigation }) => {
    return <TouchableOpacity underlayColor="gray" onPress={() => onPress(navigation, title)}>
        <View style={keyButtonStyles(angle)}>
            <Text style={keyTextStyles(angle)}>{title}</Text>
        </View>
    </TouchableOpacity>
}

const keyTextStyles = (angle) => StyleSheet.create({
    position: 'absolute',
    left: 25,
    top: 25,
    transform: [{
        translateX: -3,
    }, {
        translateY: -10
    }, {
        rotate: `-${angle}deg`
    }]
});

const keyButtonStyles = (angle) => StyleSheet.create({
    backgroundColor: 'pink',
    width: 50,
    height: 50,
    borderRadius: 25,
    position: 'absolute',
    transform: [{
        rotate: `${angle}deg`,
    }, {
        translateX: 150,
    }],
    left: 150,
    top: 150,
    marginLeft: -25,
    marginTop: -25,
})

export default KeyButton;