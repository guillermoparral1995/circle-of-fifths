import React from "react";
import {keys} from "./keys";
import {StyleSheet, Text, View} from "react-native";

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
            <View key={`button-${key.key}`} style={[styles.keyButton, key.keyStyles.button]}>
                <Text style={[styles.keyButtonText, key.keyStyles.text]} onPress={() => this.handlePress(key)}>{key.key}</Text>
            </View>
        );

        return <View style={styles.container}>
                <Text style={styles.mainTitle}>Circle of Fifths</Text>
                {keyButtons}
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#77dd77',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
    },
    mainTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    },
    keyButton: {
        padding: 5,
        width: 45,
        height: 45,
        borderRadius: 90,
        marginTop: 10,
        position: 'absolute'
    },
    keyButtonText: {
        color: '#fff',
        position: 'absolute',
        top: '40%'
    }
});