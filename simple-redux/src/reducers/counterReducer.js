'use strict';

import Immutable from 'immutable';
import { INCREMENT_COUNTER } from '../constants';

let initialState = Immutable.Map( { value: 0 } );
const ActionTypes = {
    INIT: '@@redux/INIT'
};

const counter = function counterReducer( state = initialState, action ) {
    // Convert Redux's initialization action to an immutable
    if ( action.type === ActionTypes.INIT ) {
        action = Immutable.Map( action );
    }

    if ( !Immutable.Map.isMap( state ) ) {
        throw new Error( 'Argument `state` must be type Immutable.Map' );
    }
    if ( !Immutable.Map.isMap( action ) ) {
        throw new Error( 'Argument `action` must be type Immutable.Map' );
    }

    switch ( action.get( 'type' ) ) {
        case INCREMENT_COUNTER:
            let newValue = state.get( 'value' ) + 1;
            return state.set( 'value', newValue );
        default:
            return state;
    }
};

export default counter;
