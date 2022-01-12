import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ReactNativeSVGContext, NotoFontPack } from 'standalone-vexflow-context';
import Vex from 'vexflow';

const X_OFFSET = 10;
const Y_OFFSET = 150;
const STAVE_WIDTH = 380;
const SVG_CONTEXT_SIZE = {
    width: 400,
    height: 400,
}

const KeyPage = ({ route }) => {
    const context = new ReactNativeSVGContext(NotoFontPack, SVG_CONTEXT_SIZE);
    const stave = new Vex.Flow.Stave(X_OFFSET, Y_OFFSET, STAVE_WIDTH);
    stave.setContext(context);
    stave.setClef('treble');
    const keySignature = new Vex.Flow.KeySignature(route.params.title);
    keySignature.addToStave(stave, true);
    stave.draw();
    route.params.voice.draw(context, stave);
    console.log(route.params.voice.getBoundingBox(), 'bounding box');

    return <View style={keyPageStyles}>
        <View style={{ ...SVG_CONTEXT_SIZE, backgroundColor: 'pink' }}>
            {context.render()}
        </View>
    </View>
}

const keyPageStyles = StyleSheet.create({
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
});

export default KeyPage;