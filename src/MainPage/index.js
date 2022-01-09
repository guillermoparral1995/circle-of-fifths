import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import KeyButton from './KeyButton';
import keys from '../keys';

const MainPage = ({ navigation }) => {
    return <View style={mainPageStyles}>
        <View style={keyContainerStyles}>
            {
                Object.entries(keys).map(([title, key], idx) =>
                    <KeyButton
                        key={`key-${title}`}
                        angle={idx * 30}
                        title={title}
                        navigation={navigation} />
                )
            }
        </View>
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