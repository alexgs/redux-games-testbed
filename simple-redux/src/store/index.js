import { createStore } from 'redux';
import reducers from '../reducers';

const awesomeStore = createStore( reducers );

export default awesomeStore;
