'use strict';

import chai from 'chai';
import dirtyChai from 'dirty-chai';
import isPlainObject from 'lodash.isPlainObject';

import { INCREMENT_COUNTER } from '../../src/constants';
import actionCreators from '../../src/actions/simpleActionCreators';

chai.use( dirtyChai );
let expect = chai.expect;

describe.only( 'Simple action creators', function() {

    it( 'has a member function `increment`', function() {
        expect( actionCreators ).to.have.ownProperty( 'increment' );
        expect( actionCreators.increment ).to.be.a( 'function' );
    } );

    context( 'Function `increment`', function() {

        it( 'returns an object literal with a `type` property', function() {
            let action = actionCreators.increment();
            expect( isPlainObject( action ) ).to.be.true();
            expect( action ).to.have.ownProperty( 'type' );
        } );

        it( 'returns an object literal with the "INCREMENT_VALUE" value for the type property', function() {
            let action = actionCreators.increment();
            expect( action.type ).to.equal( INCREMENT_COUNTER );
        } );

    } );

} );
