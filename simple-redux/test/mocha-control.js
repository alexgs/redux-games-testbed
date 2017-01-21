'use strict';

import chai from 'chai';
import dirtyChai from 'dirty-chai';
import Immutable from 'immutable';

import actionCreator from '../src/actions/simpleActionCreators';
import counterReducer from '../src/actions/simpleActionCreators';

chai.use( dirtyChai );
let expect = chai.expect;

describe( 'Experimental Controls', function() {

    context( 'Mocha', function() {

        it( 'should work', function() {
            expect( 1 + 1 ).to.equal( 2 );
            expect( true ).to.be.ok();
            expect( 'true' === 'false' ).to.be.false();
        } );

    } );

    context( 'The reducer', function() {

        it( 'should return an Immutable Map with a value of 1', function() {
            let initialState = Immutable.Map( { value: 0 } );
            let action = actionCreator.increment();
            let newState = counterReducer( initialState, action );
            expect( Immutable.Map.isMap( newState ) ).to.be.true();
            expect( newState.get( 'value' ) ).to.equal( 1 );
        } );

    } );
} );
