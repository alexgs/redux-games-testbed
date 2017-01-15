'use strict';

import counterReducer from '../reducers/counterReducer';
import simpleActionCreator from '../actions/simpleActionCreators';

function createStore( reducer, initialState ) {
    let state = initialState;
    let subscribers = [ ];

    function dispatch( action ) {
        state = reducer( state, action );
        subscribers.forEach( subscriber => subscriber() );
    }

    function getState() {
        return state;
    }

    function subscribe( callback ) {
        subscribers.push( callback );
    }

    return { dispatch, getState, subscribe };
}

let startingValue = 0;
let incrementAction = simpleActionCreator.increment();
let store = createStore( counterReducer, startingValue );

store.subscribe( () => {
    console.log( 'State: ' + store.getState() );
} );
store.dispatch( incrementAction );
store.dispatch( incrementAction );
store.dispatch( incrementAction );
