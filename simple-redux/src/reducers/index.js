import { combineReducers } from 'redux-immutable';
import countersReducer from './countersReducer';

const rootReducer = combineReducers( {
    counters: countersReducer
} );

export default rootReducer;
