'use strict';

import chai from 'chai';
import dirtyChai from 'dirty-chai';
import Immutable from 'immutable';

import counterReducer, { errorMessages } from '../../src/reducers/counterReducer';

chai.use( dirtyChai );
let expect = chai.expect;

describe.only( 'The counter reducer', function() {

    it( 'accepts an Immutable Map for the first argument', function() {
        let state = Immutable.Map();
        expect( function() {
            counterReducer( state, { type: undefined } );
        } ).to.not.throw();
    } );

    it( 'throws an error if the first argument is not an Immutable Map', function( done ) {
        [
            { },
            27,
            'hello',
            null,
            { value: 8 }
        ].forEach( ( element ) => {
            expect( function() {
                counterReducer( element, { type: undefined } );
            } ).to.throw( Error, errorMessages.stateImmutableMap );
        } );
        done();
    } );

    it( 'returns the original state if `action.type` is not the constant "INCREMENT_COUNTER"' );
    it( 'returns a new state when `action.type` is "INCREMENT_COUNTER"' );
    it( 'returns a state with an increment `value` when `action.type` is "INCREMENT_COUNTER"' );

} );
