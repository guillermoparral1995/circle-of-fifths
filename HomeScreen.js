import React from "react";
import {keys} from "./keys";
import {Button, StyleSheet, Text, View} from "react-native";

export default class HomeScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            current: {}
        }
    }

    static navigationOptions = {
        title: "Hola!"
    };

    handlePress(key){
        this.props.navigation.navigate('Key', {key: key})
    }

    render() {
        const keyButtons = Object.values(keys).map(key =>
            <View key={`button-${key.key}`} style={styles.keyButton}>
                <Button title={key.key} onPress={() => this.handlePress(key)}/>
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
        width: '50%',
        marginTop: 10
    }
});