import Immutable from 'immutable';
import { createStore } from 'redux';
import reducers from '../reducers';

const initialState = Immutable.Map( {
    value: 0
} );
const awesomeStore = createStore( reducers, initialState );

export default awesomeStore;
