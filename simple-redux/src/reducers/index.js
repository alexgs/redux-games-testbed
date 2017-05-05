import { combineReducers } from 'redux-immutable';
import counterReducer from './counterReducer';

const rootReducer = combineReducers( {
    value: counterReducer
} );

export default rootReducer;
