import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import { ReactNativeSVGContext, NotoFontPack } from 'standalone-vexflow-context';
import { Stave } from 'vexflow/src/stave';
import { EasyScore } from 'vexflow/src/easyscore';
import { System } from 'vexflow/src/system';

export default class KeyScreen extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const {key, scales, keyStyles} = this.props.navigation.getParam('key');
        const backgroundColor = (color) => {return {backgroundColor: color}};
        const context = new ReactNativeSVGContext(NotoFontPack, { width: 400, height: 400 });
        const score = new EasyScore();
        const system = new System();
        system.setContext(context);
        system.addStave({
            voices: [score.voice(score.notes('C#5/q, B4, A4, G#4'))]
        });
        // const stave = new Stave(100, 150, 200);
        // stave.setContext(context);
        // stave.setClef('treble');
        // stave.setTimeSignature('4/4');
        // stave.draw();

        system.draw();
        return <View style={[styles.container, backgroundColor(keyStyles.button.backgroundColor)]}>
            <Text style={styles.headerIntro}>Analicemos el tono</Text>
            <Text style={styles.headerKey}>{key}</Text>
            <View>{context.render()}</View>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerIntro: {
        fontSize: 20,
        color: '#fff'
    },
    headerKey: {
        fontSize: 36,
        fontWeight: 'bold',
        marginTop: 20,
        color: '#fff'
    }
});