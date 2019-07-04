import React from "react";
import {keys, colours} from "./keys";
import {Button, StyleSheet, Text, View} from "react-native";

export default class HomeScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            current: {}
        }
    }

    static navigationOptions = {
        header: null
    };

    handlePress(key){
        this.props.navigation.navigate('Key', {key: key})
    }

    render() {
        const keyButtons = Object.values(keys).map(key =>
            <View key={`button-${key.key}`} style={[styles.keyButton, key.styles]}>
                <Text style={styles.keyButtonText} onPress={() => this.handlePress(key)}>{key.key}</Text>
            </View>
        );

        return <View style={styles.container}>
            <Text>Elegí un tono!</Text>
            {keyButtons}
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    keyButton: {
        padding: 5,
        width: 50,
        height: 50,
        borderRadius: 100,
        marginTop: 10
    },
    keyButtonText: {
        color: '#fff'
    }
});