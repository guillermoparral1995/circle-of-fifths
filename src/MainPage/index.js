import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import KeyButton from './KeyButton';
import keys from '../keys';
import * as Animatable from 'react-native-animatable';

const animation = {
    0: {
        transform: [{
            rotate: '270deg'
        }],
        scale: 0
    },
    0.5: {
        transform: [{
            rotate: '180deg',
        }],
        scale: 0.5
    },
    1: {
        transform: [{
            rotate: '0deg'
        }],
        scale: 1
    }
};

const MainPage = ({ navigation }) => {
    return <View style={mainPageStyles}>
        <Animatable.View animation={animation} style={keyContainerStyles} easing={"ease-in-out"}>
            {
                Object.entries(keys).map(([title, key], idx) =>
                    <KeyButton
                        key={`key-${title}`}
                        angle={idx * 30}
                        title={title}
                        navigation={navigation} />
                )
            }
        </Animatable.View>
    </View>
}

const keyContainerStyles = StyleSheet.create({
    width: 300,
    height: 300,
    borderRadius: 150,
})

const mainPageStyles = StyleSheet.create({
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black'
});

export default React.memo(MainPage);