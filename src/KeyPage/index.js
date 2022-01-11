import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Vex from 'vexflow';
import { useScore } from 'react-native-vexflow';
import keys from '../keys';

const VF = Vex.Flow;

const KeyPage = ({ route }) => {
    const [context, stave] = useScore({
        contextSize: { x: 350, y: 350 },
        staveOffset: { x: 0, y: 0 },
        staveWidth: 300,
        clef: 'treble',
    });
    const key = route.params.title;
    const keySignature = new VF.KeySignature(key);
    keySignature.addToStave(stave);
    const notes = keys[key].major.map(note =>
        new VF.StaveNote({ clef: 'treble', keys: [note], duration: 'q' }));

    var voice = new VF.Voice({ num_beats: 8, beat_value: 4 });
    voice.addTickables(notes);

    VF.Accidental.applyAccidentals([voice], key);
    keySignature.addToStave(stave);

    var formatter = new VF.Formatter().joinVoices([voice]).format([voice], 200);
    voice.draw(context, stave);

    return <View style={keyPageStyles}>
        {context.render()}
    </View>
}

const keyPageStyles = StyleSheet.create({
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
});

export default KeyPage;