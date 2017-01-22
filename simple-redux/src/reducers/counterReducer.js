'use strict';

import Immutable from 'immutable';
import { INCREMENT_COUNTER } from '../constants';

let initialState = Immutable.Map( { value: 0 } );

const counter = function counterReducer( state = initialState, action ) {
    if ( !Immutable.Map.isMap( state ) ) {
        throw new Error( errorMessages.stateImmutableMap );
    }

    switch ( action.type ) {
        // case INCREMENT_COUNTER:
        //     let newValue = state.get( 'value' ) + 1;
        //     return state.set( 'value', newValue );
        default:
            return state;
    }
};

export default counter;

let errorMessages = {
    stateImmutableMap: 'Argument `state` must be type Immutable.Map'
};

export { errorMessages };
