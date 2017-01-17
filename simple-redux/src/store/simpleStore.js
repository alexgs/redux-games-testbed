'use strict';

import Immutable from 'immutable';

import counterReducer from '../reducers/counterReducer';
import simpleActionCreator from '../actions/simpleActionCreators';

function createStore( reducer, initialState ) {
    let state = null;
    if ( Immutable.Map.isMap( initialState ) ) {
        state = initialState;
    } else {
        throw new Error( 'Argument `initialState` must be type Immutable.Map' );
    }
    let subscribers = Immutable.List();

    function dispatch( action ) {
        state = reducer( state, action );
        subscribers.forEach( subscriber => subscriber() );
    }

    function getState() {
        return state;
    }

    function subscribe( callback ) {
        subscribers = subscribers.push( callback );
    }

    return { dispatch, getState, subscribe };
}

let startingValue = Immutable.Map( { value: 0 } );
let incrementAction = simpleActionCreator.increment();
let store = createStore( counterReducer, startingValue );

store.subscribe( () => {
    console.log( 'State: ' + store.getState() );
} );
store.dispatch( incrementAction );
store.dispatch( incrementAction );
store.dispatch( incrementAction );
