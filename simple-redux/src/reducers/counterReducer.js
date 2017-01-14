'use strict';

import { INCREMENT_COUNTER } from '../constants';

let initialState = 0;

const counter = function counterReducer( state = initialState, action ) {
    switch ( action.type ) {
        case INCREMENT_COUNTER:
            return ( state + 1 );
        default:
            return state;
    }
};

export default counter;

let state = 0;
console.log( state );
state = counter( state, { type: INCREMENT_COUNTER } );
console.log( state );
state = counter( state, { type: INCREMENT_COUNTER } );
console.log( state );
