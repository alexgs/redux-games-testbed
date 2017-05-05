import { INCREMENT_COUNTER } from '../constants';

const countersReducer = function( state, action ) {
    switch ( action[ 'type' ] ) {
        case INCREMENT_COUNTER:
            const currentValue = state.getIn( [ 0, 'value' ] );
            const newValue = currentValue + 1;
            return state.setIn( [ 0, 'value' ], newValue );
        default:
            return state;
    }

};

export default countersReducer;
