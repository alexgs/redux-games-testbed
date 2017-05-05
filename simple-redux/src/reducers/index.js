import { combineReducers } from 'redux';
import counterReducer from './counterReducer';

const rootReducer = combineReducers( {
    value: counterReducer
} );

export default rootReducer;
