import Immutable from 'immutable';
import { createStore } from 'redux';
import reducers from '../reducers';

const initialState = Immutable.fromJS( {
    counters: [
        {
            id: 'a2b3c5',
            value: 0
        }
    ]
} );
const awesomeStore = createStore( reducers, initialState );

export default awesomeStore;
