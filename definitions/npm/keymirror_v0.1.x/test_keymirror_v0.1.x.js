 // @flow
import keymirror from 'keymirror'

const constants = keymirror({a: null, b: null});

const a: string = constants.a;

// $FlowExpectedError
constants.c;
