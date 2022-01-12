import keys from './keys';
import Vex from 'vexflow';

const VF = Vex.Flow;
const createVoice = (scale) => Object.entries(keys).reduce((voices, [key, keyInfo]) => {
    const notes = keyInfo[scale].map(note =>
        new VF.StaveNote({ clef: 'treble', keys: [note], duration: 'q' }));

    var voice = new VF.Voice({ num_beats: 8, beat_value: 4 });
    voice.addTickables(notes);

    var formatter = new VF.Formatter().joinVoices([voice]).format([voice], 200);
    voices[key] = voice;
    return voices;
}, {});

const majorVoices = createVoice('major');

export default {
    major: majorVoices,
};